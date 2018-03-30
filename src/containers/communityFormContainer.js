import { connect } from 'react-redux'
import CommunityFormComponent from '../components/forms/communityFormComponent'
import { newCommunity } from '../actions/actions'

const mapDispatchToProps = dispatch => ({
    dispatch: (communityInfo) => {
        dispatch(newCommunity(communityInfo))
    }
})

export const CommunityForm = connect(() => ({}), mapDispatchToProps)(CommunityFormComponent)