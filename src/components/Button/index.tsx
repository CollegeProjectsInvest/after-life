import { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children?: ReactNode;
    icon?: ReactNode;
    variant?: 'outlined' | 'contained';
};

export function Button({ children, icon, variant = 'outlined', ...rest }: ButtonProps): JSX.Element {
    const baseClass = 'transition ease-in-out duration-200 flex items-center gap-2 rounded-full';
    const variantClasses = {
        outlined: 'border-2 border-red-800 text-red-800 hover:border-zinc-200 hover:text-zinc-200',
        contained: 'bg-red-800 hover:bg-zinc-200 text-white font-bold',
    };

    if (!children && icon) {
        return (
            <button {...rest} className={`${baseClass} p-2 text-red-800 hover:bg-zinc-200`}>
                <span className="flex-shrink-0">{icon}</span>
            </button>
        );
    }

    return (
        <button {...rest} className={`${baseClass} ${variantClasses[variant]} py-3 px-6`}>
            {!!icon && <span className="flex-shrink-0">{icon}</span>}
            {!!children && <span className={'font-opensans'}>{children}</span>}
        </button>
    );
}
