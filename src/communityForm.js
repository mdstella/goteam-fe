import React, { Component } from 'react';
import { Link } from 'react-router-dom'

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

export default class MatchForm extends Component {

    state = {
        value: 1,
    };

    handleChange = (event, index, value) => this.setState({ value });

    render() {
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
                        />
                    </div>

                    <div>
                        <SelectField
                            floatingLabelText="Default sport"
                            value={this.state.value}
                            onChange={this.handleChange}
                            autoWidth={true}
                        >
                            <MenuItem value={1} primaryText="Futbol" />
                            <MenuItem value={2} primaryText="Basquet" />
                            <MenuItem value={3} primaryText="Tenis" />
                            <MenuItem value={4} primaryText="Handball" />
                            <MenuItem value={5} primaryText="Rugby" />
                        </SelectField>
                    </div>

                    <RaisedButton containerElement={<Link to={`/communities`} />} label="Create" primary={true} style={{ marginTop: '12px' }} />
                </div>
            </div>
        );
    }
}