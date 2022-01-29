import { Component } from "react";
import { connect } from 'react-redux';
import { canvasSelector, imagesSelector } from "../store/selectors";
import { imagePushed } from "../store/actions";
import { fabric } from 'fabric';
import { FIRST_DUMMY_IMG } from "../helpers/dummy";

const renderImages = (images, props) => {
  return (
    <div className="row mt-4 border border-secondary border-4 p-4">
      {images.map((image, index) => {
        return (
          <div
            onClick={(event) => addToCanvas(image, props)}
            className="col col-md-6 mb-4"
            key={index}
            style={{ 
              cursor: 'pointer' 
            }}
          >
            <img src={image} height='100px' width='100px' />
          </div>
        )
      })}
    </div>
  )
}

const addToCanvas = (image, props) => {
  fabric.Image.fromURL(image, img => {
    props.canvas.add(img)
    props.canvas.requestRenderAll()
  })
}

class Editor extends Component {
  componentDidMount() {
    this.props.dispatch(imagePushed(FIRST_DUMMY_IMG))
  }

  fileChangedHandler(event, dispatch) {
    const file = event.target.files[0]
    const reader = new FileReader()
    if (file) {
      reader.readAsDataURL(file)
    }
    const self = this

    reader.addEventListener("load", function () {
      // convert image file to base64 string
      dispatch(imagePushed(reader.result))
      self.forceUpdate()
    }, false);
  }

  render() {
    return (
      <div className="col col-md-4">
        <div className="card">
          <div className="card-header bg-secondary text-white">
            Editor
          </div>
          <div className="card-body">
            <input type="file" onChange={(event) => { this.fileChangedHandler(event, this.props.dispatch) }} />
            {this.props.images && this.props.images.length ? renderImages(this.props.images, this.props) : <div></div>}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    canvas: canvasSelector(state),
    images: imagesSelector(state)
  }
}

// Connect function connects the redux store to our app, 
// and allows access to information in component props.
export default connect(mapStateToProps)(Editor);
