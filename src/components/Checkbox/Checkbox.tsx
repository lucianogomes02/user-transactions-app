interface CheckboxProps {
    label: string;
}

export default function Checkbox({ label }: CheckboxProps) {
    return (
        <section className="flex items-center mb-4 gap-1">
            <input 
                type="checkbox" 
                className="checkbox-custom"
            />
            <label className="text-text-primary">{ label }</label>
        </section>
    )
}