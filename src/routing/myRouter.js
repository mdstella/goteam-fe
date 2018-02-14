import React from 'react';
import { Switch, Route } from 'react-router-dom'

import HomeDashboard from '../dashboards/homeDashboard'
import CommunityDashboard from '../dashboards/communityDashboard'
import CommunityDetailDashboard from '../dashboards/communityDetailDashboard'
import MatchDashboard from '../dashboards/matchDashboard'
import MatchForm from '../forms/matchForm'
import CommunityForm from '../forms/communityForm'


export default class MyRouter extends React.Component {

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
                    {/* <Route path='/*' component={NotFound} /> */}
                </Switch>
            </div>
        );
    }
}