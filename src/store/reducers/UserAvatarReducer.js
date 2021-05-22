import userPhoto from '../../images/userPhoto.png';

const initialState = {
  avatar: userPhoto,
};
const UserAvatarReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_PHOTO': {
      return {
        ...state,
        avatar: action.payload,
      };
    }

    default:
      return state;
  }
};
export default UserAvatarReducer;
