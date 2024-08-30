import { createContext, useState } from "react";

interface ModalContextType {
    isOpen: boolean;
    image?: string;
    message?: string;
    setIsOpen: (
        isOpen: boolean,
        image?: string,
        message?: string,
    ) => void;
}

export const ModalContext = createContext<ModalContextType | null>(null);

export const ModalContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [modalState, setModalState] = useState<{ isOpen: boolean; image?: string; message?: string }>({
        isOpen: false,
        image: undefined,
        message: undefined,
    });

    const setIsOpen = (isOpen: boolean, image?: string, message?: string) => {
        setModalState({ isOpen, image, message });
    };

    return (
        <ModalContext.Provider value={{ ...modalState, setIsOpen }}>
            {children}
        </ModalContext.Provider>
    )
}