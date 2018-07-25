import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Base from '../components/Base';
import * as BusinessActions from '../actions/business';

function mapStateToProps(state) {
  return {
    business: state.business,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(BusinessActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Base);
