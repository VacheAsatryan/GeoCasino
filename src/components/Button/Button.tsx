import React, { ReactNode } from 'react';
import { StyledButton } from './Button.styled';
import { useGeo } from '../../app/providers/GeoProvider';

interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
    const { geo } = useGeo();
    return (
        <StyledButton $geo={geo} onClick={onClick}>
            {children}
        </StyledButton>
    );
};

export default Button;