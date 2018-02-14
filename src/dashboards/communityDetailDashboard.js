import React, { Component } from 'react';

import {
    RaisedButton,
} from 'material-ui';

import ContentAdd from 'material-ui/svg-icons/content/add'

import MyTable from '../myComponents/myTable';
import MyDivider from '../myComponents/myDivider';

import {
    matchesData,
    membersData,
    membersRequestsData,
} from '../mockData'

export default class CommunityDetailDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            communityMatches: [],
            communityMembers: membersData,
            communityMembersRequests: membersRequestsData,
        };
    }

    acceptMember(rowIndex, userName) {
        let aux = this.state.communityMembersRequests
        aux.splice(rowIndex, 1)

        let aux2 = this.state.communityMembers
        aux2.push({
            name: userName,
            games: 0,
            won: 0,
            lost: 0,
            tied: 0,
            // we need the last ranking here
            ranking: 100,
            status: '-',
        })

        this.setState({
            communityMembersRequests: aux,
            communityMembers: aux2
        });
    }

    denyMember(rowIndex) {
        let aux = this.state.communityMembersRequests
        aux.splice(rowIndex, 1)

        this.setState({
            communityMembersRequests: aux
        });
    }

    removeMember(rowIndex) {
        let aux = this.state.communityMembers
        aux.splice(rowIndex, 1)

        this.setState({
            communityMembers: aux
        });
    }

    penalizeMember(rowIndex) {
        let aux = this.state.communityMembers
        aux[rowIndex].ranking++

        this.setState({
            communityMembers: aux
        });
    }

    isCorrectCommunity = (x) => {
        return x.community === this.props.match.params.communityId
    }

    matchesDataFiltered(allMatchesData) {
        var data = [];
        allMatchesData.filter(this.isCorrectCommunity).map((row, i) => (
            data.push(row)
        ))
        return data
    }

    componentDidMount() {
        this.setState({
            communityMatches: this.matchesDataFiltered(matchesData)
        });
    }

    render() {
        const that = this

        const removeButton = function getRemoveButton(row, rowIndex) {
            return (<RaisedButton
                label="Remove"
                labelColor="#ffffff"
                backgroundColor="Red"
                onClick={() => that.removeMember(rowIndex)}
            />
            );
        }

        const penalizeButton = function getPenalizeButton(row, rowIndex) {
            return (<RaisedButton
                label="Penalze"
                labelColor="#ffffff"
                backgroundColor="Red"
                onClick={() => that.penalizeMember(rowIndex)}
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
                onClick={() => that.acceptMember(rowIndex, row.name)}
            />
            );
        }

        const denyButton = function getDenyButton(row, rowIndex) {
            return (<RaisedButton
                label="Deny"
                labelColor="#ffffff"
                backgroundColor="Red"
                onClick={() => that.denyMember(rowIndex)}
            />
            );
        }

        const membersRequestsButtonsMap = {
            'accept': acceptButton,
            'deny': denyButton
        }

        return (
            <div>

                <MyTable
                    tableName="NEXT MATCHES"
                    columnsNames={["Date", "Location", "Sport", "Community", "Team", "Status"]}
                    rowsContent={this.state.communityMatches}
                />

                <MyDivider />

                <MyTable
                    tableName="MEMBERS"
                    columnsNames={["Name", "Games played", "Wom", "Lost", "Tied", "Ranking", "Status", "Actions", "Actions"]}
                    rowsContent={this.state.communityMembers}
                    rowButtons={membersButtonsMap}
                    floatingButton={<ContentAdd />}
                />

                <MyDivider />

                <MyTable
                    tableName="MEMBERS REQUESTS"
                    columnsNames={["Name", "Actions", "Actions"]}
                    rowsContent={this.state.communityMembersRequests}
                    rowButtons={membersRequestsButtonsMap}
                />

            </div>
        );
    }
}