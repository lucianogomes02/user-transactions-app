interface ButtonProps {
    title: string;
}

export default function Button({ title }: ButtonProps) {
    return (
        <button 
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