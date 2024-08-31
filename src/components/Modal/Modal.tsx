import { IoCloseOutline } from "react-icons/io5";
import Button from "../Button/Button";

interface ModalProps {
    isOpen: boolean;
    image?: string;
    message?: string;
    onClose: () => void;
}

export default function Modal({ isOpen, image, message, onClose }: ModalProps) {
    return isOpen && (
        <section 
            className="fixed inset-0 flex items-center justify-center bg-opacity-50 backdrop-blur-sm" 
            onClick={onClose}
        >
            <section 
                className="relative flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-6 gap-5"
                onClick={(e) => e.stopPropagation()}
            >
                <IoCloseOutline 
                    className="absolute top-2 right-2 cursor-pointer"
                    onClick={onClose} 
                />
                <figure className="w-40 h-40 rounded-full flex items-center justify-center">
                    <img src={ image } alt="Sucesso" className="w-40 h-40" />
                </figure>
                <h1 className="text-3xl font-bold text-text-primary">{ message }</h1>
                <Button title="Fechar" type="submit" onClick={onClose}/>
            </section>
        </section>
    )
}