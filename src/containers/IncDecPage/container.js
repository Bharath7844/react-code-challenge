import { connect } from 'react-redux';
import IncDecPage from 'components/IncDecPage';
import actions from 'store/features/clickCounter/actions'

const mapDispatchToProps = dispatch => ({
	increment: () => dispatch(actions.incrementBy1()),
	decrement: () => dispatch(actions.decrementBy1()),
	resetNumberToZero: () => dispatch(actions.resetNumberToZero()),
});

export default connect(null, mapDispatchToProps)(IncDecPage);
