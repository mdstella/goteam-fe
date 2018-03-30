import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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

export default class MatchFormComponent extends Component {
    constructor() {
        super();
        this.state = {
            sportValue: "Futbol",
            when: '',
            where: '',
            maxPlayers: '',
            minPlayers: '',
            teamA: '',
            teamB: '',
            evenPlayers: false,
            addMe: false,
            notifyMatch: false,
            notifyMatchEvents: false
        };
    }

    handleCommunityChange = (event, index, communityValue) => this.setState({ communityValue: communityValue });
    handleSportChange = (event, index, sportValue) => this.setState({ sportValue: sportValue });

    inputOnChange = (event) => {
        const state = this.state
        state[event.target.name] = event.target.value;
        this.setState(state);
    }

    checkOnChange = (event) => {
        const state = this.state
        state[event.target.name] = !state[event.target.name];
        this.setState(state);
    }

    // event always null 
    // date has the new date value
    datePickerOnChange = (event, newDate) => {
        this.setState({
            when: newDate.toString()
        });
    }

    createMatch() {
        return {
            date: this.state.when,
            location: this.state.where,
            sport: this.state.sportValue,
            community: this.state.communityValue,
            team: 'TBD',
            status: 'Pending',
        }
    };

    render() {
        const that = this

        const createButton = function getCreateButton() {
            return (
                <RaisedButton
                    containerElement={<Link to={`/matches`} />}
                    label="Create"
                    primary={true}
                    style={{ marginTop: '12px' }}
                    onClick={() => that.props.dispatch(that.createMatch())}
                />
            );
        }

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
                            value={that.state.communityValue}
                            onChange={that.handleCommunityChange}
                            autoWidth={true}
                        >
                            <MenuItem value={"Glb"} primaryText="Glb" />
                            <MenuItem value={"Chacra"} primaryText="Chacra" />
                        </SelectField>
                    </div>

                    <div style={styles.fieldStyle}>
                        <SelectField
                            floatingLabelText="Default sport"
                            value={that.state.sportValue}
                            onChange={that.handleSportChange}
                            autoWidth={true}
                        >
                            <MenuItem value={"Futbol"} primaryText="Futbol" />
                            <MenuItem value={"Basquet"} primaryText="Basquet" />
                            <MenuItem value={"Tenis"} primaryText="Tenis" />
                            <MenuItem value={"Handball"} primaryText="Handball" />
                            <MenuItem value={"Rugby"} primaryText="Rugby" />
                        </SelectField>
                    </div>
                    <div style={styles.fieldStyle}>
                        <DatePicker
                            hintText="When"
                            name="when"
                            onChange={that.datePickerOnChange}
                        />
                    </div>
                    <div style={styles.fieldStyle}>
                        <TextField
                            name="where"
                            hintText="Where"
                            floatingLabelText="Where"
                            onChange={that.inputOnChange}
                        />
                    </div>
                    <img alt="location" height="250px" src={process.env.PUBLIC_URL + '/map.png'} />
                    <div style={styles.fieldStyle}>
                        <TextField
                            name="minPlayers"
                            hintText="Min ammount of players"
                            floatingLabelText="Min ammount of players"
                            onChange={that.inputOnChange}
                        />
                    </div>
                    <div style={styles.fieldStyle}>
                        <TextField
                            name="maxPlayers"
                            hintText="Max ammount of players"
                            floatingLabelText="Max ammount of players"
                            onChange={that.inputOnChange}
                        />
                    </div>
                    <div style={styles.fieldStyle}>
                        <TextField
                            name="teamA"
                            hintText="Team A"
                            floatingLabelText="Team A"
                            onChange={that.inputOnChange}
                        />
                    </div>
                    <div style={styles.fieldStyle}>
                        <TextField
                            name="teamB"
                            hintText="Team B"
                            floatingLabelText="Team B"
                            onChange={that.inputOnChange}
                        />
                    </div>
                    <div style={styles.fieldStyle}>
                        <Checkbox
                            name="evenPlayers"
                            label="Should be even players?"
                            onCheck={that.checkOnChange}
                        />
                    </div>
                    <div style={styles.fieldStyle}>
                        <Checkbox
                            name="addMe"
                            label="Add me as a player in this match"
                            onCheck={that.checkOnChange}
                        />
                    </div>
                    <div style={styles.fieldStyle}>
                        <Checkbox
                            name="notifyMatch"
                            label="Notify community of this match?"
                            onCheck={that.checkOnChange}
                        />
                    </div>
                    <div style={styles.fieldStyle}>
                        <Checkbox
                            name="notifyMatchEvents"
                            label="Notify community on every event in this match?"
                            onCheck={that.checkOnChange}
                        />
                    </div>

                    {createButton()}

                </div>
            </div>
        );
    }
}

MatchFormComponent.propTypes = {
    dispatch: PropTypes.func.isRequired
}