import { ReactNode, createContext } from "react";
import { AuthValuesType } from "./types";

const defaultProvider: AuthValuesType = {
    // token: null,
    // user: null,
    // loading: true,
    // setUser: () => null,
    // setLoading: () => Boolean,
    // login: () => Promise.resolve(),
    // logout: () => Promise.resolve()
}

const AuthContext = createContext(defaultProvider)

type Props = {
    children: ReactNode
}

const AuthProvider = ({children}: Props) => {
    const values = {
       
    }

    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export {AuthContext, AuthProvider}