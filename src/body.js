import React from 'react';
import { Switch, Route } from 'react-router-dom'

import HomeDashboard from './homeDashboard'
import CommunityDashboard from './communityDashboard'
import CommunityDetailDashboard from './communityDetailDashboard'
import MatchDashboard from './matchDashboard'
import MatchForm from './matchForm'
import CommunityForm from './communityForm'


export default class Body extends React.Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={HomeDashboard} />
                    <Route path='/communities/new' component={CommunityForm} />
                    <Route path='/communities/:communityId' component={CommunityDetailDashboard} />
                    <Route path='/communities' component={CommunityDashboard} />
                    <Route path='/matches/new' component={MatchForm} />
                    <Route path='/matches' component={MatchDashboard} />
                </Switch>
            </div>
        );
    }
}