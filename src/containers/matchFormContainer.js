import { connect } from 'react-redux'
import MatchFormComponent from '../components/forms/matchFormComponent'
import { newMatch } from '../actions/actions'

const mapDispatchToProps = dispatch => ({
    dispatch: (match) => {
        dispatch(newMatch(match))
    }
})

export const MatchForm = connect(() => ({}), mapDispatchToProps)(MatchFormComponent)