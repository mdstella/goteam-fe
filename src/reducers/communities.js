import {
    NEW_COMMUNITY,
    SEARCH_COMMUNITIES,
    LEAVE_COMMUNITY,
    LEAVE_COMMUNITY_SEARCH,
    REQUEST_COMMUNITY_ACCESS
} from '../constants/actionTypes'

import {
    searchData,
} from '../mockData'

const communities = (state = [], action) => {
    switch (action.type) {
        case NEW_COMMUNITY:
            return Object.assign({}, state, {
                myCommunities: state.myCommunities === undefined ? [action.communityInfo] : state.myCommunities.concat(action.communityInfo),
            })
        case SEARCH_COMMUNITIES:
            //TODO DELETE THIS
            let clonedSearch = searchData.slice()
            return Object.assign({}, state, {
                searchResult: state.searchResult === undefined ? clonedSearch : state.searchResult.concat(clonedSearch),
            })
        case LEAVE_COMMUNITY:
            let aux = state.myCommunities.slice()
            // TODO review this when change row index to community id
            aux.splice(action.id, 1)
            return Object.assign({}, state, {
                myCommunities: aux,
            })
        case LEAVE_COMMUNITY_SEARCH:
            let aux2 = state.searchResult.slice()
            // TODO review this when change row index to community id
            aux2.splice(action.id, 1)
            return Object.assign({}, state, {
                searchResult: aux2,
            })
        case REQUEST_COMMUNITY_ACCESS:
            let aux3 = state.searchResult.slice()
            // TODO review this when change row index to community id
            aux3.splice(action.id, 1)
            return Object.assign({}, state, {
                searchResult: aux3,
            })
        default:
            return state
    }
}

export default communities