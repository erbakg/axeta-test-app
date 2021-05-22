export const setName = (obj) => ({
  type: 'ADD_NAME',
  payload: obj,
});

export const setEditable = (obj) => ({
  type: 'SET_EDITABLE',
  payload: obj,
});

// export const SetLocation = (obj) => ({
//   type: 'ADD_LOCATION',
//   payload: obj,
// });

export const setEditableLocation = (obj) => ({
  type: 'SET_EDITABLE_LOCATION',
  payload: obj,
});

export const getLocation = (obj) => {
  return { type: 'GET_LOCATION', payload: obj };
};

export const setEditableExperience = (obj) => {
  return { type: 'SET_EDITABLE_EXPERIENCE', payload: obj };
};

export const deleteExperience = (obj) => {
  return { type: 'DELETE_EXPERIENCE', payload: obj };
};

export const addExperience = (obj) => {
  return { type: 'ADD_EXPERIENCE', payload: obj };
};

export const addExperienceDuration = (obj) => {
  return { type: 'ADD_EXPERIENCE_DURATION', payload: obj };
};

export const changePhoto = (obj) => {
  return { type: 'CHANGE_PHOTO', payload: obj };
};
