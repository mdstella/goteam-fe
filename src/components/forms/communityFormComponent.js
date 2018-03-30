import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

import {
    MenuItem,
    RaisedButton,
    SelectField,
    TextField
} from 'material-ui';

const styles = {
    propContainer: {
        width: 900,
        overflow: 'hidden',
        margin: '20px auto 0',
    },
};

export default class CommunityFormComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 1,
            input: '',
        };

    }

    getCommunity() {
        return {
            name: this.state.input,
            games: 0,
            won: 0,
            lost: 0,
            tied: 0,
            // we need the last ranking here
            ranking: 100,
            status: '-',
        }
    };

    handleSelectChange = (event, index, value) => this.setState({ value });

    handleFieldChange = (event) => this.setState({ input: event.target.value });

    render() {
        const that = this

        const saveButton = function getSaveButton() {
            return (<RaisedButton
                label="Create"
                primary={true}
                style={{ marginTop: '12px' }}
                containerElement={<Link to={`/communities`} />}
                onClick={() => that.props.dispatch(that.getCommunity())}
            />
            );
        }


        return (
            <div>
                <div style={styles.propContainer}>

                    <div style={{
                        fontFamily: "Roboto, sans-serif", textAlign: 'left', color: 'black', fontSize: 16, fontWeight: 'bold'
                    }}>
                        CREATE COMMUNITY
                    </div>
                    <div>
                        <TextField
                            hintText="Community name"
                            floatingLabelText="Community name"
                            name="communityField"
                            onChange={this.handleFieldChange}
                        />
                    </div>

                    <div>
                        <SelectField
                            floatingLabelText="Default sport"
                            value={this.state.value}
                            onChange={this.handleSelectChange}
                            autoWidth={true}
                        >
                            <MenuItem value={1} primaryText="Futbol" />
                            <MenuItem value={2} primaryText="Basquet" />
                            <MenuItem value={3} primaryText="Tenis" />
                            <MenuItem value={4} primaryText="Handball" />
                            <MenuItem value={5} primaryText="Rugby" />
                        </SelectField>
                    </div>

                    {saveButton()}
                </div>
            </div>
        );
    }
}

CommunityFormComponent.propTypes = {
    dispatch: PropTypes.func.isRequired
}