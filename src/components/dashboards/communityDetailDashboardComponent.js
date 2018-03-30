import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    RaisedButton,
} from 'material-ui';

import ContentAdd from 'material-ui/svg-icons/content/add'

import MyTableComponent from '../myTableComponent';
import MyDividerComponent from '../myDividerComponent';
import MyDialog from '../myDialog';

export default class CommunityDetailDashboardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            members: this.props.members === undefined ? [] : this.props.members,
            membersRequests: this.props.membersRequests === undefined ? [] : this.props.membersRequests,
            nextMatches: this.props.nextMatches === undefined ? [] : this.props.nextMatches,
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

        const removeButton = function getRemoveButton(row, rowIndex) {
            return (<RaisedButton
                label="Remove"
                labelColor="#ffffff"
                backgroundColor="Red"
                onClick={() => that.props.removeMember(rowIndex)}
            />
            );
        }

        const penalizeButton = function getPenalizeButton(row, rowIndex) {
            return (<RaisedButton
                label="Penalze"
                labelColor="#ffffff"
                backgroundColor="Red"
                onClick={() => that.props.penalizeMember(rowIndex)}
            />
            );
        }

        const membersButtonsMap = {
            'remove': removeButton,
            'penalize': penalizeButton
        }

        const acceptButton = function getAcceptButton(row, rowIndex) {
            return (<RaisedButton
                label="Accept"
                labelColor="#ffffff"
                backgroundColor="Green"
                onClick={() => that.props.acceptMember(rowIndex, row.name)}
            />
            );
        }

        const denyButton = function getDenyButton(row, rowIndex) {
            return (<RaisedButton
                label="Deny"
                labelColor="#ffffff"
                backgroundColor="Red"
                onClick={() => that.props.denyMember(rowIndex)}
            />
            );
        }

        const membersRequestsButtonsMap = {
            'accept': acceptButton,
            'deny': denyButton
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
                    rowsContent={this.props.nextMatches}
                    rowButtons={matchButtons}
                />

                <MyDividerComponent />

                <MyTableComponent
                    tableName="MEMBERS"
                    columnsNames={["Name", "Games played", "Wom", "Lost", "Tied", "Ranking", "Status", "", ""]}
                    rowsContent={this.props.members}
                    rowButtons={membersButtonsMap}
                    floatingButton={<ContentAdd />}
                />

                <MyDividerComponent />

                <MyTableComponent
                    tableName="MEMBERS REQUESTS"
                    columnsNames={["Name", "", ""]}
                    rowsContent={this.props.membersRequests}
                    rowButtons={membersRequestsButtonsMap}
                />

            </div>
        );
    }
}

CommunityDetailDashboardComponent.propTypes = {
    members: PropTypes.arrayOf(
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
    membersRequests: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
        })
    ),
    nextMatches: PropTypes.arrayOf(
        PropTypes.shape({
            date: PropTypes.string,
            location: PropTypes.string,
            sport: PropTypes.string,
            community: PropTypes.string,
            team: PropTypes.string,
            status: PropTypes.string,
        })
    )
}
