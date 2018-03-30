import React, { Component } from 'react';

import {
    Divider,
} from 'material-ui';

export default class MyDividerComponent extends Component {
    render() {
        return (
            <div style={{ margin: '30px auto 0px', width: '900px' }}>
                <Divider />
            </div>
        );
    }
}