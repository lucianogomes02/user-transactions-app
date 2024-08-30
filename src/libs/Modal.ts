import { useModal } from "../hooks/useModal";

export const ShowErrorModal = (message: string) => {
    const { setIsOpen } = useModal();
    setIsOpen(true, "src/assets/modal-error.svg", message);
}

export const ShowSuccessModal = (message: string) => {
    const { setIsOpen } = useModal();
    setIsOpen(true, "src/assets/modal-success.svg", message);
}