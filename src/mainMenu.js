import React from 'react';
import { Link } from 'react-router-dom'

import { Menu, MenuItem } from 'material-ui';

import ActionHome from 'material-ui/svg-icons/action/home';
import SocialGroup from 'material-ui/svg-icons/social/group';
import MapsDirectionsRun from 'material-ui/svg-icons/maps/directions-run';

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
        <MenuItem onClick={this.props.closeDrawer} primaryText="Home" leftIcon={<ActionHome />} containerElement={<Link to="/" />}/>
        <MenuItem onClick={this.props.closeDrawer} primaryText="Community" containerElement={<Link to="/communities" />} leftIcon={<SocialGroup />} />
        <MenuItem onClick={this.props.closeDrawer} primaryText="Matches" leftIcon={<MapsDirectionsRun />} containerElement={<Link to="/matches" />}/>
      </Menu>
    );
  }
}