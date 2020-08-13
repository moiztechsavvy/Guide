
import React from 'react'
import { Modal, Button } from 'react-bootstrap'

class HeaderModal extends React.Component<any, any> {
    constructor(props: Readonly<{}>) {
        super(props)
        this.state={
            show:false  
        }
    }

    handleModal() {
        this.setState({show:!this.state.show})  
    }

    render() {
        return (    
            <div>
              <Button onClick = {()=>{this.handleModal()}}>Modal</Button>
              <Modal show = {this.state.show} onHide={()=>{this.handleModal()}}>
                <Modal.Header closeButton>Title</Modal.Header>
                <Modal.Body>Body text goes here</Modal.Body>
                <Modal.Footer>
                  <Button onClick = {()=>{this.handleModal()}}>Close</Button>
                </Modal.Footer>
              </Modal>
            </div>
        )
    }
}
export default HeaderModal