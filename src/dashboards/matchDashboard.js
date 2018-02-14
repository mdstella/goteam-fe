import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import ContentAdd from 'material-ui/svg-icons/content/add'

import MyTable from '../myComponents/myTable';
import MyDivider from '../myComponents/myDivider';

import {
    matchesData,
    matchesHistoryData,
} from '../mockData'

export default class MatchDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myMatches: matchesData,
            myMatchesHistory: matchesHistoryData,
        };
    }

    render() {

        return (
            <div>

                <MyTable
                    tableName="NEXT MATCHES"
                    columnsNames={["Date", "Location", "Sport", "Community", "Team", "Status"]}
                    rowsContent={this.state.myMatches}
                    floatingButton={<ContentAdd />}
                    floatingButtonLink={<Link to={`/matches/new`} />}
                />

                <MyDivider />

                <MyTable
                    tableName="MATCHES HISTORY"
                    columnsNames={["Date", "Location", "Sport", "Community", "Team", "Status", "Prize"]}
                    rowsContent={this.state.myMatchesHistory}
                />

            </div>
        );
    }
}