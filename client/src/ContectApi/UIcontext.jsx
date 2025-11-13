import { useContext, createContext } from "react";
import { useState } from "react";
const LoginContext = createContext();



export const LoginUiPopUp = ({ children }) => {
    const [showLoginPopUp, setShowLoginPopUp] = useState(false)
    const [showSignUpPopUp, setShowSignUpPopUp] = useState(false)


    

    const openLogin = () => {
        setShowLoginPopUp(true)
        setShowSignUpPopUp(false)
    }
    const openSignUp = () => {
        setShowLoginPopUp(false)
        setShowSignUpPopUp(true)

    }
    const closeAll = () => {
        setShowLoginPopUp(false)
        setShowSignUpPopUp(false)
    }
    return (
        <LoginContext.Provider value={{ showLoginPopUp,showSignUpPopUp, setShowLoginPopUp,openLogin,openSignUp,closeAll }}>
            {children}
        </LoginContext.Provider>

    )
}

const useLogin = () => useContext(LoginContext)
export default useLogin;