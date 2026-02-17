import styled from 'styled-components';
import { breakpoints } from '../../styles/media/media';

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 60px 32px;
  background: linear-gradient(270deg, #06225D 0%, #02011F 37.03%);
  color: #fff;
  font-size: 1rem;
`;

export const FooterContent = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 24px;

   @media (max-width: ${breakpoints.desktop1200}px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
    
`;

export const FooterBox = styled.div<{ $withBorder?: boolean; $flexible?: boolean; $hiddenBox?: boolean }>`
  width: ${({ $flexible }) => ($flexible ? 'auto' : 'fit-content')};
  height: 288px;
  flex: ${({ $flexible }) => ($flexible ? '1 1 0' : '0 0 auto')};
  min-width: ${({ $flexible }) => ($flexible ? '0' : 'auto')};
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: ${({ $flexible }) => ($flexible ? 'flex-start' : 'center')};
  gap: 8px;
  border: ${({ $withBorder }) => ($withBorder ? '1px dashed #FFBA47' : 'none')};
  border-radius: 16px;
  padding: ${({ $withBorder }) => ($withBorder ? '16px' : '0')};
  @media (max-width: 768px) {
    align-items: center;
  }
  @media (max-width: ${breakpoints.desktop1200}px) {
    display: ${({ $hiddenBox }) => ($hiddenBox ? 'none' : 'flex')};
  }
`;

export const FooterPersonImage = styled.img`
  width: 288px;
  height: auto;
  object-fit: contain;
  /* 240px только в “зоне” 1440–1919, выше и ниже — 288px */
  @media (min-width: ${breakpoints.desktop1440}px) and (max-width: 1919px) {
    width: 240px;
  }
     @media (max-width: ${1413}px) {
    display:none;
  }
 
`;