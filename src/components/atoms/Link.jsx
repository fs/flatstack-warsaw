import styled from 'styled-components';

const ChildrenWrapper = styled.span`
  display: inline-block;
  position: relative;
  text-decoration: underline;
`;

const Link = ({ children, ...props }) => (
  <a {...props}>
    <ChildrenWrapper>{children}</ChildrenWrapper>
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
    top: -0.3em;
    left: -0.3em;
    right: -0.3em;
    bottom: -0.3em;
    transition: all 0.3s ease-out;
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
