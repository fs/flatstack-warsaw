import styled, { css } from 'styled-components';
import { shade, tint } from 'polished';

export const variants = {
  ACCENT: 'ACCENT',
  TEXT: 'TEXT',
  ACCENT_TEXT: 'ACCENT_TEXT',
  BORDERED: 'BORDERED',
  PRIMARY: 'PRIMARY',
};

export const paddingVariants = {
  NORMAL: 'NORMAL',
  SYMMETRIC: 'SYMMETRIC',
  BIG: 'BIG',
  SYMMETRIC_BIG: 'SYMMETRIC_BIG',
};

const accentCss = css`
  color: ${({ theme }) => theme.colors.invertedText};
  font-weight: 600;

  background-color: ${({ theme }) => theme.colors.accent};

  &:focus {
    color: ${({ theme }) => theme.colors.invertedText};

    background-color: ${({ theme }) => shade(0.1, theme.colors.accent)};
    outline: none;
  }

  &:focus-visible {
    background-color: ${({ theme }) => theme.colors.accent};
    outline: ${({ theme }) => theme.colors.outline} solid 0.15em;
  }

  &:focus:not(:focus-visible) {
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

  &:focus-visible {
    background-color: transparent;
    outline: ${({ theme }) => theme.colors.outline} solid 0.15em;
  }

  &:focus:not(:focus-visible) {
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

  &:focus-visible {
    background-color: ${({ theme }) => theme.colors.primary};
    outline: ${({ theme }) => theme.colors.outline} solid 0.15em;
  }

  &:focus:not(:focus-visible) {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  &&:hover {
    background-color: ${({ theme }) => shade(0.1, theme.colors.primary)};
  }
`;

const accentTextCss = css`
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 600;

  &:focus {
    color: ${({ theme }) => shade(0.1, theme.colors.accent)};

    outline: none;
  }

  &:focus-visible {
    color: ${({ theme }) => theme.colors.accent};

    outline: ${({ theme }) => theme.colors.outline} solid 0.15em;
  }

  &:focus:not(:focus-visible) {
    color: ${({ theme }) => theme.colors.accent};
  }

  &&:hover {
    color: ${({ theme }) => shade(0.1, theme.colors.accent)};
  }
`;

const cssByConstant = {
  [variants.ACCENT]: accentCss,
  [variants.ACCENT_TEXT]: accentTextCss,
  [variants.BORDERED]: borderedCss,
  [variants.PRIMARY]: primaryCss,
};

const cssByPaddingVariant = {
  [paddingVariants.NORMAL]: css`
    padding: 0.5em 1.5em;
    ${({ negativeMargins }) =>
      negativeMargins &&
      css`
        margin: -0.5em -1.5em;
      `}
  `,
  [paddingVariants.BIG]: css`
    padding: 1em 2em;
    ${({ negativeMargins }) =>
      negativeMargins &&
      css`
        margin: -1em -2em;
      `}
  `,
  [paddingVariants.SYMMETRIC]: css`
    padding: 0.5em 0.8em;
    ${({ negativeMargins }) =>
      negativeMargins &&
      css`
        margin: -0.5em -0.8em;
      `}
  `,
  [paddingVariants.SYMMETRIC_BIG]: css`
    padding: 1em 1.2em;
    ${({ negativeMargins }) =>
      negativeMargins &&
      css`
        margin: -1em -1.2em;
      `}
  `,
};

const inlineCss = css`
  display: inline-block;
`;

const fullWidthCss = css`
  width: 100%;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0;

  color: ${({ theme }) => theme.colors.text};
  font-weight: inherit;
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
  text-decoration: none;

  background: none;
  border: none;
  border-radius: 0.7em;
  outline-offset: 0.15em;
  cursor: pointer;

  user-select: none;

  ${({ paddingVariant }) => cssByPaddingVariant[paddingVariant]};

  ${({ centered }) =>
    centered &&
    css`
      text-align: center;
      justify-content: center;
    `};

  ${({ fullWidth }) => fullWidth && fullWidthCss};

  &:active,
  &:focus,
  &:hover {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
  }

  ${({ variant }) => cssByConstant[variant]};

  ${({ inline }) => inline && inlineCss};
`;

Button.defaultProps = {
  variant: variants.PRIMARY,
  centered: true,
  paddingVariant: paddingVariants.NORMAL,
};

export default Button;
