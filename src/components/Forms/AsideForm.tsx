import FormInput from "../../components/FormInput/FormInput";

export default function AsideForm() {
    return (
        <aside className="w-full lg:w-96 bg-white flex flex-col items-center justify-center lg:fixed lg:left-0 lg:top-0 lg:h-full p-4">
            <figure className="flex items-center justify-center mb-4">
                <img 
                    src="src/assets/logo.svg" 
                    alt="Logo da empresa"
                    className="w-24"
                />
                <figcaption className="text-3xl font-bold text-text-primary">
                    Log in
                </figcaption>
            </figure>
            <section className="text-center w-full">
                <form className="flex flex-col items-center">
                    <FormInput label="E-mail" inputType="email" placeholder="exemplo@gmail.com" />
                    <FormInput label="Senha" inputType="password" placeholder="********" />
                </form>
            </section>
        </aside>
    )
}