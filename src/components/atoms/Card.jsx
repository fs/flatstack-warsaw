import styled, { css } from 'styled-components';

export const variants = {
  BORDERED: 'BORDERED',
  FILL_PRIMARY: 'FILL_PRIMARY',
  FILL_ACCENT_PALE: 'FILL_ACCENT_PALE',
};

const cssByVariant = {
  [variants.BORDERED]: css`
    border: 1px solid ${({ theme }) => theme.colors.secondary};
  `,
  [variants.FILL_PRIMARY]: css`
    background-color: ${({ theme }) => theme.colors.primary};
  `,
  [variants.FILL_ACCENT_PALE]: css`
    background-color: ${({ theme }) => theme.colors.accentPale};
  `,
};

const Card = styled.div`
  padding: 2em;
  border-radius: 1em;
  ${({ variant }) => cssByVariant[variant]}
`;

Card.defaultProps = {
  variant: variants.BORDERED,
};

export default Card;
