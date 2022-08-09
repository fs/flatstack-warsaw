import styled, { css } from 'styled-components';

export const underlineTypes = {
  SHOW_ON_HOVER: 'SHOW_ON_HOVER',
  HIDE_ON_HOVER: 'HIDE_ON_HOVER',
  NEVER: 'NEVER',
  ALWAYS: 'ALWAYS',
};

const hoverEffect = css`
  &::before {
    position: absolute;
    top: -0.2em;
    right: -0.4em;
    bottom: -0.2em;
    left: -0.4em;

    display: inline-block;

    background-color: ${({ theme }) => theme.colors.accent};

    transform: scaleX(0);
    transform-origin: top left;
    opacity: 0.3;

    transition: transform 0.3s ease-out;

    content: '';
  }

  &:hover::before,
  &:focus::before {
    transform: scaleX(1);
  }
`;

const Link = styled.a`
  position: relative;

  display: inline-block;

  color: ${({ theme }) => theme.colors.text};
  text-decoration: ${({ underlineType }) =>
    underlineType === underlineTypes.HIDE_ON_HOVER ||
    underlineType === underlineTypes.ALWAYS
      ? 'underline'
      : 'none'};

  cursor: pointer;

  &:hover,
  &:focus {
    text-decoration: ${({ underlineType }) =>
      underlineType === underlineTypes.SHOW_ON_HOVER ||
      underlineType === underlineTypes.ALWAYS
        ? 'underline'
        : 'none'};
  }

  ${({ noHoverEffect }) => !noHoverEffect && hoverEffect};
`;

Link.defaultProps = {
  underlineType: underlineTypes.ALWAYS,
};

export default Link;
