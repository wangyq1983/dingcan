/**
 * Created by pack on 17/10/31.
 */

import React, { Component } from 'react';

class HeadCell extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div style={{width:50,height:50,backgroundColor:'#ccc'}}></div>
                <p>{this.props.cName}</p>
            </div>
        );
    }
}

export default HeadCell;