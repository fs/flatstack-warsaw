import styled, { css } from 'styled-components';

export const variants = {
  ACCENT: 'ACCENT',
  TEXT: 'TEXT',
};

const accentCss = css`
  background-color: ${({ theme }) => theme.colors.accent};
  padding: 0.7em 1.5em;
  font-weight: 600;
  outline: none;
  color: ${({ theme }) => theme.colors.invertedText};
  border-radius: 0.7em;

  &:hover {
    color: ${({ theme }) => theme.colors.invertedText};
  }
`;

const textCss = css`
  padding: 0.7em 1.5em;
  color: ${({ theme }) => theme.colors.text};
`;

const inlineCss = css`
  display: inline-block;
`;

const Button = styled.button`
  border: none;
  background: none;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  font-weight: inherit;
  text-align: center;
  text-decoration: none;
  user-select: none;
  cursor: pointer;
  display: block;
  transition: transform 0.3s ease-out;

  ${({ variant }) => variant === variants.ACCENT && accentCss};
  ${({ variant }) => variant === variants.TEXT && textCss};

  &:active,
  &:focus,
  &:hover {
    transform: scale(1.1);
    text-decoration: none;
  }

  ${({ inline }) => inline && inlineCss};
  ${({ big }) =>
    big &&
    css`
      padding: 1em 2em;
    `};
`;

Button.defaultProps = {
  variant: variants.ACCENT,
};

export default Button;
