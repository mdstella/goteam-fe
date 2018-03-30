import {
    NEW_MATCH,
    LOAD_MATCHES_HISTORY,
    GENERATE_TEAMS
} from '../constants/actionTypes'

import {
    matchesHistoryData,
    matchPlayers
} from '../mockData'

const matches = (state = [], action) => {
    switch (action.type) {
        case NEW_MATCH:
            return Object.assign({}, state, {
                myMatches: state.myMatches === undefined ? [action.match] : state.myMatches.concat(action.match),
            })
        case LOAD_MATCHES_HISTORY:
            return Object.assign({}, state, {
                myMatchesHistory: matchesHistoryData,
            })
        case GENERATE_TEAMS:
            var index = 0
            var selected = {}
            var team1 = []
            var team2 = []
            var turn = true
            var size = 0
            var key
            while (size < 10) {
                size = 0
                index = Math.floor((Math.random() * 10))
                if (selected[index] === undefined) {
                    if (turn) {
                        team1.push(matchPlayers[index])
                    } else {
                        team2.push(matchPlayers[index])
                    }
                    selected[index] = true
                    turn = !turn
                }
                for (key in selected) {
                    if (selected.hasOwnProperty(key)) {
                        size++
                    }
                }
            }
            return Object.assign({}, state, {
                team1: team1,
                team2: team2,
            })
        default:
            return state
    }
}

export default matches