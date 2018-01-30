import React, { Component } from 'react';

import {
    Divider,
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui';

const styles = {
    propContainer: {
        width: 900,
        overflow: 'hidden',
        margin: '20px auto 0',
    },
};

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

const globalStatsData = [
    {
        games: 200,
        won: 150,
        lost: 35,
        tied: 15,
        ranking: 150,
        status: '+25',
    },
];

const communityStatsData = [
    {
        community: 'Glb',
        games: 150,
        won: 100,
        lost: 35,
        tied: 15,
        ranking: 4,
        status: '-2',
    },
    {
        community: 'Chacra',
        games: 100,
        won: 100,
        lost: 0,
        tied: 0,
        ranking: 1,
        status: '-',
    },
];

export default class HomeDashboard extends Component {
    state = {
        fixedHeader: true,
        stripedRows: true,
        showRowHover: false,
        showCheckboxes: false,
        selectable: false,
        height: '200px',
    };

    render() {
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

                            {matchesData.map((row, index) => (
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

                <div style={{margin:'30px auto 0px', width:'900px'}}>
                    <Divider />
                </div>

                <div style={styles.propContainer}>
                    <Table
                        height={"50"}
                        fixedHeader={this.state.fixedHeader}
                        multiSelectable={this.state.multiSelectable}>
                        <TableHeader
                            displaySelectAll={this.state.showCheckboxes}
                            adjustForCheckbox={this.state.showCheckboxes}
                            enableSelectAll={this.state.enableSelectAll}>
                            <TableRow>
                                <TableHeaderColumn colSpan="6" style={{ textAlign: 'left', color: 'black', fontSize: 16, fontWeight: 'bold' }}>
                                    GLOBAL STATS
                                </TableHeaderColumn>
                            </TableRow>
                            <TableRow>
                                <TableHeaderColumn style={{ textAlign: 'left', color: 'black', fontWeight: 'bold' }}>Games played</TableHeaderColumn>
                                <TableHeaderColumn style={{ textAlign: 'left', color: 'black', fontWeight: 'bold' }}>Won</TableHeaderColumn>
                                <TableHeaderColumn style={{ textAlign: 'left', color: 'black', fontWeight: 'bold' }}>Lost</TableHeaderColumn>
                                <TableHeaderColumn style={{ textAlign: 'left', color: 'black', fontWeight: 'bold' }}>Tied</TableHeaderColumn>
                                <TableHeaderColumn style={{ textAlign: 'left', color: 'black', fontWeight: 'bold' }}>Ranking</TableHeaderColumn>
                                <TableHeaderColumn style={{ textAlign: 'left', color: 'black', fontWeight: 'bold' }}>Status</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>

                        <TableBody
                            displayRowCheckbox={this.state.showCheckboxes}
                            deselectOnClickaway={this.state.deselectOnClickaway}
                            showRowHover={this.state.showRowHover}
                            stripedRows={this.state.stripedRows}>

                            {globalStatsData.map((row, index) => (
                                <TableRow selectable={this.state.selectable} key={index}>
                                    <TableRowColumn style={{ textAlign: 'left' }}>{row.games}</TableRowColumn>
                                    <TableRowColumn style={{ textAlign: 'left' }}>{row.won}</TableRowColumn>
                                    <TableRowColumn style={{ textAlign: 'left' }}>{row.lost}</TableRowColumn>
                                    <TableRowColumn style={{ textAlign: 'left' }}>{row.tied}</TableRowColumn>
                                    <TableRowColumn style={{ textAlign: 'left' }}>{row.ranking}</TableRowColumn>
                                    <TableRowColumn style={{ textAlign: 'left' }}>{row.status}</TableRowColumn>
                                </TableRow>
                            ))}

                        </TableBody>
                    </Table>

                </div>

                <div style={{margin:'30px auto 0px', width:'900px'}}>
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
                                <TableHeaderColumn colSpan="7" style={{ textAlign: 'left', color: 'black', fontSize: 16, fontWeight: 'bold' }}>
                                    COMMUNITY STATS
                                </TableHeaderColumn>
                            </TableRow>
                            <TableRow>
                                <TableHeaderColumn style={{ textAlign: 'left', color: 'black', fontWeight: 'bold' }}>Community</TableHeaderColumn>
                                <TableHeaderColumn style={{ textAlign: 'left', color: 'black', fontWeight: 'bold' }}>Games played</TableHeaderColumn>
                                <TableHeaderColumn style={{ textAlign: 'left', color: 'black', fontWeight: 'bold' }}>Won</TableHeaderColumn>
                                <TableHeaderColumn style={{ textAlign: 'left', color: 'black', fontWeight: 'bold' }}>Lost</TableHeaderColumn>
                                <TableHeaderColumn style={{ textAlign: 'left', color: 'black', fontWeight: 'bold' }}>Tied</TableHeaderColumn>
                                <TableHeaderColumn style={{ textAlign: 'left', color: 'black', fontWeight: 'bold' }}>Ranking</TableHeaderColumn>
                                <TableHeaderColumn style={{ textAlign: 'left', color: 'black', fontWeight: 'bold' }}>Status</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>

                        <TableBody
                            displayRowCheckbox={this.state.showCheckboxes}
                            deselectOnClickaway={this.state.deselectOnClickaway}
                            showRowHover={this.state.showRowHover}
                            stripedRows={this.state.stripedRows}>

                            {communityStatsData.map((row, index) => (
                                <TableRow selectable={this.state.selectable} key={index}>
                                    <TableRowColumn style={{ textAlign: 'left' }}>{row.community}</TableRowColumn>
                                    <TableRowColumn style={{ textAlign: 'left' }}>{row.games}</TableRowColumn>
                                    <TableRowColumn style={{ textAlign: 'left' }}>{row.won}</TableRowColumn>
                                    <TableRowColumn style={{ textAlign: 'left' }}>{row.lost}</TableRowColumn>
                                    <TableRowColumn style={{ textAlign: 'left' }}>{row.tied}</TableRowColumn>
                                    <TableRowColumn style={{ textAlign: 'left' }}>{row.ranking}</TableRowColumn>
                                    <TableRowColumn style={{ textAlign: 'left' }}>{row.status}</TableRowColumn>
                                </TableRow>
                            ))}

                        </TableBody>
                    </Table>

                </div>

            </div>
        );
    }
}