import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface IButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button = ({
  type = 'button',
  children,
  onClick = () => {},
  ...otherProps
}: IButtonProps) => {
  return (
    <button type={type} className="button" onClick={(event) => onClick(event)} {...otherProps}>
      {children}
    </button>
  );
};
