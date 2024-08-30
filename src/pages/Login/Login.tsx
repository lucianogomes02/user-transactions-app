import AsideForm from "../../components/Forms/AsideForm"

export default function Login() {
    return (
        <main className="min-h-screen flex flex-col lg:flex-row">
            <AsideForm
                title="Faça seu login"
                formInputs={[
                    { label: "E-mail", inputType: "email", placeholder: "Digite seu e-mail" },
                    { label: "Senha", inputType: "password", placeholder: "Digite sua senha" }
                ]}
                checkboxLabel="Lembrar-me"
                buttonTitle="Entrar"
            />
            <section className="flex-grow flex items-center justify-center lg:ml-96 p-4">
                <figure className="flex items-center lg:items-start lg:justify-between">
                    <img 
                        src="src/assets/home-illustration.svg" 
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
                        Facilitando sua gestão financeira.
                    </figcaption>
                </figure>
            </section>
        </main>
    )
}