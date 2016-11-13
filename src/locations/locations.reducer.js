import * as actions from './locations.actions';

export default function locations(state = { data: [] }, action) {
  switch (action.type) {
    case actions.LOCATION_CREATE:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case actions.LOCATION_UPDATE: {
      const nextData = JSON.parse(JSON.stringify(state.data));
      const loc = nextData.find(d => d.id === action.payload.id);
      Object.assign(loc, action.payload);
      return {
        ...state,
        data: nextData,
      };
    }
    case actions.LOCATION_DELETE:
      return {
        ...state,
        data: state.data.filter(c => !~action.payload.ids.indexOf(c.id)),
      };
    default:
      return state;
  }
}
