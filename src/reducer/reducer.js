const addState = {
    sideNav: false,
    topNav: ""
};

const reducer = (state = addState, action) => {

    if(action.type === "OPEN_SIDE_NAV") {
        return {
            ...state,
            sideNav: action.payload
        }
    }

    if(action.type === "CLOSE_SIDE_NAV") {
        return {
            ...state,
            sideNav: action.payload
        }
    }

    if(action.type === "TOP_NAV") {
        return {
            ...state,
            topNav: action.payload
        }
    }
    
    return state;
}

export default reducer;