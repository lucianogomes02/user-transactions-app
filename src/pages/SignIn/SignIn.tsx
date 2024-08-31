import AuthForm from "../../components/Forms/AuthForm"
import AuthPagesFigure from "../../components/AuthPagesFigure/AuthPagesFigure"

export default function SignIn() {
    return (
        <main className="min-h-screen flex flex-col lg:flex-row">
            <AuthForm 
                title="Cadastre-se"
                formInputs={[
                    { name: "name", label: "Nome", inputType: "text", placeholder: "Digite seu nome completo" },
                    { name: "cpf", label: "CPF", inputType: "text", placeholder: "Digite seu CPF" },
                    { name: "email", label: "E-mail", inputType: "email", placeholder: "Digite seu e-mail" },
                    { name: "password", label: "Senha", inputType: "password", placeholder: "Digite sua senha" },
                    { name: "confirm_password", label: "Confirme sua senha", inputType: "password", placeholder: "Digite sua senha novamente" }
                ]}
                checkboxLabel="Concordo com nossos Termos de Uso e Política de Privacidade."
                buttonTitle="Cadastrar"
                authSectionLabel="Já tem uma conta?"
                authSectionLink="/login"
                authSectionLinkText="Faça login"
                showForgotPassword={false}
                formType="register"
            />
            <section className="flex-grow flex items-center justify-center lg:ml-80 p-4">
                <AuthPagesFigure 
                    label="Faça transações e administre suas carteiras."
                    figureSrc="/src/assets/signin-illustration.svg"
                />
            </section>
        </main>
    )
}