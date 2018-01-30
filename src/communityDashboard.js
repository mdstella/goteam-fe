import React, { Component } from 'react';
import { Link } from 'react-router-dom'

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
    TextField,
} from 'material-ui';

import ContentAdd from 'material-ui/svg-icons/content/add'

const styles = {
    propContainer: {
        width: 900,
        overflow: 'hidden',
        margin: '20px auto 0',
    },
};

const searchData = [
    {
        name: 'Los Tragale',
        players: 34,
        sport: 'Futbol',
        isMember: false,
    },
    {
        name: 'Carne por popa',
        players: 10,
        sport: 'Basquet',
        isMember: false,
    },
    {
        name: 'GLB',
        players: 10,
        sport: 'Futbol',
        isMember: true,
    },
];

const myCommunitiesData = [
    {
        name: 'Glb',
        games: 150,
        won: 100,
        lost: 35,
        tied: 15,
        ranking: 4,
        status: '-2',
    },
    {
        name: 'Chacra',
        games: 100,
        won: 100,
        lost: 0,
        tied: 0,
        ranking: 1,
        status: '-',
    },
];

export default class CommunityDashboard extends Component {
    state = {
        fixedHeader: true,
        stripedRows: true,
        showRowHover: false,
        showCheckboxes: false,
        selectable: false,
        height: '110px',
    };

    render() {
        return (
            <div>
                <div style={styles.propContainer}>
                    <TextField
                        hintText="Search community"
                        floatingLabelText="Search community"
                    />
                    <RaisedButton label="Search" primary={true} style={{ margin: '12px' }} />
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
                                <TableHeaderColumn colSpan="4" style={{ textAlign: 'left', color: 'black', fontSize: 16, fontWeight: 'bold' }}>
                                    SEARCH RESULT
                                </TableHeaderColumn>
                            </TableRow>
                            <TableRow>
                                <TableHeaderColumn style={{ textAlign: 'left', color: 'black', fontWeight: 'bold' }}>Name</TableHeaderColumn>
                                <TableHeaderColumn style={{ textAlign: 'left', color: 'black', fontWeight: 'bold' }}>Players</TableHeaderColumn>
                                <TableHeaderColumn style={{ textAlign: 'left', color: 'black', fontWeight: 'bold' }}>Default Sport</TableHeaderColumn>
                                <TableHeaderColumn style={{ textAlign: 'left', color: 'black', fontWeight: 'bold' }}>Action</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>

                        <TableBody
                            displayRowCheckbox={this.state.showCheckboxes}
                            deselectOnClickaway={this.state.deselectOnClickaway}
                            showRowHover={this.state.showRowHover}
                            stripedRows={this.state.stripedRows}>

                            {searchData.map((row, index) => (
                                <TableRow selectable={this.state.selectable} key={index}>
                                    <TableRowColumn style={{ textAlign: 'left' }}>{row.name}</TableRowColumn>
                                    <TableRowColumn style={{ textAlign: 'left' }}>{row.players}</TableRowColumn>
                                    <TableRowColumn style={{ textAlign: 'left' }}>{row.sport}</TableRowColumn>
                                    <TableRowColumn style={{ textAlign: 'left' }}>

                                        {row.isMember === true ? (
                                            <RaisedButton label="Leave" labelColor="#ffffff" backgroundColor="Red" />
                                        ) : (
                                                <RaisedButton label="Request access" labelColor="#ffffff" backgroundColor="Green" />
                                            )
                                        }
                                    </TableRowColumn>
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
                                    MY COMMUNITIES
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

                            {myCommunitiesData.map((row, index) => (
                                <TableRow selectable={this.state.selectable} key={index}>
                                    <TableRowColumn style={{ textAlign: 'left' }}>{row.name}</TableRowColumn>
                                    <TableRowColumn style={{ textAlign: 'left' }}>{row.games}</TableRowColumn>
                                    <TableRowColumn style={{ textAlign: 'left' }}>{row.won}</TableRowColumn>
                                    <TableRowColumn style={{ textAlign: 'left' }}>{row.lost}</TableRowColumn>
                                    <TableRowColumn style={{ textAlign: 'left' }}>{row.tied}</TableRowColumn>
                                    <TableRowColumn style={{ textAlign: 'left' }}>{row.ranking}</TableRowColumn>
                                    <TableRowColumn style={{ textAlign: 'left' }}>{row.status}</TableRowColumn>
                                    <TableRowColumn style={{ textAlign: 'left' }}>
                                        <RaisedButton label="Details" labelColor="#ffffff" backgroundColor="Blue"
                                            containerElement={<Link to={`/communities/${row.name}`} />} />
                                    </TableRowColumn>
                                    <TableRowColumn style={{ textAlign: 'left' }}>
                                        <RaisedButton label="Leave" labelColor="#ffffff" backgroundColor="Red" />
                                    </TableRowColumn>
                                </TableRow>
                            ))}

                        </TableBody>
                    </Table>

                    <FloatingActionButton style={{ float: 'right', margin: '20px' }} containerElement={<Link to={`/communities/new`} />}>
                        <ContentAdd />
                    </FloatingActionButton>

                </div>

            </div>
        );
    }
}