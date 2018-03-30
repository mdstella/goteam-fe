import {
    GLOBAL_STATS_RECEIVED,
    COMMUNITIES_STATS_RECEIVED
} from '../constants/actionTypes'

const stats = (state = [], action) => {
    switch (action.type) {
        case GLOBAL_STATS_RECEIVED:
            return Object.assign({}, state, {
                myGlobalStats: action.globalStats
            })
        case COMMUNITIES_STATS_RECEIVED:
            return Object.assign({}, state, {
                myCommunitiesStats: action.communitiesStats
            })
        default:
            return state
    }
}

export default stats