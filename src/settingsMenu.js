import React from 'react';
import { Divider, Menu, MenuItem } from 'material-ui';
import ActionSettings from 'material-ui/svg-icons/action/settings';
import ActionSettingsPower from 'material-ui/svg-icons/action/settings-power';

const style = {
  rightIcon: {
    textAlign: 'left',
    lineHeight: '24px',
  },
};

export default class SettingsMenu extends React.Component {
  render() {
    return (
      <Menu style={style.rightIcon}>
        <MenuItem primaryText="Settings" leftIcon={<ActionSettings />} />
        <Divider />
        <MenuItem primaryText="Sign out" leftIcon={<ActionSettingsPower />} />
      </Menu>
    );
  }
}