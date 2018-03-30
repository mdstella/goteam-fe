import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

import {
    RaisedButton,
    TextField,
} from 'material-ui';

import ContentAdd from 'material-ui/svg-icons/content/add'

import MyTableComponent from '../myTableComponent';
import MyDividerComponent from '../myDividerComponent';

const styles = {
    propContainer: {
        width: 900,
        overflow: 'hidden',
        margin: '20px auto 0',
    },
};

export default class CommunityDashboardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myCommunities: this.props.myCommunities === undefined ? [] : this.props.myCommunities,
            searchResult: this.props.searchResult === undefined ? [] : this.props.searchResult,
            searchInput: '',
        };

    }

    handleSearchFieldChange = (event) => this.setState({ searchInput: event.target.value });

    render() {
        const that = this

        function loadCommunityDetail(index, name) {
            // TODO send the community id once is integrated with saga
            that.props.communityNextMatches(name)
            that.props.communityMembers(index)
            that.props.communityMembersRequest(index)
        }

        const detailButton = function getDetailButton(row, rowIndex) {
            return (<RaisedButton
                label="Details"
                labelColor="#ffffff"
                backgroundColor="Blue"
                containerElement={< Link to={`/communities/${row.name}`} />}
                onClick={() => loadCommunityDetail(rowIndex, row.name)}
            />
            );
        }

        const leaveButton = function getLeaveButton(row, rowIndex) {
            return (<RaisedButton
                label="Leave"
                labelColor="#ffffff"
                backgroundColor="Red"
                //  TODO change row index by community id
                onClick={() => that.props.leaveCommunity(rowIndex)}
            />
            );
        }


        const myCommunitiesButtonsMap = {
            'detail': detailButton,
            'leave': leaveButton
        }

        const myConditionalButtons = function getConditionalButtons(row, rowIndex) {
            if (row.isMember) {
                return (
                    <RaisedButton
                        label="Leave"
                        labelColor="#ffffff"
                        backgroundColor="Red"
                        //  TODO change row index by community id
                        onClick={() => that.props.leaveNotification(rowIndex)}
                    />
                );
            }
            return (
                <RaisedButton
                    label="Request access"
                    labelColor="#ffffff"
                    backgroundColor="Green"
                    //  TODO change row index by community id
                    onClick={() => that.props.requestAccessNotification(rowIndex)}
                />
            );
        }

        return (
            <div>
                <div style={styles.propContainer}>

                    <TextField
                        hintText="Search community"
                        floatingLabelText="Search community"
                        onChange={this.handleSearchFieldChange}
                    />
                    <RaisedButton
                        label="Search"
                        primary={true}
                        style={{ margin: '12px' }}
                        onClick={() => this.props.searchCommunities(this.state.searchInput)}
                    />
                </div>



                {this.props.searchResult.length > 0 &&
                    <div>

                        <MyTableComponent
                            tableName="SEARCH RESULT"
                            columnsNames={["Name", "Players", "Default Sport", "Member", ""]}
                            rowsContent={this.props.searchResult}
                            conditionalRowButtons={myConditionalButtons}
                            myCommunities />

                        <MyDividerComponent />
                    </div>
                }

                <MyTableComponent
                    tableName="MY COMMUNITIES"
                    columnsNames={["Name", "Games played", "Won", "Lost", "Tied", "Ranking", "Status", "", ""]}
                    rowsContent={this.props.myCommunities}
                    rowButtons={myCommunitiesButtonsMap}
                    floatingButton={<ContentAdd />}
                    floatingButtonLink={<Link to={`/communities/new`} />}
                />

            </div>
        );
    }
}

CommunityDashboardComponent.propTypes = {
    myCommunities: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            won: PropTypes.number,
            lost: PropTypes.number,
            tied: PropTypes.number,
            ranking: PropTypes.number,
            status: PropTypes.string
        })
    ),
    searchResult: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            players: PropTypes.number,
            sport: PropTypes.string,
            isMember: PropTypes.bool
        })
    )
}