export default function Checkbox() {
    return (
        <section className="flex items-center mb-4">
            <input 
                type="checkbox" 
                className="w-6 h-6 mr-2"
            />
            <label className="text-text-primary">Lembrar-me</label>
        </section>
    )
}