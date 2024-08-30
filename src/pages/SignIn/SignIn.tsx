import AsideForm from "../../components/Forms/AsideForm"
import { useSection } from "../../hooks/useSection";

export default function SignIn() {
    const { setShowRegisterSection } = useSection();

    setShowRegisterSection(false);

    return (
        <main className="min-h-screen flex flex-col lg:flex-row">
            <AsideForm 
                title="Cadastre-se"
                formInputs={[
                    { label: "Nome", inputType: "text", placeholder: "Digite seu nome completo" },
                    { label: "CPF", inputType: "text", placeholder: "Digite seu CPF" },
                    { label: "E-mail", inputType: "email", placeholder: "Digite seu e-mail" },
                    { label: "Senha", inputType: "password", placeholder: "Digite sua senha" },
                    { label: "Confirme sua senha", inputType: "password", placeholder: "Digite sua senha novamente" }
                ]}
                checkboxLabel="Ao se cadastrar você concorda com nossos Termos de Uso e Política de Privacidade."
                buttonTitle="Cadastrar"
            />
            <section className="flex-grow flex items-center justify-center lg:ml-96 p-4">
                <figure className="flex items-center lg:items-start lg:justify-between">
                    <img 
                        src="src/assets/signin-illustration.svg" 
                        alt="Ilustração Home"
                        className="w-full max-w-xs lg:max-w-2xl md:max-w-xs sm:max-w-44"
                    />
                    <figcaption className="
                        flex items-center 
                        justify-center 
                        p-4 
                        mt-4
                        lg:mt-0 lg:ml-6 
                        text-center lg:text-left
                        lg:text-7xl md:text-4xl
                        font-bold
                        text-primary-blue
                        w-full"
                    >
                        Faça transações e administre sua(s) carteiras.
                    </figcaption>
                </figure>
            </section>
        </main>
    )
}