import {SET_SELECTED_TAB} from "./tabAction"

const initialState = {
    selectedTab: ""
}

const tabReducer = (state = initialState, action: { type: any; payload: { selectedTab: any } }) => {
    switch(action.type){
        case SET_SELECTED_TAB:
            return {
                ...state,
                selectedTab: action.payload.selectedTab
            }
        default:
            return state
    }
}

export default tabReducer