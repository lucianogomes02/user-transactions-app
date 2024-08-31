import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import FormInput from "../FormInput/FormInput";
import Checkbox from "../Checkbox/Checkbox";
import Button from "../Button/Button";
import AuthFormProps from "../../types/AuthFormProps";
import { useModal } from "../../hooks/useModal";

interface User {
    name: string;
    cpf: string;
    email: string;
    password: string;
}

interface FormValues {
    name: string;
    email: string;
    cpf: string;
    password: string;
    confirmPassword: string;
}

const validateEmail = (email: string): boolean => {
    // eslint-disable-next-line no-useless-escape
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
};

const validateCPF = (cpf: string): boolean => {
    // eslint-disable-next-line no-useless-escape
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
    return cpfRegex.test(cpf);
};

const formatCPF = (value: string): string => {
    value = value.replace(/\D/g, "");
    if (value.length <= 3) return value;
    if (value.length <= 6) return `${value.slice(0, 3)}.${value.slice(3)}`;
    if (value.length <= 9) return `${value.slice(0, 3)}.${value.slice(3, 6)}.${value.slice(6)}`;
    return `${value.slice(0, 3)}.${value.slice(3, 6)}.${value.slice(6, 9)}-${value.slice(9, 11)}`;
};

const AuthForm = ({
    title, formInputs, checkboxLabel, 
    buttonTitle, authSectionLabel, 
    authSectionLink, authSectionLinkText,
    showForgotPassword, formType
}: AuthFormProps) => {
    const { setIsOpen } = useModal();

    const [formValues, setFormValues] = useState<FormValues>({
        name: "",
        email: "",
        cpf: "",
        password: "",
        confirmPassword: ""
    });
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isCpfValid, setIsCpfValid] = useState(true);
    const [isPasswordMatch, setIsPasswordMatch] = useState(true);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    useEffect(() => {
        if (formType === "register") {
            const passwordsMatch = formValues.password === formValues.confirmPassword;
            setIsPasswordMatch(passwordsMatch);
            setIsButtonDisabled(
                !passwordsMatch ||
                formValues.password === "" ||
                !isEmailValid ||
                !isCpfValid
            );
        } else {
            setIsButtonDisabled(!isEmailValid || !isCpfValid);
        }
    }, [formValues, formType, isEmailValid, isCpfValid]);

    const handleChange = (inputName: string, event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        setFormValues(prev => {
            const updatedValues = { ...prev, [inputName]: value };

            if (inputName === "email") {
                setIsEmailValid(validateEmail(value));
            }
            if (inputName === "cpf") {
                const formattedCpf = formatCPF(value);
                setIsCpfValid(validateCPF(formattedCpf));
                updatedValues.cpf = formattedCpf;
            }
            if (formType === "register") {
                if (inputName === "password" || inputName === "confirmPassword") {
                    setIsPasswordMatch(updatedValues.password === updatedValues.confirmPassword);
                }
            }

            return updatedValues;
        });
    };

    const handleBlur = () => {
        setIsEmailValid(validateEmail(formValues.email));
        setIsCpfValid(validateCPF(formValues.cpf));
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        if (formType === "register") {
            handleRegister();
        } else if (formType === "login") {
            handleLogin();
        }
    };

    const handleRegister = () => {
        try {
            const user: User = {
                name: formValues.name,
                cpf: formValues.cpf,
                email: formValues.email,
                password: formValues.password,
            };
            console.log(user);
            setIsOpen(true, "src/assets/modal-success.svg", "Cadastro realizado com sucesso!");
        } catch (error: unknown) {
            setIsOpen(true, "src/assets/modal-error.svg", (error as Error).message);
        } finally {
            resetForm();
        }
    };

    const handleLogin = () => {
        console.log(formValues.email, formValues.password);
        resetForm();
    };

    const resetForm = () => {
        setFormValues({
            name: "",
            email: "",
            cpf: "",
            password: "",
            confirmPassword: ""
        });
    }

    const renderFormInputs = () => (
        formInputs.map((inputProps, index) => {
            const name = inputProps.name.toLowerCase() as keyof FormValues;
            return (
                <FormInput
                    key={index}
                    label={inputProps.label}
                    inputType={inputProps.inputType}
                    placeholder={inputProps.placeholder}
                    name={name}
                    value={name === "cpf" ? formValues.cpf : formValues[name] || ""}
                    onChange={(event) => handleChange(name, event)}
                    onBlur={["email", "cpf"].includes(name) ? handleBlur : undefined}
                    style={{
                        borderColor: (name === "email" && !isEmailValid) ? 'red' :
                            (name === "cpf" && !isCpfValid) ? 'red' :
                            (formType === "register" && name === "confirmPassword" && !isPasswordMatch) ? 'red' :
                            undefined
                    }}
                />
            );
        })
    );

    return (
        <aside className="max-w-full lg:w-96 bg-white flex flex-col items-center justify-center lg:fixed lg:left-0 lg:top-0 lg:h-full p-4">
            <section className="flex flex-col items-center w-full pb-8">
                <figure className="flex items-center justify-center mb-4">
                    <img src="src/assets/logo.svg" alt="Logo da empresa" className="w-24" />
                </figure>
                <figcaption className="text-3xl font-bold text-text-primary">{title}</figcaption>
            </section>
            <section className="text-center w-full">
                <form className="flex flex-col items-center" onSubmit={handleSubmit}>
                    {renderFormInputs()}
                    <section className="flex justify-center mt-4 mb-4 w-full gap-20 flex-wrap">
                        <Checkbox label={checkboxLabel} />
                        {showForgotPassword && <a href="#" className="text-primary-blue">Esqueceu a senha?</a>}
                    </section>
                    <Button title={buttonTitle} type="submit" disabled={isButtonDisabled} />
                </form>
                <section className="flex justify-center mt-4 gap-2">
                    <label className="text-text-primary">{authSectionLabel}</label>
                    <a href={authSectionLink} className="text-primary-blue">{authSectionLinkText}</a>
                </section>
            </section>
        </aside>
    );
};

export default AuthForm;