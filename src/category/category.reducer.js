import * as actions from './category.actions';

export default function category(state = { data: [] }, action) {
  switch (action.type) {
    case actions.CATEGORY_CREATE:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case actions.CATEGORY_UPDATE:
      const nextStateData = JSON.parse(JSON.stringify(state.data));
      nextStateData.find(d => d.id === action.payload.id).name = action.payload.name;
      return {
        ...state,
        data: nextStateData,
      };
    case actions.CATEGORY_DELETE:
      return {
        ...state,
        data: state.data.filter(c => !~action.payload.ids.indexOf(c.id)),
      };
    default:
      return state;
  }
}
