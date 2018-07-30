import { connect } from 'react-redux';
import Base from './component';

function mapStateToProps(state) {
  return {
    data: state.data,
  };
}

export default connect(mapStateToProps)(Base);
