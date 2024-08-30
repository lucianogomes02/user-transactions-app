import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useSection must be used within a SectionsControllProvider");
    }
    return context;
}