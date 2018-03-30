import React from 'react';
import { Link } from 'react-router-dom'

import { Divider, Menu, MenuItem } from 'material-ui';

import ActionSettings from 'material-ui/svg-icons/action/settings';
import ActionSettingsPower from 'material-ui/svg-icons/action/settings-power';

const style = {
  rightIcon: {
    textAlign: 'left',
    lineHeight: '24px',
  },
};

export default class SettingsMenuComponent extends React.Component {
  render() {
    return (
      <Menu style={style.rightIcon}>
        <MenuItem onClick={this.props.closePopover} primaryText="Settings" leftIcon={<ActionSettings />} containerElement={<Link to="/4" />} />
        <Divider />
        <MenuItem onClick={this.props.closePopover} primaryText="Sign out" leftIcon={<ActionSettingsPower />} containerElement={<Link to="/" />} />
      </Menu>
    );
  }
}