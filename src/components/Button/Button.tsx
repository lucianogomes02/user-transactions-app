interface ButtonProps {
    title: string;
    type?: "submit" | "button";
    submitHandler?: (event: React.FormEvent) => void;
}

export default function Button({ title, type }: ButtonProps) {
    return (
        <button
            type={ type } 
            className="
                w-80 h-12 
                bg-primary-blue 
                text-white 
                font-bold 
                rounded-lg 
                transition-all 
                hover:bg-primary-blue-dark
            "
        >
            { title }
        </button>
    )
}