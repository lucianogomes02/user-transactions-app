interface InputProps {
    label: string;
    inputType: string;
    placeholder: string;
}

export default function FormInput({ label, inputType, placeholder }: InputProps) {
    return (
        <section className="flex flex-col mb-4">
            <label className="mb-1 text-left text-text-primary">{label}</label>
            <input
                className="w-80 h-12 p-2 border bg-background-primary text-text-secondary border-none rounded-lg" 
                type={inputType} 
                placeholder={placeholder}
            />
        </section>
    )
}