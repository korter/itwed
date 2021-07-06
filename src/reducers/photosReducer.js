const initState = {
  photos: [],
};

const photosReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_PHOTOS":
      return { ...state };
    default:
      return { ...state };
  }
};

export default photosReducer;
