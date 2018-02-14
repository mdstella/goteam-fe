import React, { Component } from 'react';

import MyTable from '../myComponents/myTable';

import MyDivider from '../myComponents/myDivider';

import {
    matchesData,
    globalStatsData,
    myCommunitiesData,
} from '../mockData'

export default class HomeDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myNextMatches: matchesData,
            myGlobalStats: globalStatsData,
            myCommunitiesStats: myCommunitiesData,
        };

    }

    render() {
        return (
            <div>
                <MyTable
                    tableName="NEXT MATCHES"
                    columnsNames={["Date", "Location", "Sport", "Community", "Team", "Status"]}
                    rowsContent={this.state.myNextMatches}
                />

                <MyDivider />

                <MyTable
                    tableName="GLOBAL STATS"
                    columnsNames={["Games played", "Won", "Lost", "Tied", "Ranking", "Status"]}
                    rowsContent={this.state.myGlobalStats}
                />

                <MyDivider />

                <MyTable
                    tableName="COMMUNITY STATS"
                    columnsNames={["Community", "Games played", "Won", "Lost", "Tied", "Ranking", "Status"]}
                    rowsContent={this.state.myCommunitiesStats}
                />

            </div>
        );
    }
}