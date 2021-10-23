import styled, { css } from 'styled-components';

const underlineTypes = {
  SHOW_ON_HOVER: 'SHOW_ON_HOVER',
  HIDE_ON_HOVER: 'HIDE_ON_HOVER',
  NEVER: 'NEVER',
  ALWAYS: 'ALWAYS',
};

const ChildrenWrapper = styled.span`
  display: inline-block;
  text-decoration: ${({ underlineType }) =>
    underlineType === underlineTypes.HIDE_ON_HOVER ||
    underlineType === underlineTypes.ALWAYS
      ? 'underline'
      : 'none'};
`;

const Link = ({ children, underlineType, ...props }) => (
  <a {...props}>
    <ChildrenWrapper underlineType={underlineType}>{children}</ChildrenWrapper>
  </a>
);

const hoverEffect = css`
  &::before {
    content: '';
    display: inline-block;
    position: absolute;
    top: -0.2em;
    left: -0.4em;
    right: -0.4em;
    bottom: -0.2em;
    transition: transform 0.3s ease-out;
    transform: scaleX(0);
    transform-origin: top left;
    background-color: ${({ theme }) => theme.colors.accent};
    opacity: 0.3;
  }

  &:hover::before,
  &:focus::before {
    transform: scaleX(1);
  }
`;

const StyledLink = styled(Link)`
  position: relative;
  display: inline-block;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;

  &:hover,
  &:focus {
    ${ChildrenWrapper} {
      text-decoration: ${({ underlineType }) =>
        underlineType === underlineTypes.SHOW_ON_HOVER ||
        underlineType === underlineTypes.ALWAYS
          ? 'underline'
          : 'none'};
    }
  }

  ${({ noHoverEffect }) => !noHoverEffect && hoverEffect};
`;

StyledLink.underlineTypes = underlineTypes;

StyledLink.defaultProps = {
  underlineType: underlineTypes.ALWAYS,
};

export default StyledLink;
