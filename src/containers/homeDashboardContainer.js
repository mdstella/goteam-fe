import { connect } from 'react-redux';
import HomeDashboardComponent from '../components/dashboards/homeDashboardComponent';
import { generateTeams } from '../actions/actions'

const mapStateToProps = function (state) {
    return {
        myMatches: state.matches.myMatches === undefined ? [] : state.matches.myMatches,
        myCommunitiesStats: state.stats.myCommunitiesStats === undefined ? [] : state.stats.myCommunitiesStats,
        myGlobalStats: state.stats.myGlobalStats === undefined ? [] : state.stats.myGlobalStats,
        team1: state.matches.team1 === undefined ? [] : state.matches.team1,
        team2: state.matches.team2 === undefined ? [] : state.matches.team2,
    }
}

const mapDispatchToProps = dispatch => ({
    generateTeams: () => {
        dispatch(generateTeams())
    }
})

export const HomeDashboard = connect(mapStateToProps, mapDispatchToProps)(HomeDashboardComponent)