import {
  createGlobalStyle,
  css,
  GlobalStyleComponent,
  DefaultTheme
} from 'styled-components';

type GlobalStylesProps = {
  removeBg?: boolean;
};

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-somoothing: antialiased;
    -moz-osx-font-somoothing: grayscale;

    &::before, &::after{
      box-sizing: inherit;
    }
  }

  ${({ theme, removeBg }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium}
      font-display: swap;
      ${
        !removeBg &&
        css`
          background-color: ${theme.colors.mainBg};
        `
      }
    }
  `}

`;

export default GlobalStyles;
