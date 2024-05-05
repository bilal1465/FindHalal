const nameReducer = (state = 0, action) => {
    switch (action.type){
        case "SEND":
            return state = action.payload
        default:
            return state;
    }
}

export default nameReducer;