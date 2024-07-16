

let initialState={
    count:0
}

//reducer function => is a function that modify states
// eg . action= {type:'add',payload:20}

function counterReducer(state=initialState,action){

    if(action.type=='counter/add'){
        return {count:state.count+1}
    }
    else if(action.type==='counter/decrease'){
        return {count:state.count-1}
    }
    return state
}


export default counterReducer