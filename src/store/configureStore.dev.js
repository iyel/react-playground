// This file merely configures the store for hot reloading.
// This boilerplate file is likely to be the same for each project that uses Redux.
// With Redux, the actual stores are in /reducers.

import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import localForage from 'localforage';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../rootReducer';

export default function configureStore() {
  const middlewares = [
    // Add other middleware on this line...

    // Redux middleware that spits an error on you when you
    // try to mutate your state either inside a dispatch or between dispatches.
    reduxImmutableStateInvariant(),

    // thunk middleware can also accept an extra argument to be passed to each thunk action
    // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
    thunkMiddleware,
  ];

  const store = createStore(rootReducer, compose(
      applyMiddleware(...middlewares),
      autoRehydrate(),
      // add support for Redux dev tools
      window.devToolsExtension ? window.devToolsExtension() : f => f,
    ),
  );

  persistStore(store, { storage: localForage });

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../rootReducer', () => {
      const nextReducer = require('../rootReducer').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
