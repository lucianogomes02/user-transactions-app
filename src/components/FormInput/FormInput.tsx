import FormInputProps from "../../types/FormInputProps"
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useState } from "react"

export default function FormInput({ label, inputType, placeholder }: FormInputProps) {
    const [passwordIsVisible, setPasswordVisible] = useState(false)

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordIsVisible)
     }

    return (
        <section className="flex flex-col mb-4">
            <label className="mb-1 text-left text-text-primary">{label}</label>
            <section className="relative w-80">
                <input
                    className="
                        w-80 h-12 p-2 
                        border shadow-sm
                        focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                        bg-background-primary text-text-secondary rounded-lg" 
                    type={passwordIsVisible ? "text" : inputType}
                    placeholder={placeholder}
                />
                {inputType === 'password' && (
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute inset-y-0 right-2 flex items-center text-text-secondary focus:outline-none"
                        >
                            {passwordIsVisible ? (
                                <FaEyeSlash className="w-5 h-5" color="blue" />
                            ) : (
                                <FaEye className="w-5 h-5" />
                            )}
                        </button>
                    )}
            </section>
        </section>
    )
}