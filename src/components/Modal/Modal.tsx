import { IoCloseOutline } from "react-icons/io5";
import Button from "../Button/Button";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function Modal({ isOpen, onClose }: ModalProps) {
    return isOpen && (
        <section className="fixed inset-0 bg-opacity-0 backdrop-blur-sm">
            <IoCloseOutline className="cursor-pointer" onClick={onClose} />
            <section className="
                    flex flex-col 
                    items-center 
                    justify-center 
                    w-1/4 h-96 bg-white
                    shadow-lg rounded-lg
                    p-6
                    gap-5
                ">
                <figure className="w-40 h-40 rounded-full flex items-center justify-center">
                    <img src="src/assets/modal-success.svg" alt="Sucesso" className="w-40 h-40" />
                </figure>
                <h1 className="text-3xl font-bold text-text-primary">Usuário cadastrado com sucesso!</h1>
                <Button title="Fechar"/>
            </section>
        </section>
    )
}