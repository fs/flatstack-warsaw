import styled, { css } from 'styled-components';

const accentCss = css`
  background-color: ${({ theme }) => theme.colors.accent};
  padding: 0.5em 1em;
  font-weight: 600;
  outline: none;
  color: ${({ theme }) => theme.colors.secondary};

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
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
  padding: 0.5em;
  cursor: pointer;
  display: block;
  border-radius: 0;
  transition: transform 0.3s ease-out;

  ${accentCss};

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

export default Button;
