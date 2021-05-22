import { combineReducers } from 'redux';
import UserNameReducer from './UserNameReducer';
import UserLocationReducer from './UserLocationReducer';
import UserExperienceReducer from './userExperienceReducer';
import UserAvatarReducer from './UserAvatarReducer';

export default combineReducers({
  UserNameReducer,
  UserLocationReducer,
  UserExperienceReducer,
  UserAvatarReducer,
});
