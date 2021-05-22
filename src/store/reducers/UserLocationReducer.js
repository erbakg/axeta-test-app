const initialState = {
  location: 'Portland, Oregon, USA',
  lat: 45.523064,
  long: -122.676483,
  editable: false,
};
const UserLocationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_EDITABLE_LOCATION':
      return {
        ...state,
        editable: action.payload.editable,
      };

    // case 'ADD_LOCATION':
    //   return {
    //     location: action.payload.location,
    //     editable: action.payload.editable,
    //   };
    case 'GET_LOCATION':
      return {
        ...state,
        lat: action.payload.latitude,
        long: action.payload.longitude,
        location: action.payload.label,
        editable: action.payload.editable,
      };
    default:
      return state;
  }
};
export default UserLocationReducer;
