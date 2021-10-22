import styled, { css } from 'styled-components';
import { shade, tint } from 'polished';

export const variants = {
  ACCENT: 'ACCENT',
  TEXT: 'TEXT',
  BORDERED: 'BORDERED',
  PRIMARY: 'PRIMARY',
};

const accentCss = css`
  background-color: ${({ theme }) => theme.colors.accent};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.invertedText};

  &:focus {
    color: ${({ theme }) => theme.colors.invertedText};
    background-color: ${({ theme }) => shade(0.1, theme.colors.accent)};
    outline: none;
  }

  &:focus:not(:focus-visible) {
    background-color: ${({ theme }) => theme.colors.accent};
  }

  &:focus-visible {
    outline: ${({ theme }) => theme.colors.outline} solid 0.15em;
    background-color: ${({ theme }) => theme.colors.accent};
  }

  &&:hover {
    color: ${({ theme }) => theme.colors.invertedText};
    background-color: ${({ theme }) => shade(0.1, theme.colors.accent)};
  }
`;

const borderedCss = css`
  border: 1px solid ${({ theme }) => theme.colors.secondary};

  &:focus {
    outline: none;
  }

  &:focus:not(:focus-visible) {
    background-color: transparent;
  }

  &:focus-visible {
    outline: ${({ theme }) => theme.colors.outline} solid 0.15em;
    background-color: transparent;
  }

  &&:hover {
    background-color: ${({ theme }) => tint(0.5, theme.colors.primary)};
  }
`;

const primaryCss = css`
  background-color: ${({ theme }) => theme.colors.primary};

  &:focus {
    background-color: ${({ theme }) => shade(0.1, theme.colors.primary)};
    outline: none;
  }

  &:focus:not(:focus-visible) {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  &:focus-visible {
    outline: ${({ theme }) => theme.colors.outline} solid 0.15em;
    background-color: ${({ theme }) => theme.colors.primary};
  }

  &&:hover {
    background-color: ${({ theme }) => shade(0.1, theme.colors.primary)};
  }
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
  padding: 0.7em 1.5em;
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  border-radius: 0.7em;
  outline-offset: 0.15em;

  &:active,
  &:focus,
  &:hover {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
  }

  ${({ variant }) => variant === variants.ACCENT && accentCss};
  ${({ variant }) => variant === variants.BORDERED && borderedCss};
  ${({ variant }) => variant === variants.PRIMARY && primaryCss};

  ${({ inline }) => inline && inlineCss};
  ${({ big }) =>
    big &&
    css`
      padding: 1em 2em;
    `};
`;

Button.defaultProps = {
  variant: variants.PRIMARY,
};

export default Button;
