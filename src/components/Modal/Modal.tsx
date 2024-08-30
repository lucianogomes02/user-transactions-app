import { IoCloseOutline } from "react-icons/io5";
import Button from "../Button/Button";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function Modal({ isOpen, onClose }: ModalProps) {
    return isOpen && (
        <section 
            className="fixed inset-0 flex items-center justify-center bg-opacity-50 backdrop-blur-sm" 
            onClick={onClose}
        >
            <section 
                className="relative flex flex-col items-center justify-center w-1/4 h-96 bg-white shadow-lg rounded-lg p-6 gap-5"
                onClick={(e) => e.stopPropagation()}
            >
                <IoCloseOutline 
                    className="absolute top-2 right-2 cursor-pointer"
                    onClick={onClose} 
                />
                <figure className="w-40 h-40 rounded-full flex items-center justify-center">
                    <img src="src/assets/modal-success.svg" alt="Sucesso" className="w-40 h-40" />
                </figure>
                <h1 className="text-3xl font-bold text-text-primary">Usuário cadastrado com sucesso!</h1>
                <Button title="Fechar" type="submit" onClick={onClose}/>
            </section>
        </section>
    )
}