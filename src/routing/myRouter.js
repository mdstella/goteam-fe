import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { HomeDashboard } from '../containers/homeDashboardContainer';
import { Login } from '../containers/loginContainer';
import { CommunityDashboard } from '../containers/communityDashboardContainer';
import { CommunityDetailDashboard } from '../containers/communityDetailDashboardContainer';
import { MatchDashboard } from '../containers/matchDashboardContainer';
import { MatchForm } from '../containers/matchFormContainer';
import { CommunityForm } from '../containers/communityFormContainer';


export default class MyRouter extends React.Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Login} />
                    <Route path='/home' component={HomeDashboard} />
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