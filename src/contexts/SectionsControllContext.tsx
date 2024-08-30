import { createContext, useState } from "react"

interface SectionsControllContextType {
    showRegisterSection: boolean;
    setShowRegisterSection: (value: boolean) => void;
  }

export const SectionsControllContext = createContext<SectionsControllContextType | undefined>(undefined);

export const SectionsControllProvider = ({ children }: { children: React.ReactNode }) => { 
    const [showRegisterSection, setShowRegisterSection] = useState(false);

    return (
        <SectionsControllContext.Provider value={{ showRegisterSection, setShowRegisterSection }}>
            {children}
        </SectionsControllContext.Provider>
    )
}