import { connect } from 'react-redux';
import MatchDashboardComponent from '../components/dashboards/matchDashboardComponent';
import { generateTeams } from '../actions/actions'


const mapStateToProps = function (state) {
    return {
        myMatches: state.matches.myMatches === undefined ? [] : state.matches.myMatches,
        myMatchesHistory: state.matches.myMatchesHistory === undefined ? [] : state.matches.myMatchesHistory,
        team1: state.matches.team1 === undefined ? [] : state.matches.team1,
        team2: state.matches.team2 === undefined ? [] : state.matches.team2,
    }
}

const mapDispatchToProps = dispatch => ({
    generateTeams: () => {
        dispatch(generateTeams())
    }
})

export const MatchDashboard = connect(mapStateToProps, mapDispatchToProps)(MatchDashboardComponent)