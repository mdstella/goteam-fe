import React from 'react';
import {Menu, MenuItem} from 'material-ui';
import ActionHome from 'material-ui/svg-icons/action/home';
import SocialGroup from 'material-ui/svg-icons/social/group';
import MapsDirectionsRun from 'material-ui/svg-icons/maps/directions-run';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';

const style = {
  rightIcon: {
    textAlign: 'left',
    lineHeight: '24px',
  },
};

export default class MainMenu extends React.Component {
  render() {
    return (
      <Menu style={style.rightIcon}>
        <MenuItem primaryText="Home" leftIcon={<ActionHome />} />
        <MenuItem primaryText="Community" leftIcon={<SocialGroup />} rightIcon={<ArrowDropRight />}
          menuItems={[
            <MenuItem primaryText="Grid lines" checked={true} />,
            <MenuItem primaryText="Page breaks" insetChildren={true} />,
            <MenuItem primaryText="Rules" checked={true} />,
          ]} />
        <MenuItem primaryText="Matches" leftIcon={<MapsDirectionsRun />} />
      </Menu>
    );
  }
}