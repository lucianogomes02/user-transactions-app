import FormInput from "../FormInput/FormInput";
import Checkbox from "../Checkbox/Checkbox";
import Button from "../Button/Button";
import AsideFormProps from "../../types/AsideFormProps";


export default function AsideForm({ 
    title, formInputs, checkboxLabel, 
    buttonTitle, authSectionLabel, 
    authSectionLink, authSectionLinkText,
    showForgotPassword
}: AsideFormProps) {
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
                <form className="flex flex-col items-center">
                {formInputs.map((inputProps, index) => (
                        <FormInput 
                            key={index}
                            label={inputProps.label}
                            inputType={inputProps.inputType}
                            placeholder={inputProps.placeholder}
                        />
                    ))}
                </form>
                <section className="flex justify-center mt-4 mb-4 w-full gap-20 flex-wrap">
                    <Checkbox label={checkboxLabel} />
                    {showForgotPassword && 
                        <a href="#" className="text-primary-blue">Esqueceu a senha?</a>
                    }
                </section>
                <Button title={ buttonTitle } />
                <section className="flex justify-center mt-4 gap-2">
                    <label className="text-text-primary">{ authSectionLabel }</label>
                    <a href={ authSectionLink } className="text-primary-blue">{ authSectionLinkText }</a>
                </section>
            </section>
        </aside>
    )
}