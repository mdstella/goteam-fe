import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

import {
    RaisedButton,
} from 'material-ui';

export default class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    getGlobalStats() {
        return [
            {
                games: 200,
                won: 150,
                lost: 35,
                tied: 15,
                ranking: 150,
                status: '+25',
            }
        ]
    }

    getCommunitiesStats() {
        return [
            {
                name: 'GlbRed',
                games: 150,
                won: 100,
                lost: 35,
                tied: 15,
                ranking: 4,
                status: '-2',
            },
            {
                name: 'ChacraRed',
                games: 100,
                won: 100,
                lost: 0,
                tied: 0,
                ranking: 1,
                status: '-',
            }
        ]
    }

    dispatchActions() {
        this.props.dispatchGlobalStats(this.getGlobalStats());
        this.props.dispatchCommunityStats(this.getCommunitiesStats());
        this.props.dispatchMatchesHistory();
    }

    render() {
        return (
            <div>
                <RaisedButton
                    label="Login"
                    primary={true}
                    style={{
                        marginTop: '12px',
                        marginLeft: '50%',
                    }}
                    containerElement={<Link to={`/home`} />}
                    onClick={this.dispatchActions()}
                />
            </div>
        );
    }
}

LoginComponent.propTypes = {
    dispatchGlobalStats: PropTypes.func.isRequired,
    dispatchCommunityStats: PropTypes.func.isRequired,
}