import React from 'react';

import { AppBar, Drawer } from 'material-ui';

import MainMenuComponent from './mainMenuComponent';
import MyToolBarComponent from './myToolBarComponent';


export default class MyAppBarComponent extends React.Component {

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
                    iconElementRight={<MyToolBarComponent />}
                />
                <Drawer
                    docked={false}
                    width={280}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({ open })}
                >
                    <MainMenuComponent closeDrawer={this.handleClose} />
                </Drawer>
            </div>
        );
    }
}