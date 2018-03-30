import { combineReducers } from "redux"
import matches from "./matches"
import stats from "./stats"
import communities from "./communities"
import communitiesDetail from "./communitiesDetail"

const goTeamStore = combineReducers({
    matches,
    stats,
    communities,
    communitiesDetail
});

export default goTeamStore