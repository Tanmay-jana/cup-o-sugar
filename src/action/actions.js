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
        type: "CLOSE_SIDE_NAV",
        payload: value
    })
}