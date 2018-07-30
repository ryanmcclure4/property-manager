import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Property from './component';
import { PropertyActions } from 'actions';
import { get } from 'lodash';

function mapStateToProps(state) {
  const activeProperty = state.data.business.activeProperty;
  return {
    property: get(state, 'data.business.entities.property', {})[activeProperty],
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...PropertyActions,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Property);
