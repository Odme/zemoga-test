import { connect } from 'react-redux';

import { setStoreOnLocalStorage } from '../../store/selector';
import LayoutView from './LayoutView';

const mapStateToProps = (state) => {
  const storage = setStoreOnLocalStorage(state);
  return {
    storage,
  };
};

export default connect(mapStateToProps)(LayoutView);
