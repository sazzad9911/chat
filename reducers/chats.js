let initialState =null;
const chats=(state=initialState,action)=>{
    if(action.type=='SET_CHATS'){
        return state=action.playload;
    }
    return state
}
export default chats