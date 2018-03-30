import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
    FloatingActionButton,
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui';

function getTableHeight(rowsCount) {
    if (rowsCount === 0) {
        return '10px'
    } else if (rowsCount === 1) {
        return '70px'
    } else if (rowsCount === 2) {
        return '105px'
    } else {
        return '165px'
    }
}

function getStyle(width) {
    return {
        width: width === undefined ? 900 : width,
        overflow: 'hidden',
        margin: '20px auto 0',
    }
}

export default class MyTableComponent extends Component {
    state = {
        fixedHeader: true,
        stripedRows: true,
        showRowHover: false,
        showCheckboxes: false,
        selectable: false,
    };

    render() {

        let floatingButton = null;
        if (this.props.floatingButton != null) {
            floatingButton = (
                <FloatingActionButton style={{ float: 'right', margin: '20px' }} containerElement={this.props.floatingButtonLink}>
                    {this.props.floatingButton}
                </FloatingActionButton>
            )
        }

        return (
            <div style={getStyle(this.props.width)} >
                <Table
                    height={getTableHeight(this.props.rowsContent.length)}
                    fixedHeader={this.state.fixedHeadershowCheckboxes}
                    multiSelectable={this.state.multiSelectable}>
                    <TableHeader
                        displaySelectAll={this.state.showCheckboxes}
                        adjustForCheckbox={this.state.showCheckboxes}
                        enableSelectAll={this.state.enableSelectAll}>
                        <TableRow>
                            <TableHeaderColumn colSpan={this.props.columnsNames.length} style={{ textAlign: 'left', color: 'black', fontSize: 16, fontWeight: 'bold' }}>
                                {this.props.tableName}
                            </TableHeaderColumn>
                        </TableRow>
                        <TableRow>
                            {this.props.columnsNames.map((row, i) => (
                                <TableHeaderColumn key={i} style={{ textAlign: 'left', color: 'black', fontWeight: 'bold' }}>{row}</TableHeaderColumn>
                            ))}
                        </TableRow>
                    </TableHeader>

                    <TableBody
                        displayRowCheckbox={this.state.showCheckboxes}
                        deselectOnClickaway={this.state.deselectOnClickaway}
                        showRowHover={this.state.showRowHover}
                        stripedRows={this.state.stripedRows}>

                        {this.props.rowsContent.map((row, index) => (
                            <TableRow selectable={this.state.selectable} key={index}>
                                {Object.keys(row).map((columnValue, i) => (
                                    <TableRowColumn key={i} style={{ textAlign: 'left' }}><div>{row[columnValue]}</div></TableRowColumn>
                                ))}

                                {this.props.conditionalRowButtons != null &&
                                    <TableRowColumn style={{ textAlign: 'left' }}>
                                        {this.props.conditionalRowButtons(row, index)}
                                    </TableRowColumn>
                                }

                                {this.props.rowButtons != null &&
                                    Object.keys(this.props.rowButtons).map((buttonKey, i) => (
                                        <TableRowColumn key={i} style={{ textAlign: 'left' }}>
                                            {this.props.rowButtons[buttonKey](row, index)}
                                        </TableRowColumn>
                                    ))
                                }

                            </TableRow>
                        ))}

                    </TableBody>
                </Table>

                {floatingButton}

            </div >

        );
    }
}

MyTableComponent.defaultProps = {
    height: '200px',
};

MyTableComponent.propTypes = {
    height: PropTypes.string
}