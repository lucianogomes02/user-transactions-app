import { createContext, useState } from "react"

interface AuthContextType {
    getAuthenticatedUser: string;
    setAuthenticatedUser: (user: string) => void;
  }

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => { 
    const [getAuthenticatedUser, setAuthenticatedUser] = useState("test");

    return (
        <AuthContext.Provider value={{ getAuthenticatedUser, setAuthenticatedUser }}>
            {children}
        </AuthContext.Provider>
    )
}