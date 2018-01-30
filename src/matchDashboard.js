import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import {
    Divider,
    FloatingActionButton,
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

const matchesHistoryData = [
    {
        date: '24/01/2018, 19:00',
        location: 'Barrilete',
        sport: 'Futbol',
        community: 'Glb',
        team: 'Hawks',
        result: 'L',
        points: 1,
    },
    {
        date: '17/01/2018, 19:00',
        location: 'Nahuel',
        sport: 'Futbol',
        community: 'Chacra',
        team: 'UR',
        result: 'T',
        points: 2,
    },
    {
        date: '10/01/2018, 19:00',
        location: 'Barrilete',
        sport: 'Futbol',
        community: 'Glb',
        team: 'Pijicortos',
        result: 'W',
        points: 3,
    },
    {
        date: '03/01/2018, 19:00',
        location: 'Barrilete',
        sport: 'Futbol',
        community: 'Glb',
        team: 'Tragale',
        result: 'N/A',
        points: 4,
    },
];

export default class MatchDashboard extends Component {
    state = {
        fixedHeader: true,
        stripedRows: true,
        showRowHover: false,
        showCheckboxes: false,
        selectable: false,
        height: '150px',
    };

    

    render() {

        const statusStyle = (status) => {
            if (status === 'L' || status === 'Cancelled') {
                return {
                    color: 'Red',
                    fontWeight: 'bold',
                    text: 'Loose',

                };
            } else if (status === 'W' || status === 'Lets play') {
                return {
                    color: 'Green',
                    fontWeight: 'bold',
                    text: 'Won',

                };
            } else if (status === 'T' || status === 'Pending') {
                return {
                    color: 'Orange',
                    fontWeight: 'bold',
                    text: 'Tied',

                };
            }
            return {
                color: 'Blue',
                fontWeight: 'bold',
                text: 'Did not attend',

            };

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

                            {matchesData.map((row, index) => (
                                <TableRow selectable={this.state.selectable} key={index}>
                                    <TableRowColumn style={{ textAlign: 'left' }}>{row.date}</TableRowColumn>
                                    <TableRowColumn style={{ textAlign: 'left' }}>{row.location}</TableRowColumn>
                                    <TableRowColumn style={{ textAlign: 'left' }}>{row.sport}</TableRowColumn>
                                    <TableRowColumn style={{ textAlign: 'left' }}>{row.community}</TableRowColumn>
                                    <TableRowColumn style={{ textAlign: 'left' }}>{row.team}</TableRowColumn>
                                    <TableRowColumn style={statusStyle(row.status)}>{row.status}</TableRowColumn>
                                </TableRow>
                            ))}

                        </TableBody>
                    </Table>

                    <FloatingActionButton style={{ float: 'right', margin: '20px' }} containerElement={<Link to={`/matches/new`} />}>
                        <ContentAdd />
                    </FloatingActionButton>

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
                                <TableHeaderColumn colSpan="7" style={{ textAlign: 'left', color: 'black', fontSize: 16, fontWeight: 'bold' }}>
                                    MATCHES HISTORY
                                </TableHeaderColumn>
                            </TableRow>
                            <TableRow>
                                <TableHeaderColumn style={{ textAlign: 'left', color: 'black', fontWeight: 'bold' }}>Date</TableHeaderColumn>
                                <TableHeaderColumn style={{ textAlign: 'left', color: 'black', fontWeight: 'bold' }}>Location</TableHeaderColumn>
                                <TableHeaderColumn style={{ textAlign: 'left', color: 'black', fontWeight: 'bold' }}>Sport</TableHeaderColumn>
                                <TableHeaderColumn style={{ textAlign: 'left', color: 'black', fontWeight: 'bold' }}>Community</TableHeaderColumn>
                                <TableHeaderColumn style={{ textAlign: 'left', color: 'black', fontWeight: 'bold' }}>Team</TableHeaderColumn>
                                <TableHeaderColumn style={{ textAlign: 'left', color: 'black', fontWeight: 'bold' }}>Status</TableHeaderColumn>
                                <TableHeaderColumn style={{ textAlign: 'left', color: 'black', fontWeight: 'bold' }}>Prize</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>

                        <TableBody
                            displayRowCheckbox={this.state.showCheckboxes}
                            deselectOnClickaway={this.state.deselectOnClickaway}
                            showRowHover={this.state.showRowHover}
                            stripedRows={this.state.stripedRows}>

                            {matchesHistoryData.map((row, index) => (
                                <TableRow selectable={this.state.selectable} key={index}>
                                    <TableRowColumn style={{ textAlign: 'left' }}>{row.date}</TableRowColumn>
                                    <TableRowColumn style={{ textAlign: 'left' }}>{row.location}</TableRowColumn>
                                    <TableRowColumn style={{ textAlign: 'left' }}>{row.sport}</TableRowColumn>
                                    <TableRowColumn style={{ textAlign: 'left' }}>{row.community}</TableRowColumn>
                                    <TableRowColumn style={{ textAlign: 'left' }}>{row.team}</TableRowColumn>
                                    <TableRowColumn style={statusStyle(row.result)}>{statusStyle(row.result).text}</TableRowColumn>
                                    <TableRowColumn style={{ textAlign: 'left' }}>{row.points}</TableRowColumn>
                                </TableRow>
                            ))}

                        </TableBody> 
                    </Table>

                </div>

            </div>
        );
    }
}