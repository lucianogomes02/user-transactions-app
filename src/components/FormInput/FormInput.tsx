import FormInputProps from "../../types/FormInputProps"

export default function FormInput({ label, inputType, placeholder }: FormInputProps) {
    return (
        <section className="flex flex-col mb-4">
            <label className="mb-1 text-left text-text-primary">{label}</label>
            <input
                className="
                    w-80 h-12 p-2 
                    border shadow-sm
                    focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                     bg-background-primary text-text-secondary rounded-lg" 
                type={inputType} 
                placeholder={placeholder}
            />
        </section>
    )
}