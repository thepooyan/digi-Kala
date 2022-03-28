const INITIAL_STATE = [
    {username:'pooyan',password:'1234',admin:true, nickname:'پویان سلمانی'},
    {username:'sanee',password:'4321',admin:false, nickname:'محبوبه میرصانعی'}
]

const usersReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'NEW_USER':
            return [...state,{username:action.username, password: action.password, admin:action.admin, nickname:action.nickname}]
        default:
            return state
    }
}
export default usersReducer