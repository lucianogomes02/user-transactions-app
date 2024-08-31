export default interface FormInputProps {
    name: string;
    label: string;
    inputType: string;
    placeholder: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    style?: object;
}