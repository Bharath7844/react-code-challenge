import axios from 'axios';
import {API_URL} from 'common/constants';
import types from './types';

function getEmployeesList(id) {
    return dispatch => {
        const employeesList = axios.get(`${API_URL}/companies/${id}/employees`);
        employeesList.then((response) => {
            dispatch({
                type: types.GET_EMPLOYEE_LIST,
                payload: response
            })
        })
    }
}

function addEmployee(employee, companyId) {
    return dispatch => {
        const addEmployee = axios.post(`${API_URL}/companies/${companyId}/employees`, employee);
        addEmployee.then(() => {
            dispatch({
                type: types.ADD_EMPLOYEE,
                payload: employee
            })
        })
    }

}

export default {
    getEmployeesList,
    addEmployee
}