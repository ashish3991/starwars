import { LOGIN, LOGIN_ERROR, GET_PLANETS } from './actionType';
import Axios from 'axios';

function makeActionCreator(type, ...argNames) {
  return function (...args) {
    const action = { type };
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index];
    });
    return action;
  };
}

const loginSuccess = makeActionCreator(LOGIN, 'payload');
const loginError = makeActionCreator(LOGIN_ERROR, 'payload');
const allPlanets = makeActionCreator(GET_PLANETS, 'payload');

export const login = (payload) => {
  return (dispatch) => {
    validateUser(payload).then((data) => {
      if (data && data.birth_year === payload.password) {
        return dispatch(loginSuccess(payload));
      } else {
        return dispatch(loginError(payload));
      }
    });
  };
};

export const getPlanets = () => {
  return (dispatch) => {
    let planets = [];
    getAllPlanets(planets).then((response) => {
      dispatch(allPlanets(response));
    });
  };
};

//Side effects
const validateUser = async (payload, page = 1) => {
  let baseUrl = `https://swapi.dev/api/people/`;
  const query = `${baseUrl}?page=${page}`;

  const response = await Axios.get(query);
  let data = response.data;
  let user = data.results.filter((user) => user.name === payload.user)[0];
  if (user && user.birth_year === payload.password) return user;
  else if (!user && data.next) return validateUser(payload, page + 1);
};

const getAllPlanets = async (planets, page = 1) => {
  let baseUrl = `https://swapi.dev/api/planets/`;
  const query = `${baseUrl}?page=${page}`;

  const response = await Axios.get(query);
  let data = response.data;
  planets = [...planets, ...data.results];
  if (data && data.next) {
    return getAllPlanets(planets, page + 1);
  } else {
    return planets;
  }
};
