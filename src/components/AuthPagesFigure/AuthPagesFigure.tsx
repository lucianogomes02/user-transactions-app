interface AuthPagesFigureProps {
    label: string;
    figureSrc: string;
}

export default function AuthPagesFigure({ label, figureSrc }: AuthPagesFigureProps) {
  return (
    <figure className="flex items-center lg:items-start lg:justify-between">
        <img 
            src={figureSrc}
            alt="Ilustração Home"
            className="w-full max-w-xs lg:max-w-2xl md:max-w-xs lg:static"
        />
        <figcaption className="
            flex items-center 
            justify-center 
            p-4 
            mt-4
            lg:mt-0 lg:ml-5
            text-center lg:text-left
            lg:text-5xl md:text-2xl sm:text-lg
            font-bold
            text-primary-blue
            w-full"
        >
            {label}
        </figcaption>
    </figure>
  )
}