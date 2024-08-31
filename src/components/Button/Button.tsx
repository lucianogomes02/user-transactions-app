interface ButtonProps {
    title: string;
    type?: "submit" | "button";
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ title, type, onClick, disabled }: ButtonProps) {
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
                hover:bg-blue-500
            "
            disabled={ disabled }
            onClick={onClick}
            style={{ cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.5 : 1 }}
        >
            { title }
        </button>
    )
}