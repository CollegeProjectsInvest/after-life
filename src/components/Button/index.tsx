import { ButtonHTMLAttributes, ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children?: ReactNode;
    Icon?: LucideIcon;
    variant?: 'outlined' | 'contained';
};

export function Button({ children, Icon, variant = 'outlined', ...rest }: ButtonProps): JSX.Element {
    const baseClass = 'transition ease-in-out duration-200 flex items-center gap-2 rounded-full text-xs md:text-base';
    const variantClasses = {
        outlined: 'border border-red-800 text-red-800 hover:border-zinc-200 hover:text-zinc-200',
        contained: 'bg-red-800 hover:bg-zinc-200 text-white font-bold',
    };
    const iconClass = 'flex-shrink-0 w-5 h-5 md:w-6 md:h-6';

    if (!children && Icon) {
        return (
            <button {...rest} className={`${baseClass} p-2 text-red-800 hover:bg-zinc-200`}>
                <Icon className={iconClass} />
            </button>
        );
    }

    return (
        <button {...rest} className={`${baseClass} ${variantClasses[variant]} py-3 px-6`}>
            {!!Icon && (
                <span>
                    <Icon className={iconClass} />
                </span>
            )}
            <span className={'font-opensans'}>{children}</span>
        </button>
    );
}
