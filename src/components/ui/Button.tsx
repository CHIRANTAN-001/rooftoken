import React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/utils/cn';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'primary-shadow' | 'primary-stroke' | 'card-btn';
  type?: 'xs' | 'sm' | 'lg' | 'xl' | 'submit';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

const Button = ({
  children,
  variant,
  type,
  weight,
  className,
  loading,
  disabled,
  onClick,
  ...attributes
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        buttonVariants({ variant, type, weight, className }),
        disabled || loading ? 'cursor-not-allowed opacity-70' : ''
      )}
      disabled={disabled || loading}
      {...attributes}
    >
      {children}

      {loading && (
        <svg
          className="animate-spin ml-2"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M18.364 5.63604L16.9497 7.05025C15.683 5.7835 13.933 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12H21C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C14.4853 3 16.7353 4.00736 18.364 5.63604Z"
            fill="white"
          />
        </svg>
      )}
    </button>
  );
};

const buttonVariants = cva(
  'rounded-[5px] text-sm flex items-center justify-center',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-ghost-white',
        'primary-shadow': 'bg-primary text-ghost-white shadow-inset-black',
        'primary-stroke': 'bg-orange-200 border border-orange-300 text-primary',
        'card-btn': 'bg-black-100 text-white backdrop-blur-[50px]',
      },
      type: {
        xs: 'text-xs',
        sm: 'text-sm',
        lg: 'text-base',
        xl: 'text-xl',
        submit: 'text-base',
      },
      weight: {
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold',
      },
    },
    defaultVariants: {
      variant: 'primary',
      type: 'submit',
      weight: 'medium',
    },
  }
);

export default Button;
