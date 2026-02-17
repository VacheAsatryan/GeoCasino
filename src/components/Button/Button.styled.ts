import styled from 'styled-components';
import { Geo } from '../../app/providers/GeoProvider';

export const StyledButton = styled.button<{ $geo: Geo }>`
  background: ${({ $geo }) => {
    switch ($geo) {
      case 'TR':
        return 'linear-gradient(84.38deg, #FF6B6B 7.59%, #FF8E53 96.71%)';
      case 'RU':
        return 'linear-gradient(84.38deg, #4CAF50 7.59%, #8BC34A 96.71%)';
      default:
        return 'linear-gradient(84.38deg, #FF8D6B 7.59%, #FFBA47 96.71%)';
    }
  }};
  width: 100%;
  height: 56px;
  border-radius: 12px;
  padding: 20px 24px; /* сверху/снизу 20px, слева/справа 24px */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px; /* расстояние между контентом, если вставлять иконку + текст */
  opacity: 1;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 490;
  color: #fff;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 0.8;
  }
`;