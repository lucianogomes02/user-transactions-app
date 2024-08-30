interface CheckboxProps {
    label: string;
}

export default function Checkbox({ label }: CheckboxProps) {
    return (
        <section className="flex items-center mb-4 gap-2">
            <input 
                type="checkbox" 
                className="checkbox-custom mt-1"
            />
            <label className="text-text-primary text-left text-xs leading-tight">{ label }</label>
        </section>
    )
}