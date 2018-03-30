import * as types from '../constants/actionTypes'

export const newMatch = (match) => ({
    type: types.NEW_MATCH,
    match,
})

export const globalStatsReceived = (globalStats) => ({
    type: types.GLOBAL_STATS_RECEIVED,
    globalStats,
})

export const communitiesStatsReceived = (communitiesStats) => ({
    type: types.COMMUNITIES_STATS_RECEIVED,
    communitiesStats,
})

export const newCommunity = (communityInfo) => ({
    type: types.NEW_COMMUNITY,
    communityInfo,
})

export const searchCommunities = (searchValue) => ({
    type: types.SEARCH_COMMUNITIES,
    searchValue,
})

export const leaveCommunity = (communityId) => ({
    type: types.LEAVE_COMMUNITY,
    id: communityId,
})

export const leaveCommunitySearch = (communityId) => ({
    type: types.LEAVE_COMMUNITY_SEARCH,
    id: communityId,
})

export const requesCommunityAccess = (communityId) => ({
    type: types.REQUEST_COMMUNITY_ACCESS,
    id: communityId,
})

export const matchesHistory = () => ({
    type: types.LOAD_MATCHES_HISTORY,
})

export const communityMembers = (communityId) => ({
    type: types.COMMUNITY_MEMBERS,
    id: communityId,
})

export const communityMembersRequest = (communityId) => ({
    type: types.COMMUNITY_MEMBERS_REQUESTS,
    id: communityId,
})

export const communityNextMatches = (communityId) => ({
    type: types.COMMUNITY_NEXT_MATCHES,
    id: communityId,
})

export const denyMember = (memberId) => ({
    type: types.DENY_MEMBER,
    id: memberId,
})

export const removeMember = (memberId) => ({
    type: types.REMOVE_MEMBER,
    id: memberId,
})

export const penalizeMember = (memberId) => ({
    type: types.PENALIZE_MEMBER,
    id: memberId,
})

export const acceptMember = (memberId) => ({
    type: types.ACCEPT_MEMBER,
    id: memberId,
})

export const generateTeams = (memberId) => ({
    type: types.GENERATE_TEAMS
})
