import { InputHTMLAttributes, ReactNode, useState } from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    variant?: 'outlined' | 'contained';
    LeftElement?: ReactNode;
    RightElement?: ReactNode;
};

export function Input({ label, variant = 'outlined', LeftElement, RightElement, ...rest }: InputProps): JSX.Element {
    const variantClasses = {
        outlined: 'border-red-800',
        contained: 'border-zinc-100 bg-zinc-100',
    };

    const [focused, setFocused] = useState<boolean>(false);

    return (
        <div className={`font-opensans text-sm w-full flex items-center rounded-md border ${variantClasses[variant]}`}>
            {!!LeftElement && <div className="ml-1.5">{LeftElement}</div>}
            <div className="relative w-full p-1">
                <input
                    {...rest}
                    id={rest.id}
                    className={`peer p-1 w-full focus:outline-none bg-transparent ${!focused && label && 'placeholder-transparent'}`}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(!!rest.value)}
                />
                <label
                    htmlFor={rest.id}
                    className={`
                        absolute text-red-950 transition-all duration-200 transform peer-focus:scale-75 px-1 left-1 peer-placeholder-shown:top-2
                        ${LeftElement ? 'peer-focus:-top-3.5' : 'peer-focus:-top-3'}
                        ${variant === 'contained' ? 'peer-focus:bg-transparent' : 'peer-focus:bg-white'}
                    `}
                >
                    {label}
                </label>
            </div>
            {!!RightElement && <>{RightElement}</>}
        </div>
    );
}
