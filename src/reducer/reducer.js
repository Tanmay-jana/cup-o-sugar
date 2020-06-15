const addState = {
    sideNav: false,
    topNav: "",
    link: "https://apps.apple.com/us/app/cup-o-sugar-share-request/id1366127652"
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

    if(action.type === "CHANGE_LINK") {
        return {
            ...state,
            link: action.payload
        }
    }
    
    return state;
}

export default reducer;