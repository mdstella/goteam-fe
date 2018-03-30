import { connect } from 'react-redux';
import CommunityDetailDashboardComponent from '../components/dashboards/communityDetailDashboardComponent';
import {
    denyMember,
    removeMember,
    penalizeMember,
    acceptMember,
    generateTeams
} from '../actions/actions'

const mapStateToProps = function (state) {
    return {
        nextMatches: state.communitiesDetail.nextMatches === undefined ? [] : state.communitiesDetail.nextMatches,
        members: state.communitiesDetail.members === undefined ? [] : state.communitiesDetail.members,
        membersRequests: state.communitiesDetail.membersRequests === undefined ? [] : state.communitiesDetail.membersRequests,
        team1: state.matches.team1 === undefined ? [] : state.matches.team1,
        team2: state.matches.team2 === undefined ? [] : state.matches.team2,
    }
}

const mapDispatchToProps = dispatch => ({
    denyMember: (memberId) => {
        dispatch(denyMember(memberId))
    },
    removeMember: (memberId) => {
        dispatch(removeMember(memberId))
    },
    penalizeMember: (memberId) => {
        dispatch(penalizeMember(memberId))
    },
    acceptMember: (communityId) => {
        dispatch(acceptMember(communityId))
    },
    generateTeams: () => {
        dispatch(generateTeams())
    }
})

export const CommunityDetailDashboard = connect(mapStateToProps, mapDispatchToProps)(CommunityDetailDashboardComponent)