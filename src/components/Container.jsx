import styled, { css } from 'styled-components';

const getMaxWidth = (theme, index) => {
  const maxWidth = theme.containerMaxWidths[index];

  if (maxWidth >= 0 && maxWidth <= 1) {
    return `${maxWidth * 100}%`;
  }

  return `${maxWidth}em`;
};

const generateMedia = (theme) =>
  theme.breakpoints.map(
    (breakpoint, index) => css`
      @media (min-width: ${breakpoint}em) {
        max-width: ${getMaxWidth(theme, index)};
        padding-right: 1em;
        padding-left: 1em;
      }
    `,
  );

const Container = styled.div`
  padding-right: 0.5em;
  padding-left: 0.5em;
  width: 100%;
  margin: 0 auto;

  ${({ theme }) => generateMedia(theme)};
`;

export default Container;
