import React, {Component} from 'react'

class Film extends Component {
    render() {
        return(
        <>
        <ul><a href={this.props.url}>{this.props.name}</a></ul>
        </>  
        );
    }
}
export default Film