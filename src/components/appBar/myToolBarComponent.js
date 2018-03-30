import React from 'react';

import {
    Avatar,
    Badge,
    IconButton,
    Popover
} from 'material-ui';

import NotificationsIcon from 'material-ui/svg-icons/social/notifications';

import SettingsMenuComponent from './settingsMenuComponent'

import {
    notificationsData,
} from '../../mockData'


const style = {
    avatar: {
        marginRight: '10px',
        marginTop: '4px',
        cursor: 'pointer',
        float: 'right',
    },
    badge: {
        marginRight: '10px',
        marginTop: '4px',
        float: 'left',
        padding: 0,
    },
    badgeButton: {
        padding: 0,
        float: 'left',
    },
};

export default class MyToolBarComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
            notifications: notificationsData,
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
            <div>
                <div style={style.badge}>
                    {this.state.notifications.length > 0 ?
                        <Badge
                            badgeContent={this.state.notifications.length}
                            secondary={true}
                            style={{ padding: 0 }}>
                            <IconButton>
                                <NotificationsIcon />
                            </IconButton>
                        </Badge>
                        :
                        <IconButton>
                            <NotificationsIcon />
                        </IconButton>
                    }
                </div>
                <div style={style.avatar} onClick={this.handleClick}>
                    {/* <Avatar src={process.env.PUBLIC_URL + '/favicon.ico'} /> */}
                    <Avatar>M</Avatar>
                    <Popover
                        open={this.state.open}
                        anchorEl={this.state.anchorEl}
                        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                        targetOrigin={{ horizontal: 'left', vertical: 'top' }}
                        onRequestClose={this.handleRequestClose}>
                        <SettingsMenuComponent closePopover={this.handleRequestClose} />
                    </Popover>
                </div>
            </div>
        );
    }
}