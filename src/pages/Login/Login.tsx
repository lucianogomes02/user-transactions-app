import AsideForm from "../../components/Forms/AsideForm"

export default function Login() {
    return (
        <main className="min-h-screen flex flex-col lg:flex-row">
            <AsideForm />
            <section className="flex-grow flex items-center justify-center lg:ml-96 p-4">
                <figure className="flex items-center lg:items-start lg:justify-between">
                    <img 
                        src="src/assets/home-illustration.svg" 
                        alt="Ilustração Home"
                        className="w-full max-w-xs lg:max-w-2xl"
                    />
                    <figcaption className="
                        flex items-center 
                        justify-center 
                        p-4 
                        mt-4
                        lg:mt-0 lg:ml-6 
                        text-center lg:text-left
                        text-7xl font-bold
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