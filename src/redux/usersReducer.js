const INITIAL_STATE = [
    {username:'pooyan',password:'1234',admin:true, nickname:'پویان سلمانی'},
    {username:'sanee',password:'4321',admin:false, nickname:'محبوبه میرصانعی'}
]

const usersReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state
    }
}
export default usersReducer