import { combineReducers } from 'redux';
import clickCounter from './clickCounter/reducers';
import companies from './companies/reducers';
import employees from './employees/reducers';

const rootReducer = combineReducers({
  clickCounter,
  companies,
  employees
});
export default rootReducer;