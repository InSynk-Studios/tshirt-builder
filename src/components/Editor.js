import { Component } from "react";
import { connect } from 'react-redux';
import { canvasSelector } from "../store/selectors";

class Editor extends Component {
  render() {
    return (
      <div className="col col-md-4">
        <div className="card">
          <div className="card-header bg-secondary text-white">
            Editor
          </div>
          <div className="card-body">
            Something
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    canvas: canvasSelector(state)
  }
}

// Connect function connects the redux store to our app, 
// and allows access to information in component props.
export default connect(mapStateToProps)(Editor);
