import {
    COMMUNITY_MEMBERS,
    COMMUNITY_MEMBERS_REQUESTS,
    COMMUNITY_NEXT_MATCHES,
    DENY_MEMBER,
    REMOVE_MEMBER,
    PENALIZE_MEMBER,
    ACCEPT_MEMBER
} from '../constants/actionTypes'

import {
    matchesData,
    membersData,
    membersRequestsData,
} from '../mockData'

const communitiesDetail = (state = [], action) => {
    switch (action.type) {
        case COMMUNITY_MEMBERS:
            // TODO REMOVE THIS
            let clonedMembers = membersData.slice()
            return Object.assign({}, state, {
                members: state.members === undefined ? clonedMembers : state.members.concat(clonedMembers),
            })
        case COMMUNITY_MEMBERS_REQUESTS:
            //TODO DELETE THIS
            let clonedMembersRequests = membersRequestsData.slice()
            return Object.assign({}, state, {
                membersRequests: state.membersRequests === undefined ? clonedMembersRequests : state.membersRequests.concat(clonedMembersRequests),
            })
        case COMMUNITY_NEXT_MATCHES:
            var data = [];

            for (var i = 0; i < matchesData.length; i++) {
                if (action.id === matchesData[i].community) {
                    data.push(matchesData[i])
                }
            }

            return Object.assign({}, state, {
                nextMatches: data,
            })
        case DENY_MEMBER:
            var denyMember = state.membersRequests.slice()
            // TODO review this when change row index to community id
            denyMember.splice(action.id, 1)
            return Object.assign({}, state, {
                membersRequests: denyMember,
            })
        case REMOVE_MEMBER:
            var removeMember = state.members.slice()
            // TODO review this when change row index to community id
            removeMember.splice(action.id, 1)
            return Object.assign({}, state, {
                members: removeMember,
            })
        case PENALIZE_MEMBER:
            var penalizeMember = state.members.slice()
            // TODO review this when change row index to community id
            penalizeMember[action.id].ranking++
            return Object.assign({}, state, {
                members: penalizeMember,
            })
        case ACCEPT_MEMBER:
            var acceptMemberRequest = state.membersRequests.slice()
            var acceptMember = state.members.slice()
            // TODO review this when change row index to community id
            var memberName = acceptMemberRequest[action.id].name
            acceptMember.push({
                name: memberName,
                games: 0,
                won: 0,
                lost: 0,
                tied: 0,
                // we need the last ranking here
                ranking: 100,
                status: '-',

            })
            acceptMemberRequest.splice(action.id, 1)

            return Object.assign({}, state, {
                members: acceptMember,
                membersRequests: acceptMemberRequest,
            })
        default:
            return state
    }
}

export default communitiesDetail