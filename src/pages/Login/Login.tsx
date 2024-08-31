import AuthForm from "../../components/Forms/AuthForm"
import AuthPagesFigure from "../../components/AuthPagesFigure/AuthPagesFigure"

export default function Login() {
    return (
        <main className="min-h-screen flex flex-col lg:flex-row">
            <AuthForm
                title="Faça seu login"
                formInputs={[
                    { name: "email", label: "E-mail", inputType: "email", placeholder: "Digite seu e-mail" },
                    { name: "password", label: "Senha", inputType: "password", placeholder: "Digite sua senha" }
                ]}
                checkboxLabel="Lembrar-me"
                buttonTitle="Entrar"
                authSectionLabel="Não tem uma conta?"
                authSectionLink="/register"
                authSectionLinkText="Cadastre-se"
                showForgotPassword={true}
                formType="login"
            />
            <section className="flex-grow flex items-center justify-center lg:ml-80">
                <AuthPagesFigure 
                    label="Facilitando a gestão de suas finanças."
                    figureSrc="/src/assets/login-illustration.svg"
                />
            </section>
        </main>
    )
}