import React, { Component } from 'react';

import {
    Divider,
    FloatingActionButton,
    RaisedButton,
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui';

import ContentAdd from 'material-ui/svg-icons/content/add'

const styles = {
    propContainer: {
        width: 900,
        overflow: 'hidden',
        margin: '20px auto 0',
    },
};

const membersData = [
    {
        name: 'JP',
        games: 150,
        won: 100,
        lost: 35,
        tied: 15,
        ranking: 4,
        status: '-2',
    },
    {
        name: 'Marco',
        games: 100,
        won: 100,
        lost: 0,
        tied: 0,
        ranking: 1,
        status: '-',
    },
    {
        name: 'Edu',
        games: 100,
        won: 20,
        lost: 40,
        tied: 40,
        ranking: 4,
        status: '+2',
    },
];

const membersRequestsData = [
    {
        name: 'Maenza',
    },
    {
        name: '8Teco',
    },
    {
        name: 'Gabio',
    },
];

const matchesData = [
    {
        date: 'Today, 19:00',
        location: 'Barrilete',
        sport: 'Futbol',
        community: 'Glb',
        team: 'Hawks',
        status: 'Lets play',
    },
    {
        date: 'Tomorrow, 19:30',
        location: 'Nahuel',
        sport: 'Futbol',
        community: 'Chacra',
        team: 'UR',
        status: 'Lets play',
    },
    {
        date: 'Tomorrow, 19:00',
        location: 'Barrilete',
        sport: 'Futbol',
        community: 'Glb',
        team: 'Pijicortos',
        status: 'Cancelled',
    },
    {
        date: '31/01/2018, 19:00',
        location: 'Barrilete',
        sport: 'Futbol',
        community: 'Glb',
        team: 'Tragale',
        status: 'Pending',
    },
];

export default class CommunityDetailDashboard extends Component {
    state = {
        fixedHeader: true,
        stripedRows: true,
        showRowHover: false,
        showCheckboxes: false,
        selectable: false,
        height: '200px',
    };

    render() {

        const isCorrectCommunity = (x) => {
            return x.community === this.props.match.params.communityId
        }

        return (
            <div>
                <div style={styles.propContainer}>
                    <Table
                        height={this.state.height}
                        fixedHeader={this.state.fixedHeader}
                        multiSelectable={this.state.multiSelectable}>
                        <TableHeader
                            displaySelectAll={this.state.showCheckboxes}
                            adjustForCheckbox={this.state.showCheckboxes}
                            enableSelectAll={this.state.enableSelectAll}>
                            <TableRow>
                                <TableHeaderColumn colSpan="6" style={{ textAlign: 'left', color: 'black', fontSize: 16, fontWeight: 'bold' }}>
                                    NEXT MATCHES
                            </TableHeaderColumn>
                            </TableRow>
                            <TableRow>
                                <TableHeaderColumn style={{ textAlign: 'left', color: 'black', fontWeight: 'bold' }}>Date</TableHeaderColumn>
                                <TableHeaderColumn style={{ textAlign: 'left', color: 'black', fontWeight: 'bold' }}>Location</TableHeaderColumn>
                                <TableHeaderColumn style={{ textAlign: 'left', color: 'black', fontWeight: 'bold' }}>Sport</TableHeaderColumn>
                                <TableHeaderColumn style={{ textAlign: 'left', color: 'black', fontWeight: 'bold' }}>Community</TableHeaderColumn>
                                <TableHeaderColumn style={{ textAlign: 'left', color: 'black', fontWeight: 'bold' }}>Team</TableHeaderColumn>
                                <TableHeaderColumn style={{ textAlign: 'left', color: 'black', fontWeight: 'bold' }}>Status</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>

                        <TableBody
                            displayRowCheckbox={this.state.showCheckboxes}
                            deselectOnClickaway={this.state.deselectOnClickaway}
                            showRowHover={this.state.showRowHover}
                            stripedRows={this.state.stripedRows}>
                            {matchesData.filter(isCorrectCommunity).map((row, index) => (
                                <TableRow selectable={this.state.selectable} key={index}>
                                    <TableRowColumn style={{ textAlign: 'left' }}>{row.date}</TableRowColumn>
                                    <TableRowColumn style={{ textAlign: 'left' }}>{row.location}</TableRowColumn>
                                    <TableRowColumn style={{ textAlign: 'left' }}>{row.sport}</TableRowColumn>
                                    <TableRowColumn style={{ textAlign: 'left' }}>{row.community}</TableRowColumn>
                                    <TableRowColumn style={{ textAlign: 'left' }}>{row.team}</TableRowColumn>
                                    <TableRowColumn style={{ textAlign: 'left' }}>{row.status}</TableRowColumn>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                </div>

                <div style={{ margin: '30px auto 0px', width: '900px' }}>
                    <Divider />
                </div>

                <div style={styles.propContainer}>
                    <Table
                        height={this.state.height}
                        fixedHeader={this.state.fixedHeader}
                        multiSelectable={this.state.multiSelectable}>
                        <TableHeader
                            displaySelectAll={this.state.showCheckboxes}
                            adjustForCheckbox={this.state.showCheckboxes}
                            enableSelectAll={this.state.enableSelectAll}>
                            <TableRow>
                                <TableHeaderColumn colSpan="9" style={{ textAlign: 'left', color: 'black', fontSize: 16, fontWeight: 'bold' }}>
                                    MEMBERS
                                </TableHeaderColumn>
                            </TableRow>
                            <TableRow>
                                <TableHeaderColumn style={{ textAlign: 'left', color: 'black', fontWeight: 'bold' }}>Name</TableHeaderColumn>
                                <TableHeaderColumn style={{ textAlign: 'left', color: 'black', fontWeight: 'bold' }}>Games played</TableHeaderColumn>
                                <TableHeaderColumn style={{ textAlign: 'left', color: 'black', fontWeight: 'bold' }}>Won</TableHeaderColumn>
                                <TableHeaderColumn style={{ textAlign: 'left', color: 'black', fontWeight: 'bold' }}>Lost</TableHeaderColumn>
                                <TableHeaderColumn style={{ textAlign: 'left', color: 'black', fontWeight: 'bold' }}>Tied</TableHeaderColumn>
                                <TableHeaderColumn style={{ textAlign: 'left', color: 'black', fontWeight: 'bold' }}>Ranking</TableHeaderColumn>
                                <TableHeaderColumn style={{ textAlign: 'left', color: 'black', fontWeight: 'bold' }}>Status</TableHeaderColumn>
                                <TableHeaderColumn style={{ textAlign: 'left', color: 'black', fontWeight: 'bold' }}>Actions</TableHeaderColumn>
                                <TableHeaderColumn style={{ textAlign: 'left', color: 'black', fontWeight: 'bold' }}>Actions</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>

                        <TableBody
                            displayRowCheckbox={this.state.showCheckboxes}
                            deselectOnClickaway={this.state.deselectOnClickaway}
                            showRowHover={this.state.showRowHover}
                            stripedRows={this.state.stripedRows}>

                            {membersData.map((row, index) => (
                                <TableRow selectable={this.state.selectable} key={index}>
                                    <TableRowColumn style={{ textAlign: 'left' }}>{row.name}</TableRowColumn>
                                    <TableRowColumn style={{ textAlign: 'left' }}>{row.games}</TableRowColumn>
                                    <TableRowColumn style={{ textAlign: 'left' }}>{row.won}</TableRowColumn>
                                    <TableRowColumn style={{ textAlign: 'left' }}>{row.lost}</TableRowColumn>
                                    <TableRowColumn style={{ textAlign: 'left' }}>{row.tied}</TableRowColumn>
                                    <TableRowColumn style={{ textAlign: 'left' }}>{row.ranking}</TableRowColumn>
                                    <TableRowColumn style={{ textAlign: 'left' }}>{row.status}</TableRowColumn>
                                    <TableRowColumn style={{ textAlign: 'left' }}>
                                        <RaisedButton label="Remove" labelColor="#ffffff" backgroundColor="Red" />
                                    </TableRowColumn>
                                    <TableRowColumn style={{ textAlign: 'left' }}>
                                        <RaisedButton label="Penalize" labelColor="#ffffff" backgroundColor="Red" />
                                    </TableRowColumn>
                                </TableRow>
                            ))}

                        </TableBody>
                    </Table>

                    <FloatingActionButton style={{ float: 'right', margin: '20px' }}>
                        <ContentAdd />
                    </FloatingActionButton>

                </div>

                <div style={styles.propContainer}>
                    <Table
                        height={this.state.height}
                        fixedHeader={this.state.fixedHeader}
                        multiSelectable={this.state.multiSelectable}>
                        <TableHeader
                            displaySelectAll={this.state.showCheckboxes}
                            adjustForCheckbox={this.state.showCheckboxes}
                            enableSelectAll={this.state.enableSelectAll}>
                            <TableRow>
                                <TableHeaderColumn colSpan="3" style={{ textAlign: 'left', color: 'black', fontSize: 16, fontWeight: 'bold' }}>
                                    MEMBERS REQUESTS
                                </TableHeaderColumn>
                            </TableRow>
                            <TableRow>
                                <TableHeaderColumn style={{ textAlign: 'left', color: 'black', fontWeight: 'bold' }}>Name</TableHeaderColumn>
                                <TableHeaderColumn style={{ textAlign: 'left', color: 'black', fontWeight: 'bold' }}>Actions</TableHeaderColumn>
                                <TableHeaderColumn style={{ textAlign: 'left', color: 'black', fontWeight: 'bold' }}>Actions</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>

                        <TableBody
                            displayRowCheckbox={this.state.showCheckboxes}
                            deselectOnClickaway={this.state.deselectOnClickaway}
                            showRowHover={this.state.showRowHover}
                            stripedRows={this.state.stripedRows}>

                            {membersRequestsData.map((row, index) => (
                                <TableRow selectable={this.state.selectable} key={index}>
                                    <TableRowColumn style={{ textAlign: 'left' }}>{row.name}</TableRowColumn>
                                    <TableRowColumn style={{ textAlign: 'left' }}>
                                        <RaisedButton label="Accept" labelColor="#ffffff" backgroundColor="Green" />
                                    </TableRowColumn>
                                    <TableRowColumn style={{ textAlign: 'left' }}>
                                        <RaisedButton label="Deny" labelColor="#ffffff" backgroundColor="Red" />
                                    </TableRowColumn>
                                </TableRow>
                            ))}

                        </TableBody>
                    </Table>

                </div>

            </div>
        );
    }
}