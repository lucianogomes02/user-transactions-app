import Modal from "./Modal";
import { useModal } from "../../hooks/useModal";

export default function ModalHandler() {
    const { isOpen, image, message, setIsOpen } = useModal();

    return (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} image={image} message={message} />
    );
}