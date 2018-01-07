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
                        点&nbsp;&nbsp;&nbsp;&nbsp;菜
                    </p>
                    <CaiList />
                </div>

            </div>
        );
    }
}
export default Diancai;