export const setUser =(user) => {
    return {
        type: 'SET_USER',
        playload:user
    }
}
export const setChats =(chat) => {
    return {
        type: 'SET_CHATS',
        playload:chat
    }
}