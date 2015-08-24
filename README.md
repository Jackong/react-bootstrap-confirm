# react-bootstrap-confirm
confirm dialog for react with bootstrap modal.

## Examples

```js
import React, { PropTypes } from 'react'
import Confirm from 'react-bootstrap-confirm'

class App extends React.Component {
    componentDidMount() {
        this.refs.confirm
        .show('are you sure?')
        .then(() => {
            //after sure
        })
        .catch(() => {
            //after cancel
        })
    }
    render () {
        return (
            <div>
                <Confirm.Component ref='confirm' title='Tips' sure='Sure' cancel='Cancel' />
                <Children/>
            </div>
        )
    }
}

class Children extends React.Component {
    onClick() {
        Alert.Actions
        .show('are you sure?')
        .then(() => {
            //after sure
        })
        .catch(() => {
            //after cancel
        })
    }
    render () {
        return (
            <div>
                <button onClick={this.onClick.bind(this)}>click</button>
            </div>
        )
    }
}

export default App;
```
