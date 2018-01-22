import React from 'react';
import { Avatar, Popover } from 'material-ui';

import SettingsMenu from './settingsMenu'


const style = {
    avatar: {
        marginRight: '10px',
        marginTop: '4px',
        cursor: 'pointer',
    },
};

export default class MyAvatar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
        };
    }

    handleClick = (event) => {
        // This prevents ghost click.
        event.preventDefault();

        this.setState({
            open: true,
            anchorEl: event.currentTarget,
        });
    };

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };

    render() {
        return (
            <div style={style.avatar} onClick={this.handleClick}>
                {/* <Avatar src={process.env.PUBLIC_URL + '/favicon.ico'} /> */}
                <Avatar>M</Avatar>
                <Popover
                    open={this.state.open}
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                    targetOrigin={{ horizontal: 'left', vertical: 'top' }}
                    onRequestClose={this.handleRequestClose}
                >
                    <SettingsMenu />
                </Popover>
            </div>
        );
    }
}