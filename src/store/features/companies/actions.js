import types from './types';
import axios from 'axios';
import { API_URL} from 'common/constants';

function getCompanies() {
    return (dispatch) => {
        const companies = axios.get(`${API_URL}/companies`);
        companies.then((response)=>{
            dispatch({
                type: types.GET_COMPANIES,
                payload: response
            });
        })
    }
}

function getCompanyDetails() {
    return (dispatch) => {
        const companydetails = axios.get(`${API_URL}/companies`);
        companydetails.then((response) => {
            dispatch({
                type: types.GET_COMPANY_DETAILS,
                payload: response
            })
        })
    }
}

function addCompany(employee) {
    
    return (dispatch) => {
        const addCompany = axios.post(`${API_URL}/companies`,employee);
        addCompany.then((response) => {
            dispatch({
                type: types.ADD_COMPANY,
                payload: employee
            })
        })
    }
}

export default {
    getCompanies,
    addCompany,
};