import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import {
    RaisedButton,
    TextField,
} from 'material-ui';

import ContentAdd from 'material-ui/svg-icons/content/add'

import MyTable from '../myComponents/myTable';
import MyDivider from '../myComponents/myDivider';

import {
    searchData,
    myCommunitiesData,
} from '../mockData'

const styles = {
    propContainer: {
        width: 900,
        overflow: 'hidden',
        margin: '20px auto 0',
    },
};

export default class CommunityDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myCommunities: myCommunitiesData,
            searchResult: [],
        };
    }

    leaveCommunity(rowIndex) {
        let aux = this.state.myCommunities
        aux.splice(rowIndex, 1)

        this.setState({
            myCommunities: aux
        });
    }

    requestAccessNotification(rowIndex) {
        let aux = this.state.searchResult
        aux.splice(rowIndex, 1)

        this.setState({
            searchResult: aux
        });
    }

    leaveNotification(rowIndex) {
        let aux = this.state.searchResult
        aux.splice(rowIndex, 1)

        this.setState({
            searchResult: aux
        });
    }

    searchCommunities() {
        this.setState({
            searchResult: searchData,
        })
    }

    render() {
        const that = this

        const detailButton = function getDetailButton(row, rowIndex) {
            return (<RaisedButton
                label="Details"
                labelColor="#ffffff"
                backgroundColor="Blue"
                containerElement={< Link to={`/communities/${row.name}`} />}
            />
            );
        }

        const leaveButton = function getLeaveButton(row, rowIndex) {
            return (<RaisedButton
                label="Leave"
                labelColor="#ffffff"
                backgroundColor="Red"
                onClick={() => that.leaveCommunity(rowIndex)}
            />
            );
        }


        const myCommunitiesButtonsMap = {
            'detail': detailButton,
            'leave': leaveButton
        }

        const myConditionalButtons = function getConditionalButtons(row, rowIndex) {
            if (row.isMember === 'true') {
                return (
                    <RaisedButton
                        label="Leave"
                        labelColor="#ffffff"
                        backgroundColor="Red"
                        onClick={() => that.leaveNotification(rowIndex)}
                    />
                );
            }
            return (
                <RaisedButton
                    label="Request access"
                    labelColor="#ffffff"
                    backgroundColor="Green"
                    onClick={() => that.requestAccessNotification(rowIndex)}
                />
            );
        }

        return (
            <div>
                <div style={styles.propContainer}>

                    <TextField
                        hintText="Search community"
                        floatingLabelText="Search community"
                    />
                    <RaisedButton
                        label="Search"
                        primary={true}
                        style={{ margin: '12px' }}
                        onClick={() => this.searchCommunities()}
                    />

                </div>



                {this.state.searchResult.length > 0 &&
                    <div>

                        <MyTable
                            tableName="SEARCH RESULT"
                            columnsNames={["Name", "Players", "Default Sport", "Member", "Actions"]}
                            rowsContent={this.state.searchResult}
                            conditionalRowButtons={myConditionalButtons}
                        />

                        <MyDivider />
                    </div>
                }

                <MyTable
                    tableName="MY COMMUNITIES"
                    columnsNames={["Name", "Games played", "Won", "Lost", "Tied", "Ranking", "Status", "Actions", "Actions"]}
                    rowsContent={this.state.myCommunities}
                    rowButtons={myCommunitiesButtonsMap}
                    floatingButton={<ContentAdd />}
                    floatingButtonLink={<Link to={`/communities/new`} />}
                />

            </div>
        );
    }
}