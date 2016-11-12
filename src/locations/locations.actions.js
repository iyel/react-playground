import uuid from 'uuid';

export const LOCATION_CREATE = 'LOCATION_CREATE';
export const LOCATION_UPDATE = 'LOCATION_UPDATE';
export const LOCATION_DELETE = 'LOCATION_DELETE';

export const addLocation = ({ name, address, coordinates, categories }) => {
  return {
    type: LOCATION_CREATE,
    payload: { id: uuid.v4(), name, address, coordinates, categories }
  }
};

export const editLocation = ({ id, name, address, coordinates, categories }) => {
  return {
    type: LOCATION_UPDATE,
    payload: { id, name, address, coordinates, categories }
  }
};

export const removeLocations = (ids) => {
  return {
    type: LOCATION_DELETE,
    payload: { ids }
  }
};
