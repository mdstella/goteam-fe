import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import {
    Checkbox,
    DatePicker,
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
    fieldStyle: {
        marginTop: '10px',
        marginBottom: '10px',
    },
};

export default class MatchForm extends Component {

    state = {
        communityValue: 1,
        sportValue: 1
    };

    handleCommunityChange = (event, index, communityValue) => this.setState({ communityValue: communityValue });
    handleSportChange = (event, index, sportValue) => this.setState({ sportValue: sportValue });

    render() {
        return (
            <div>
                <div style={styles.propContainer}>

                    <div style={{
                        fontFamily: "Roboto, sans-serif", textAlign: 'left', color: 'black', fontSize: 16, fontWeight: 'bold'
                    }}>
                        CREATE MATCH
                    </div>

                    <div style={styles.fieldStyle}>
                        <SelectField
                            floatingLabelText="Community"
                            value={this.state.communityValue}
                            onChange={this.handleCommunityChange}
                            autoWidth={true}
                        >
                            <MenuItem value={1} primaryText="Glb" />
                            <MenuItem value={2} primaryText="Chacra" />
                        </SelectField>
                    </div>

                    <div style={styles.fieldStyle}>
                        <SelectField
                            floatingLabelText="Default sport"
                            value={this.state.sportValue}
                            onChange={this.handleSportChange}
                            autoWidth={true}
                        >
                            <MenuItem value={1} primaryText="Futbol" />
                            <MenuItem value={2} primaryText="Basquet" />
                            <MenuItem value={3} primaryText="Tenis" />
                            <MenuItem value={4} primaryText="Handball" />
                            <MenuItem value={5} primaryText="Rugby" />
                        </SelectField>
                    </div>
                    <div style={styles.fieldStyle}>
                        <DatePicker hintText="When" />
                    </div>
                    <div style={{
                        fontFamily: "Roboto, sans-serif", textAlign: 'left', color: '#0000004d',
                        fontSize: 16, marginTop: '10px', marginBottom: '10px'
                    }}>
                        Location
                    </div>
                    <div style={styles.fieldStyle}>

                        <img alt="location" height="250px" src={process.env.PUBLIC_URL + '/map.png'} />
                    </div>
                    <div style={styles.fieldStyle}>
                        <TextField
                            hintText="Min ammount of players"
                            floatingLabelText="Min ammount of players"
                        />
                    </div>
                    <div style={styles.fieldStyle}>
                        <TextField
                            hintText="Max ammount of players"
                            floatingLabelText="Max ammount of players"
                        />
                    </div>
                    <div style={styles.fieldStyle}>
                        <Checkbox
                            label="Should be even players?"
                        />
                    </div>
                    <div style={styles.fieldStyle}>
                        <Checkbox
                            label="Add me as a player in this match"
                        />
                    </div>
                    <div style={styles.fieldStyle}>
                        <Checkbox
                            label="Notify community of this match?"
                        />
                    </div>
                    <div style={styles.fieldStyle}>
                        <Checkbox
                            label="Notify community on every event in this match?"
                        />
                    </div>
                    <RaisedButton containerElement={<Link to={`/matches`} />} label="Create" primary={true} style={{ marginTop: '12px' }} />
                </div>
            </div>
        );
    }
}