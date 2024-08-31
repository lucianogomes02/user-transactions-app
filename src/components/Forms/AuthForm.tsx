import { useState, useEffect } from "react";
import FormInput from "../FormInput/FormInput";
import Checkbox from "../Checkbox/Checkbox";
import Button from "../Button/Button";
import AsideFormProps from "../../types/AuthFormProps";
import { useModal } from "../../hooks/useModal";

interface User {
    name: string;
    cpf: string;
    email: string;
    password: string;
}

export default function AsideForm({ 
    title, formInputs, checkboxLabel, 
    buttonTitle, authSectionLabel, 
    authSectionLink, authSectionLinkText,
    showForgotPassword, formType
}: AsideFormProps) {
    const { setIsOpen } = useModal();

    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isCpfValid, setIsCpfValid] = useState(true);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isPasswordMatch, setIsPasswordMatch] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    useEffect(() => {
        if (formType === "register") {
            const passwordsMatch = password === confirmPassword;
            setIsPasswordMatch(passwordsMatch);
            setIsButtonDisabled(!passwordsMatch || password === "" || !isEmailValid || !isCpfValid);
        } else {
            setIsButtonDisabled(!isEmailValid || !isCpfValid);
        }
    }, [password, confirmPassword, formType, isEmailValid, isCpfValid]);

    const users: User[] = [];

    const checkPasswordMatch = (inputName: string, event: React.ChangeEvent<HTMLInputElement>) => {
        const fieldValue: string = event.target.value;
        if (formType === "register") {
            if (inputName === "password") {
                setPassword(fieldValue);
            }
            if (inputName === "confirm_password") {
                setConfirmPassword(fieldValue);
            }
        }
    }

    const validateEmail = () => {
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return emailRegex.test(email);
    }

    const validateCPF = (cpf: string) => { 
        const cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
        return cpfRegex.test(cpf);
    }

    const formatCPF = (value: string) => {
        value = value.replace(/\D/g, "");
        if (value.length <= 3) return value;
        if (value.length <= 6) return `${value.slice(0, 3)}.${value.slice(3)}`;
        if (value.length <= 9) return `${value.slice(0, 3)}.${value.slice(3, 6)}.${value.slice(6)}`;
        return `${value.slice(0, 3)}.${value.slice(3, 6)}.${value.slice(6, 9)}-${value.slice(9, 11)}`;
    }

    const handleRegister = (event: React.FormEvent) => {
        try {
            event.preventDefault();
            const form = event.target as HTMLFormElement;
            const formData = new FormData(form);
            const user = {
                name: formData.get('name') as string,
                cpf: formData.get('cpf') as string,
                email: formData.get('email') as string,
                password: formData.get('password') as string,
            }
            users.push(user);
            setIsOpen(true, "src/assets/modal-success.svg", "Cadastro realizado com sucesso!");
        } catch (error: unknown | Error) {
            setIsOpen(true, "src/assets/modal-success.svg", error as string);
        } finally {
            const form = event.target as HTMLFormElement;
            form.reset();
        }
    }

    const handleLogin = (event: React.FormEvent) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        
        const formData = new FormData(form);
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
        console.log(email);
        console.log(password);
        form.reset();
    }

    const handleSubmit = (event: React.FormEvent) => {
        if (formType === "register") {
            handleRegister(event);
        } else if (formType === "login") {
            handleLogin(event);
        }
    }

    const handleChange = (inputName: string, event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (inputName === "email") {
            setEmail(value);
            setIsEmailValid(validateEmail());
        } else if (inputName === "cpf") {
            const formattedCpf = formatCPF(value);
            setCpf(formattedCpf);
            setIsCpfValid(validateCPF(formattedCpf));
        }
        checkPasswordMatch(inputName, event);
    }

    const handleBlur = () => {
        setIsEmailValid(validateEmail());
        setIsCpfValid(validateCPF(cpf));
    }

    return (
        <aside className="max-w-full lg:w-96 bg-white flex flex-col items-center justify-center lg:fixed lg:left-0 lg:top-0 lg:h-full p-4">
            <section className="flex flex-col items-center w-full pb-8">
                <figure className="flex items-center justify-center mb-4">
                    <img 
                        src="src/assets/logo.svg"
                        alt="Logo da empresa"
                        className="w-24"
                    />
                </figure>
                <figcaption className="text-3xl font-bold text-text-primary">
                    { title }
                </figcaption>
            </section>
            <section className="text-center w-full">
                <form className="flex flex-col items-center" onSubmit={ handleSubmit }>
                    {formInputs.map((inputProps, index) => (
                        <FormInput 
                            key={index}
                            label={inputProps.label}
                            inputType={inputProps.inputType}
                            placeholder={inputProps.placeholder}
                            name={inputProps.name.toLowerCase()}
                            value={inputProps.name.toLowerCase() === "cpf" ? cpf : undefined}
                            onChange={(event) => handleChange(inputProps.name.toLowerCase(), event)}
                            onBlur={inputProps.name.toLowerCase() === "email" || inputProps.name.toLowerCase() === "cpf" ? handleBlur : undefined}
                            style={{ 
                                borderColor: (inputProps.name.toLowerCase() === "email" && !isEmailValid)
                                    ? 'red'
                                    : (inputProps.name.toLowerCase() === "cpf" && !isCpfValid)
                                    ? 'red'
                                    : (formType === "register" && inputProps.name.toLowerCase() === "confirm_password" && !isPasswordMatch)
                                    ? 'red'
                                    : undefined
                            }}
                        />
                    ))}
                    <section className="flex justify-center mt-4 mb-4 w-full gap-20 flex-wrap">
                        <Checkbox label={checkboxLabel} />
                        {showForgotPassword && 
                            <a href="#" className="text-primary-blue">Esqueceu a senha?</a>
                        }
                    </section>
                    <Button title={ buttonTitle } type="submit" disabled={formType === "register" ? isButtonDisabled : false} />
                </form>
                <section className="flex justify-center mt-4 gap-2">
                    <label className="text-text-primary">{ authSectionLabel }</label>
                    <a href={ authSectionLink } className="text-primary-blue">{ authSectionLinkText }</a>
                </section>
            </section>
        </aside>
    );
}