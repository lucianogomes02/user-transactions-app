import AsideForm from "../../components/Forms/AuthForm"

export default function SignIn() {
    return (
        <main className="min-h-screen flex flex-col lg:flex-row">
            <AsideForm 
                title="Cadastre-se"
                formInputs={[
                    { name: "name", label: "Nome", inputType: "text", placeholder: "Digite seu nome completo" },
                    { name: "cpf", label: "CPF", inputType: "text", placeholder: "Digite seu CPF" },
                    { name: "email", label: "E-mail", inputType: "email", placeholder: "Digite seu e-mail" },
                    { name: "password", label: "Senha", inputType: "password", placeholder: "Digite sua senha" },
                    { name: "passwordConfirmation", label: "Confirme sua senha", inputType: "password", placeholder: "Digite sua senha novamente" }
                ]}
                checkboxLabel="Concordo com nossos Termos de Uso e Política de Privacidade."
                buttonTitle="Cadastrar"
                authSectionLabel="Já tem uma conta?"
                authSectionLink="/login"
                authSectionLinkText="Faça login"
                showForgotPassword={false}
                formType="register"
            />
            <section className="flex-grow flex items-center justify-center lg:ml-72 p-4">
                <figure className="flex items-center lg:items-start lg:justify-between">
                    <img 
                        src="src/assets/signin-illustration.svg" 
                        alt="Ilustração Home"
                        className="w-full max-w-xs lg:max-w-lg md:max-w-xs sm:max-w-20"
                    />
                    <figcaption className="
                        flex items-center 
                        justify-center 
                        p-4 
                        mt-4
                        lg:mt-0 lg:ml-6 
                        text-balance lg:text-left
                        lg:text-5xl md:text-4xl
                        font-bold
                        text-primary-blue
                        w-auto leading-tight"
                    >
                        Faça transações e administre suas carteiras.
                    </figcaption>
                </figure>
            </section>
        </main>
    )
}