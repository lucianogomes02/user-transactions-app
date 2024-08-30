import { useContext } from "react"
import { SectionsControllContext } from "../contexts/SectionsControllContext"

export const useSection = () => {
    const context = useContext(SectionsControllContext);
    if (!context) {
        throw new Error("useSection must be used within a SectionsControllProvider");
    }
    return context;
}