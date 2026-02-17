import { createGlobalStyle } from 'styled-components';

import SFProTextRegular from '../assets/fonts/SFProText-Regular.ttf';
import SFProTextRegularItalic from '../assets/fonts/SFProText-RegularItalic.ttf';
import SFProTextLight from '../assets/fonts/SFProText-Light.ttf';
import SFProTextLightItalic from '../assets/fonts/SFProText-LightItalic.ttf';
import SFProTextMedium from '../assets/fonts/SFProText-Medium.ttf';
import SFProTextMediumItalic from '../assets/fonts/SFProText-MediumItalic.ttf';
import SFProTextSemiBold from '../assets/fonts/SFProText-Semibold.ttf';
import SFProTextSemiBoldItalic from '../assets/fonts/SFProText-SemiboldItalic.ttf';
import SFProTextBold from '../assets/fonts/SFProText-Bold.ttf';
import SFProTextBoldItalic from '../assets/fonts/SFProText-BoldItalic.ttf';
import SFProTextHeavy from '../assets/fonts/SFProText-Heavy.ttf';
import SFProTextHeavyItalic from '../assets/fonts/SFProText-HeavyItalic.ttf';

export const GlobalStyle = createGlobalStyle`
  /* SF Pro Text Light */
  @font-face {
    font-family: 'SF Pro';
    src: url(${SFProTextLight}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  /* SF Pro Text Light Italic */
  @font-face {
    font-family: 'SF Pro';
    src: url(${SFProTextLightItalic}) format('truetype');
    font-weight: 300;
    font-style: italic;
    font-display: swap;
  }

  /* SF Pro Text Regular */
  @font-face {
    font-family: 'SF Pro';
    src: url(${SFProTextRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  /* SF Pro Text Regular Italic */
  @font-face {
    font-family: 'SF Pro';
    src: url(${SFProTextRegularItalic}) format('truetype');
    font-weight: 400;
    font-style: italic;
    font-display: swap;
  }

  /* SF Pro Text Medium */
  @font-face {
    font-family: 'SF Pro';
    src: url(${SFProTextMedium}) format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  /* SF Pro Text Medium Italic */
  @font-face {
    font-family: 'SF Pro';
    src: url(${SFProTextMediumItalic}) format('truetype');
    font-weight: 500;
    font-style: italic;
    font-display: swap;
  }

  /* SF Pro Text SemiBold */
  @font-face {
    font-family: 'SF Pro';
    src: url(${SFProTextSemiBold}) format('truetype');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  /* SF Pro Text SemiBold Italic */
  @font-face {
    font-family: 'SF Pro';
    src: url(${SFProTextSemiBoldItalic}) format('truetype');
    font-weight: 600;
    font-style: italic;
    font-display: swap;
  }

  /* SF Pro Text Bold */
  @font-face {
    font-family: 'SF Pro';
    src: url(${SFProTextBold}) format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  /* SF Pro Text Bold Italic */
  @font-face {
    font-family: 'SF Pro';
    src: url(${SFProTextBoldItalic}) format('truetype');
    font-weight: 700;
    font-style: italic;
    font-display: swap;
  }

  /* SF Pro Text Heavy */
  @font-face {
    font-family: 'SF Pro';
    src: url(${SFProTextHeavy}) format('truetype');
    font-weight: 800;
    font-style: normal;
    font-display: swap;
  }

  /* SF Pro Text Heavy Italic */
  @font-face {
    font-family: 'SF Pro';
    src: url(${SFProTextHeavyItalic}) format('truetype');
    font-weight: 800;
    font-style: italic;
    font-display: swap;
  }

  /* Глобальные сбросы */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'SF Pro', sans-serif; /* глобально SF Pro */
    font-weight: 400;
    font-style: normal;
  }

  button,
  input,
  textarea,
  select {
    font-family: inherit;
  }
`;