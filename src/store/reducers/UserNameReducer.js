const initialState = {
  name: 'John Smith',
  editable: false,
};
const UserNameReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_EDITABLE':
      return {
        editable: action.payload.editable,
      };

    case 'ADD_NAME':
      return {
        name: action.payload.name,
        editable: action.payload.editable,
      };

    default:
      return state;
  }
};
export default UserNameReducer;
