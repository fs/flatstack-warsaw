import styled from 'styled-components';

const ChildrenWrapper = styled.span`
  display: inline-block;
  text-decoration: ${({ noUnderline }) => (noUnderline ? 'none' : 'underline')};
`;

const Link = ({ children, noUnderline, ...props }) => (
  <a {...props}>
    <ChildrenWrapper noUnderline={noUnderline}>{children}</ChildrenWrapper>
  </a>
);

const StyledLink = styled(Link)`
  position: relative;
  display: inline-block;
  color: ${({ theme }) => theme.colors.text};

  &::before {
    content: '';
    display: inline-block;
    position: absolute;
    top: -0.2em;
    left: -0.2em;
    right: -0.2em;
    bottom: -0.2em;
    transition: transform 0.3s ease-out;
    transform: scaleX(0);
    transform-origin: top left;
    background-color: ${({ theme }) => theme.colors.accent};
    opacity: 0.3;
  }

  &:hover,
  &:focus {
    ${ChildrenWrapper} {
      text-decoration: none;
    }

    &::before {
      transform: scaleX(1);
    }
  }
`;

export default StyledLink;
