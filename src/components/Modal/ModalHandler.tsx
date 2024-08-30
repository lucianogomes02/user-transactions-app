import Modal from "./Modal";
import { useModal } from "../../hooks/useModal";

export default function ModalHandler() {
    const { isOpen, setIsOpen } = useModal();

    return (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    )
}