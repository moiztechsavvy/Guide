import React from 'react'
import axios from 'axios'

class ImageDescription extends React.Component<{}, {text: string}> {
    constructor(props: Readonly<{}>) {
        super(props)
        this.state= {text:''}
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleText = this.handleText.bind(this)
    }
    handleText(event: { target: { value: any } }) {
        this.setState({text: event.target.value})
    }
    handleSubmit() {
        axios.post('url goes here', this.state.text) // replace this.state.text with the json file that has the description and picture
    }
    render() {
        return(
            <div>
                <input type='text' placeholder='Type any additional informtion from your picture here' value={this.state.text} onChange={this.handleText}></input>
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}

export default ImageDescription