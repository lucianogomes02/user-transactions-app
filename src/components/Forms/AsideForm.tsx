import FormInput from "../../components/FormInput/FormInput";
import Checkbox from "../../components/Checkbox/Checkbox";
import Button from "../Button/Button";

export default function AsideForm() {
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
                    Entrar
                </figcaption>
            </section>
            <section className="text-center w-full">
                <form className="flex flex-col items-center">
                    <FormInput label="E-mail" inputType="email" placeholder="exemplo@gmail.com" />
                    <FormInput label="Senha" inputType="password" placeholder="********" />
                </form>
                <section className="flex justify-center mt-4 mb-4 w-full gap-10">
                    <Checkbox />
                    <a href="#" className="text-primary-blue">Esqueceu a senha?</a>
                </section>
                <Button />
                <section className="flex justify-center mt-4 gap-2">
                    <label className="text-text-primary">Não tem uma conta?</label>
                    <a href="#" className="text-primary-blue">Cadastre-se</a>
                </section>
            </section>
        </aside>
    )
}