import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { RaisedButton } from 'material-ui';

import ContentAdd from 'material-ui/svg-icons/content/add';

import MyTableComponent from '../myTableComponent';
import MyDividerComponent from '../myDividerComponent';
import MyDialog from '../myDialog';

export default class MatchDashboardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myMatches: this.props.myMatches === undefined ? [] : this.props.myMatches,
            myMatchesHistory: this.props.myMatchesHistory === undefined ? [] : this.props.myMatchesHistory,
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
                    floatingButton={<ContentAdd />}
                    floatingButtonLink={<Link to={`/matches/new`} />}
                    rowButtons={matchButtons}
                />

                <MyDividerComponent />

                <MyTableComponent
                    tableName="MATCHES HISTORY"
                    columnsNames={["Date", "Location", "Sport", "Community", "Team", "Status", "Prize"]}
                    rowsContent={this.state.myMatchesHistory}
                />

            </div>
        );
    }
}

MatchDashboardComponent.propTypes = {
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
    myMatchesHistory: PropTypes.arrayOf(
        PropTypes.shape({
            date: PropTypes.string,
            location: PropTypes.string,
            sport: PropTypes.string,
            community: PropTypes.string,
            team: PropTypes.string,
            status: PropTypes.string,
            prize: PropTypes.number,
        })
    )
}