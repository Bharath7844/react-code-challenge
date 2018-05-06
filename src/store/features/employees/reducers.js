import types from './types';
import { createDefaultReducer } from '../../helpers'

const initialState = {
  employeesList: []
};

const getEmployeesHandler = (state, payload) => {
  const { data: employeesList}  = payload;
  return {
    ...state,
    employeesList
  }
}

const addEmployeeHandler = (state, payload) => {
  const { employee } = payload;
  const { employeesList } = state;
  return {
    ...state,
    employeesList: [...employeesList,employee]
  }
}

const actionMap = {
  [types.GET_EMPLOYEE_LIST]: getEmployeesHandler,
  [types.ADD_EMPLOYEE]: addEmployeeHandler
};

export default createDefaultReducer(actionMap, initialState)