import { REHYDRATE } from 'redux-persist/constants';

export default function storage(state = {}, action) {
  switch (action.type) {
    case REHYDRATE:
      return {
        ...state,
        isStorageLoaded: true,
      };
    default:
      return state;
  }
}
