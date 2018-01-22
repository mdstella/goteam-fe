import React from 'react';
import { AppBar, Drawer } from 'material-ui';

import MainMenu from './mainMenu';
import MyAvatar from './avatar';


export default class MyAppBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
        };
    }

    handleToggle = () => this.setState({ open: !this.state.open });

    handleClose = () => this.setState({ open: false });

    render() {
        return (
            <div>
                <AppBar title="GO-Team"
                    onLeftIconButtonClick={this.handleToggle}
                    onRightIconButtonClick={this.handleToggle}
                    iconElementRight={<MyAvatar />}
                />
                <Drawer
                    docked={false}
                    width={280}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({ open })}
                >
                    {/* PASAR esto para el onclick: `onClick={this.handleClose}` */}
                    <MainMenu />
                </Drawer>
            </div>
        );
    }
}