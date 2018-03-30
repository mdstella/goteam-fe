import React, { Component } from 'react';

import MyAppBarComponent from './appBar/myAppBarComponent';
import MyRouter from '../routing/myRouter';

export default class FullAppComoponent extends Component {
    render() {
        return (
            <div>
                <MyAppBarComponent />
                <MyRouter />
            </div>
        );
    }
}