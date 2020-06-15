export const openSideNav = () => dispatch => {
    dispatch({
        type: "OPEN_SIDE_NAV",
        payload: true
    })
}

export const closeSideNav = () => dispatch => {
    dispatch({
        type: "CLOSE_SIDE_NAV",
        payload: false
    })
}

export const topNavOption = (value) => dispatch => {
    dispatch({
        type: "TOP_NAV",
        payload: value
    })
}

export const changeLink = (value) => dispatch => {
    dispatch({
        type: "CHANGE_LINK",
        payload: value
    })
}