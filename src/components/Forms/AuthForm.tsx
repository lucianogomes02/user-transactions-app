import React from "react";
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

    const users: User[] = [];

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
            console.log(users);
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
                            />
                        ))}
                <section className="flex justify-center mt-4 mb-4 w-full gap-20 flex-wrap">
                    <Checkbox label={checkboxLabel} />
                    {showForgotPassword && 
                        <a href="#" className="text-primary-blue">Esqueceu a senha?</a>
                    }
                </section>
                <Button title={ buttonTitle } type="submit" />
                </form>
                <section className="flex justify-center mt-4 gap-2">
                    <label className="text-text-primary">{ authSectionLabel }</label>
                    <a href={ authSectionLink } className="text-primary-blue">{ authSectionLinkText }</a>
                </section>
            </section>
        </aside>
    );
}