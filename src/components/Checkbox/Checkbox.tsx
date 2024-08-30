export default function Checkbox() {
    return (
        <section className="flex items-center mb-4 gap-1">
            <input 
                type="checkbox" 
                className="checkbox-custom"
            />
            <label className="text-text-primary">Lembrar-me</label>
        </section>
    )
}