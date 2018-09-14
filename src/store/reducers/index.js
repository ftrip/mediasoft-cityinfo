const hello = (state = {}, action) => {
  switch (action.type) {
    case 'LINKS':
      return { ...state, x: action.links, isLoading: false };
    case 'LOAD':
      return { ...state, isLoading: action.isLoading };
    default:
      return state;
  }
};

export default hello;
