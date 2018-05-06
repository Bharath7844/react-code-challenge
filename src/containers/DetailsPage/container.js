import { connect } from 'react-redux';
import DetailsPage from 'components/DetailsPage';
import employeeActions from 'store/features/employees/actions';

const mapStateToProps = ({
    companies: {
        companiesList
    },
    employees: {
        employeesList
    }
}, {
    match: {
        params
    }
}) => {
    const { id: companyId } = params;
    const companyIndex = companyId - 1;
    return {
        companyId,
        companyDetails: companiesList[companyIndex],
        employeesList,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getEmployeesList: (companyId) => dispatch(employeeActions.getEmployeesList(companyId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);

