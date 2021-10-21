import styled, { css } from 'styled-components';

export const variants = {
  ACCENT: 'ACCENT',
  TEXT: 'TEXT',
  BORDERED: 'BORDERED',
};

const accentCss = css`
  background-color: ${({ theme }) => theme.colors.accent};
  font-weight: 600;
  outline: none;
  color: ${({ theme }) => theme.colors.invertedText};

  &:hover {
    color: ${({ theme }) => theme.colors.invertedText};
  }
`;

const borderedCss = css`
  border: 1px solid ${({ theme }) => theme.colors.secondary};
`;

const inlineCss = css`
  display: inline-block;
`;

const fullWidthCss = css`
  width: 100%;
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
  padding: 0.7em 1.5em;
  color: ${({ theme }) => theme.colors.text};
  border-radius: 0.7em;

  ${({ variant }) => variant === variants.ACCENT && accentCss};
  ${({ variant }) => variant === variants.BORDERED && borderedCss};
  ${({ fullWidth }) => fullWidth && fullWidthCss};

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
