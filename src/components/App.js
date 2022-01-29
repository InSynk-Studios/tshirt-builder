import { Component } from "react";
import { connect } from 'react-redux';
import Canvas from "./Canvas";
import Editor from "./Editor";
import { fabric } from 'fabric';
import { canvasInitialized } from '../store/actions';

const initCanvas = () => {
  return (
    new fabric.Canvas('canvas', {
      height: 320,
      width: 180,
      hoverCursor: 'pointer',
      selection: true,
      selectionBorderColor: 'blue'
    })
  )
}

class App extends Component {
  componentDidMount() {
    const canvas = initCanvas()
    this.props.dispatch(canvasInitialized(canvas))
    // canvas.on({
    //   'object:moving': function (e) {
    //     e.target.opacity = 0.5;
    //   },
    //   'object:modified': function (e) {
    //     e.target.opacity = 1;
    //   }
    // });
  }
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark px-4">
          <a className="navbar-brand" href="#">Tshirt builder</a>
        </nav>

        <div className="container" style={{ marginTop: '100px' }}>
          <div className="row">
            <Canvas />
            <Editor />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {

  }
}

// Connect function connects the redux store to our app, 
// and allows access to information in component props.
export default connect(mapStateToProps)(App);
