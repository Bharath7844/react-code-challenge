import types from './types';
import { createDefaultReducer } from '../../helpers'

const initialState = {
  companiesList: []
};

const getCompaniesHandler = (state, payload) => {
  const { data: companiesList}  = payload;
  return {
    ...state,
    companiesList
  }
}

const addComanyHandler = (state, payload) => {
  const company = payload;
  const { companiesList } = state;
  return {
    ...state,
    companiesList: [...companiesList,company]
  }
}

const actionMap = {
  [types.GET_COMPANIES]: getCompaniesHandler,
  [types.ADD_COMPANY]: addComanyHandler
};

export default createDefaultReducer(actionMap, initialState)