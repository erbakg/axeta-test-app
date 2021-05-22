const initialState = {
  experiences: [
    {
      id: 1,
      label: 'PHP',
      duration: 2,
      editable: false,
    },
    {
      id: 2,
      label: 'Ruby',
      duration: 3,
      editable: false,
    },
    {
      id: 3,
      label: 'Java Script',
      duration: 5,
      editable: false,
    },
  ],
};
const UserExperienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_EDITABLE_EXPERIENCE': {
      const index = state.experiences.findIndex(
        (item) => item.id === action.payload
      );
      const newExperiences = [...state.experiences];
      newExperiences[index].editable = !newExperiences[index].editable;

      return {
        ...state,
        experiences: newExperiences,
      };
    }
    case 'DELETE_EXPERIENCE': {
      const newExperiences = state.experiences.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        experiences: newExperiences,
      };
    }
    case 'ADD_EXPERIENCE':
      return {
        ...state,
        experiences: [...state.experiences, action.payload],
      };
    case 'ADD_EXPERIENCE_DURATION': {
      const index = state.experiences.findIndex(
        (item) => item.id === action.payload.id
      );
      const newExperiences = [...state.experiences];
      newExperiences[index].duration = action.payload.duration;
      newExperiences[index].editable = action.payload.editable;
      return {
        ...state,
        experiences: newExperiences,
      };
    }
    default:
      return state;
  }
};
export default UserExperienceReducer;
