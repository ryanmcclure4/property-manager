import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Base from '../components/Base';

function mapStateToProps(state) {
  return {
    properties: state.business.properties,
    loading: state.business.loading,
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(CounterActions, dispatch);
// }

export default connect(mapStateToProps)(Base);
