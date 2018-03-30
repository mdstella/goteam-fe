import { connect } from 'react-redux';
import CommunityDashboardComponent from '../components/dashboards/communityDashboardComponent';
import {
    searchCommunities,
    leaveCommunity,
    leaveCommunitySearch,
    requesCommunityAccess,
    communityMembers,
    communityMembersRequest,
    communityNextMatches
} from '../actions/actions'


const mapStateToProps = function (state) {
    return {
        myCommunities: state.communities.myCommunities === undefined ? [] : state.communities.myCommunities,
        searchResult: state.communities.searchResult === undefined ? [] : state.communities.searchResult,
    }
}

const mapDispatchToProps = dispatch => ({
    searchCommunities: (searchValue) => {
        dispatch(searchCommunities(searchValue))
    },
    leaveCommunity: (communityId) => {
        dispatch(leaveCommunity(communityId))
    },
    leaveNotification: (communityId) => {
        dispatch(leaveCommunitySearch(communityId))
    },
    requestAccessNotification: (communityId) => {
        dispatch(requesCommunityAccess(communityId))
    },
    communityNextMatches: (communityId) => {
        dispatch(communityNextMatches(communityId))
    },
    communityMembers: (communityId) => {
        dispatch(communityMembers(communityId))
    },
    communityMembersRequest: (communityId) => {
        dispatch(communityMembersRequest(communityId))
    }
})

export const CommunityDashboard = connect(mapStateToProps, mapDispatchToProps)(CommunityDashboardComponent)