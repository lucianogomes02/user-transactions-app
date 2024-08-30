interface ButtonProps {
    title: string;
    type?: "submit" | "button";
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ title, type, onClick }: ButtonProps) {
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
            onClick={onClick}
        >
            { title }
        </button>
    )
}