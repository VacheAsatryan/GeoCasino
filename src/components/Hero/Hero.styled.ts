import styled from 'styled-components';
import { breakpoints, heroHeights, heroFontSizes } from '../../styles/media/media';

export const HeroContainer = styled.div<{ $bgImage: string }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  background-image: url(${props => props.$bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  color: #fff;
  padding: 60px 20px;

  /* min-height для больших экранов через media */
  @media (min-width: ${breakpoints.desktop1920}px) {
    min-height: ${heroHeights.desktop1920}px;
    height:100vh;
  }
  @media (max-width: ${breakpoints.desktop1440}px) {
    min-height: ${heroHeights.desktop1440}px;
    flex:1;
  }
  @media (max-width: ${breakpoints.desktop1200}px) {
    min-height: ${heroHeights.desktop1200}px;
  }
  @media (max-width: ${breakpoints.tablet768}px) {
    min-height: ${heroHeights.tablet768}px;
  }
  @media (max-width: ${breakpoints.mobile480}px) {
    min-height: ${heroHeights.mobile480}px;
  }
  @media (max-width: ${breakpoints.mobile375}px) {
    min-height: ${heroHeights.mobile375}px;
  }
`;

export const HeroImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

export const HeroTitle = styled.h1`
  font-size: ${heroFontSizes.title.default};
  font-weight: bold;
  margin-bottom: 1rem;
  text-shadow: 1px 1px 5px rgba(0,0,0,0.5);

  @media (max-width: ${breakpoints.tablet768}px) {
    font-size: ${heroFontSizes.title.tablet};
  }
  @media (max-width: ${breakpoints.mobile480}px) {
    font-size: ${heroFontSizes.title.mobile};
  }
`;

export const HeroDescription = styled.p`
  font-size: ${heroFontSizes.description.default};
  max-width: 600px;
  margin: 0 auto 20px auto;
  text-shadow: 1px 1px 5px rgba(0,0,0,0.5);

  @media (max-width: ${breakpoints.tablet768}px) {
    font-size: ${heroFontSizes.description.tablet};
  }
  @media (max-width: ${breakpoints.mobile480}px) {
    font-size: ${heroFontSizes.description.mobile};
  }
`;

export const HeroButton = styled.button<{ bg: string; color: string }>`
  padding: 12px 24px;
  font-size: ${heroFontSizes.button.default};
  font-weight: bold;
  border: none;
  border-radius: 8px;
  background-color: ${props => props.bg};
  color: ${props => props.color};
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: ${breakpoints.tablet768}px) {
    padding: 10px 20px;
    font-size: ${heroFontSizes.button.tablet};
  }
  @media (max-width: ${breakpoints.mobile480}px) {
    padding: 8px 16px;
    font-size: ${heroFontSizes.button.mobile};
  }
`;