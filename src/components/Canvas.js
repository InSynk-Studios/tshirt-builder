import { Component } from "react";
import { connect } from 'react-redux';
import { canvasSelector } from "../store/selectors";
import TShirtFront from '../assets/img/crew_front.png';

class Canvas extends Component {

  render() {
    return (
      <div className="col col-md-8">
        <div className="card">
          <div className="card-header bg-secondary text-white">
            Canvas
          </div>
          <div className="card-body">
            <div className="position-relative">
              <div style={{ width: '530px', height: '630px', position: 'relative', backgroundColor: 'rgb(255, 255, 255)' }}>
                <img src={TShirtFront} style={{
                  height: '500px'
                }} />
                <div id="drawingArea" style={{ position: 'absolute', top: '100px', left: '110px', zIndex: '10', width: '200px', height: '300px' }}>
                  <canvas
                    id="canvas"
                    style={{
                      width: '200px',
                      height: '300px'
                    }} />
                </div>
              </div>
            </div>
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
export default connect(mapStateToProps)(Canvas);
