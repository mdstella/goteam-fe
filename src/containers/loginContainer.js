import { connect } from 'react-redux'
import LoginComponent from '../components/forms/loginComponent'
import {
    globalStatsReceived,
    communitiesStatsReceived,
    matchesHistory
} from '../actions/actions'


const mapDispatchToProps = dispatch => ({
    dispatchGlobalStats: (stats) => {
        dispatch(globalStatsReceived(stats))
    },
    dispatchCommunityStats: (stats) => {
        dispatch(communitiesStatsReceived(stats))
    },
    dispatchMatchesHistory: () => {
        dispatch(matchesHistory())
    }
})

export const Login = connect(() => ({}), mapDispatchToProps)(LoginComponent)