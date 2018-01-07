/**
 * Created by pack on 17/10/25.
 */
import React, { Component } from 'react';
import Header from '../components/Header'
import TabCenter from './TabCenter'
class Diancai extends Component {
    render() {
        return (
            <div>
                <Header indexCur={'diancai'} />
                <div>
                    <p>
                        点菜
                    </p>
                </div>

            </div>
        );
    }
}
export default Diancai;