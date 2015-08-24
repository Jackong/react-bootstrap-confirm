import React, { PropTypes } from 'react'
import connect from 'alt-connect'
import mixin from 'es6-react-mixins'
import {Modal, Button, ButtonToolbar} from 'react-bootstrap'

import Store from './store'
import Actions from './actions'

class Component extends mixin(connect(Store)) {
    cancel() {
        return Actions.cancel()
    }
    show(message) {
        return Actions.show(message);
    }
    render () {
        return (
            <Modal aria-labelledby='contained-modal-title' bsSize='small' container={this} onHide={this.cancel.bind(this)} show={!!this.state.message}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {this.props.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.state.message}
                </Modal.Body>
                <Modal.Footer>
                    <ButtonToolbar>
                        <Button bsStyle='info' onClick={Actions.sure.bind(Actions)}>
                            {this.props.sure}
                        </Button>
                        <Button autoFocus bsStyle='danger' onClick={this.cancel.bind(this)}>
                            {this.props.cancel}
                        </Button>
                    </ButtonToolbar>
                </Modal.Footer>
            </Modal>
        )
    }
}

Component.propTypes = {
    title: PropTypes.string,
    sure: PropTypes.string,
    cancel: PropTypes.string
}

export default Component;
