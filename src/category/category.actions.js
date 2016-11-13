import uuid from 'uuid';

export const CATEGORY_CREATE = 'CATEGORY_CREATE';
export const CATEGORY_UPDATE = 'CATEGORY_UPDATE';
export const CATEGORY_DELETE = 'CATEGORY_DELETE';

export const addCategory = name => ({
  type: CATEGORY_CREATE,
  payload: { id: uuid.v4(), name },
});

export const editCategory = (name, id) => ({
  type: CATEGORY_UPDATE,
  payload: { id, name },
});

export const removeCategories = ids => ({
  type: CATEGORY_DELETE,
  payload: { ids },
});
