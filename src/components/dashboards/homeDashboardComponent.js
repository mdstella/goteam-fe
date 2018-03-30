import React, { Component } from 'react';
import PropTypes from 'prop-types';


import {
    RaisedButton
} from 'material-ui';

import MyTableComponent from '../myTableComponent';
import MyDividerComponent from '../myDividerComponent';
import MyDialog from '../myDialog';

export default class HomeDashboardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myMatches: this.props.myMatches === undefined ? [] : this.props.myMatches,
            myGlobalStats: this.props.myGlobalStats === undefined ? [] : this.props.myGlobalStats,
            myCommunitiesStats: this.props.myCommunitiesStats === undefined ? [] : this.props.myCommunitiesStats,
            open: false,
            team1: this.props.team1 === undefined ? [] : this.props.team1,
            team2: this.props.team2 === undefined ? [] : this.props.team2,
        };
    }

    render() {
        const that = this

        function generateTeamsAction() {
            that.props.generateTeams()
            handleOpen()
        }

        function handleOpen() {
            that.setState({ open: true });
        }

        function handleClose() {
            that.setState({ open: false })
        }

        const generateTeams = function generateTeams() {
            return (<RaisedButton
                label="Teams"
                labelColor="#ffffff"
                backgroundColor="Blue"
                onClick={() => generateTeamsAction()}
            />
            );
        }

        const matchButtons = {
            'generateTeams': generateTeams
        }

        return (
            <div>
                <MyDialog
                    team1={this.props.team1}
                    team2={this.props.team2}
                    open={this.state.open}
                    close={handleClose}
                />

                <MyTableComponent
                    tableName="NEXT MATCHES"
                    columnsNames={["Date", "Location", "Sport", "Community", "Team", "Status", ""]}
                    rowsContent={this.state.myMatches}
                    rowButtons={matchButtons}
                />

                <MyDividerComponent />

                <MyTableComponent
                    tableName="GLOBAL STATS"
                    columnsNames={["Games played", "Won", "Lost", "Tied", "Ranking", "Status"]}
                    rowsContent={this.state.myGlobalStats}
                />

                <MyDividerComponent />

                <MyTableComponent
                    tableName="COMMUNITY STATS"
                    columnsNames={["Community", "Games played", "Won", "Lost", "Tied", "Ranking", "Status"]}
                    rowsContent={this.state.myCommunitiesStats}
                />

            </div>
        );
    }
}

HomeDashboardComponent.propTypes = {
    myMatches: PropTypes.arrayOf(
        PropTypes.shape({
            date: PropTypes.string,
            location: PropTypes.string,
            sport: PropTypes.string,
            community: PropTypes.string,
            team: PropTypes.string,
            status: PropTypes.string
        })
    ),
    myCommunitiesStats: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            games: PropTypes.number,
            won: PropTypes.number,
            lost: PropTypes.number,
            tied: PropTypes.number,
            ranking: PropTypes.number,
            status: PropTypes.string
        })
    ),
    myGlobalStats: PropTypes.arrayOf(
        PropTypes.shape({
            games: PropTypes.number,
            won: PropTypes.number,
            lost: PropTypes.number,
            tied: PropTypes.number,
            ranking: PropTypes.number,
            status: PropTypes.string
        })
    )
}