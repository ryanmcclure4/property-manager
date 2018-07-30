import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Component from './component';
import { BusinessActions } from 'actions';
import { get } from 'lodash';

function mapStateToProps(state) {
  return {
    properties: state.data.business.properties,
    propertiesById: get(state, 'data.business.entities.property', { }),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...BusinessActions,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
