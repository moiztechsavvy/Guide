import React from 'react'
import Webcam from 'react-webcam'

class ImageProcess extends React.Component<{}, {pic: any}> {
    webcam: any

    constructor(props: Readonly<{}>) {
        super(props)
        this.state = {pic: null}
        this.handleUpload = this.handleUpload.bind(this)
        this.handleScreenshot = this.handleScreenshot.bind(this)
    }

    setRef = (webcam: any) => {
        this.webcam = webcam
    }

    handleUpload(event: any) {
        this.setState({pic: URL.createObjectURL(event.target.files[0])})
        localStorage.setItem('locPic', this.state.pic)
    }

    handleScreenshot() {
        this.setState({pic: this.webcam.getScreenshot()})
        localStorage.setItem('image', this.state.pic)
    }

    render() {
        const videoConstraints = {
            width: 1280,
            height: 720,
            facingMode: 'user'
        }

        return(
            <div>
              <input type='file' onChange={this.handleUpload}/>
              <Webcam audio ={false} height={256} ref={this.setRef} screenshotFormat='image/jpeg' width={256} videoConstraints={videoConstraints}/>
              <button onClick={this.handleScreenshot}>Screenshot</button>
              <img src={this.state.pic} width='128' height='128'/>
            </div>
        )
    }
}

export default ImageProcess