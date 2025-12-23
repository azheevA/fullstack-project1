import { ButtonHTMLAttributes } from "react";
import clsx from 'clsx';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'blue' | 'rainbow';
    size?: 'sm' | 'md' | 'lg';
}
const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'blue',
    size = 'md',
    className,
    ...props
}) => {
    const baseStyles =
    'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
    const variants: Record<string, string> = {
        blue: 'bg-[#00E4F0] text-white hover:bg-[#00b3bd] focus:ring-blue-500',
        rainbow: 'bg-section2-bg text-gray-800 hover:bg-section2-hov focus:ring-gray-400',
    };

    const sizes: Record<string, string> = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
    };

    return (
        <button
        className={clsx(baseStyles, variants[variant], sizes[size], className)}
        {...props}
        >
        {children}
        </button>
    );
}

export default Button;