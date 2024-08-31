import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import FormInput from "../FormInput/FormInput";
import Checkbox from "../Checkbox/Checkbox";
import Button from "../Button/Button";
import AuthFormProps from "../../types/AuthFormProps";
import { useModal } from "../../hooks/useModal";
import { validateEmail, validateCPF, formatCPF } from "../../libs/validators";

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
    confirm_password: string;
}

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
        confirm_password: ""
    });
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isCpfValid, setIsCpfValid] = useState(true);
    const [isPasswordMatch, setIsPasswordMatch] = useState(true);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    useEffect(() => {
        if (formType === "register") {
            const passwordsMatch = formValues.password === formValues.confirm_password;
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
            if (formType === "register") {
                if (inputName === "password" || inputName === "confirm_password") {
                    setIsPasswordMatch(updatedValues.password === updatedValues.confirm_password);
                }
                if (inputName === "cpf") {
                    const formattedCpf = formatCPF(value);
                    setIsCpfValid(validateCPF(formattedCpf));
                    updatedValues.cpf = formattedCpf;
                }
            }

            return updatedValues;
        });
    };

    const handleBlur = () => {
        setIsEmailValid(validateEmail(formValues.email));
        if (formType === "register") {
            setIsCpfValid(validateCPF(formValues.cpf));
        }
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
            confirm_password: ""
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
                            (formType === "register" && name === "confirm_password" && !isPasswordMatch) ? 'red' :
                            undefined
                    }}
                />
            );
        })
    );

    return (
        <aside className="min-w-fit min-h-full lg:w-96 bg-white flex flex-col items-center justify-center lg:fixed lg:left-0 lg:top-0 p-4">
            <section className="flex flex-col items-center w-full pb-2">
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