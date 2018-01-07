/**
 * Created by pack on 17/10/25.
 */
import React, { Component } from 'react';
import Header from '../components/Header'
import TabCenter from './TabCenter'
import CaiList from './CaiList'
class Diancai extends Component {
    render() {
        return (
            <div>
                <Header indexCur={'diancai'} />
                <div>
                    <p>
                        d&nbsp;&nbsp;&nbsp;&nbsp;c
                    </p>
                    <CaiList />
                </div>

            </div>
        );
    }
}
export default Diancai;