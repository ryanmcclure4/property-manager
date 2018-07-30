import { connect } from 'react-redux';
import Main from './component';

function mapStateToProps(state) {
  return {
    ui: state.ui,
  };
}

export default connect(mapStateToProps)(Main);
