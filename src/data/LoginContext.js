import react, { useEffect, useState } from 'react'
export const LoginContext = react.createContext();

export const LoginProvider = (props) => {

    useEffect(() => {
        if (localStorage.getItem("isLoggedIn") !== "false" && isLoggedIn === false) {
            let user = (users.find(item=>{
                if (item.username===localStorage.getItem("isLoggedIn")) return item
            }))
          setIsLoggedIn(user);
        }
      }, []);

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const users = [
        {username:'pooyan',password:'1234',admin:true, nickname:'پویان سلمانی'},
        {username:'sanee',password:'4321',admin:false, nickname:'محبوبه میرصانعی'}
    ]

    const login = (username,pass) => {

        return new Promise((resolved,rejected)=>{
            let user = (users.find(item=>{
                if (item.username===username) return item
            }))
            if (!user) rejected('user not found')
            console.log(user)
            if (pass == user.password) {
                setIsLoggedIn(user)
                localStorage.setItem('isLoggedIn', user.username)
                resolved(user)
            } else {
                rejected('wrong password')
            }
        })
    }

    const logout = () => {
        setIsLoggedIn(false)
        localStorage.setItem('isLoggedIn', false)

    }

    return (
        <LoginContext.Provider value={[login,logout,isLoggedIn]}>
            {props.children}
        </LoginContext.Provider>
    )
}