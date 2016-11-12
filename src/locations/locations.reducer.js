import * as actions from './locations.actions';

export default function locations(state = { data: [] }, action) {
  switch (action.type) {
    case actions.LOCATION_CREATE:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case actions.LOCATION_UPDATE:
      const nextStateData = JSON.parse(JSON.stringify(state.data));
      const loc = nextStateData.find(d => d.id === action.payload.id);
      loc.name = action.payload.name;
      loc.address = action.payload.address;
      loc.coordinates = action.payload.coordinates;
      loc.categories = action.payload.categories;
      return {
        ...state,
        data: nextStateData,
      };
    case actions.LOCATION_DELETE:
      return {
        ...state,
        data: state.data.filter(c => !~action.payload.ids.indexOf(c.id)),
      };
    default:
      return state;
  }
}
