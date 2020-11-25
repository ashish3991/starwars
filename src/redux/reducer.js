const initialState = {
  session: {
    name: '',
    isPrivileged: false,
    created: false,
    isError: false,
  },
  planets: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN':
      const name = action.payload.user;
      return {
        ...state,
        session: {
          name: name,
          isPrivileged: name === 'Luke Skywalker' ? true : false,
          created: true,
        },
      };

    case 'LOGIN_ERROR':
      return { ...state, session: { ...state.session, isError: true } };

    case 'GET_PLANETS':
      return { ...state, planets: action.payload };

    default:
      return state;
  }
}
