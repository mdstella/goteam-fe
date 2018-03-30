import React, { Component } from 'react';


import {
    RaisedButton,
    Dialog
} from 'material-ui';

import MyTableComponent from './myTableComponent';

export default class MyDialog extends Component {
    // constructor(props) {
    //     super(props);
    //     console.log(props.open)
    //     this.state = {
    //         open: props.open,
    //     };
    // }

    // handleOpen = () => {
    //     this.setState({ open: true });
    // };

    // handleClose = () => {
    //     this.props({ open: false });
    // };

    render() {
        const actions = [
            <RaisedButton
                label="Cancel"
                primary={true}
                onClick={this.props.close}
            />,
            <RaisedButton
                label="OK"
                primary={true}
                onClick={this.props.close}
            />,
        ];

        return (
            <div>
                <Dialog
                    title="Teams"
                    actions={actions}
                    modal={false}
                    open={this.props.open}
                    onRequestClose={this.props.close}
                >
                    <MyTableComponent
                        tableName="Team 1"
                        columnsNames={["Player"]}
                        rowsContent={this.props.team1}
                        width="300px"
                    />

                    <MyTableComponent
                        tableName="Team 2"
                        columnsNames={["Player"]}
                        rowsContent={this.props.team2}
                        width="300px"
                    />
                </Dialog>

            </div>
        );
    }
}