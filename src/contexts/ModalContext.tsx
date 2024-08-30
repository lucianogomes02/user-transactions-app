import { createContext, useState } from "react";

interface ModalContextType {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export const ModalContext = createContext<ModalContextType | null>(null);

export const ModalContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <ModalContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </ModalContext.Provider>
    )
}