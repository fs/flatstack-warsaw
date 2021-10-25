import styled, { css } from 'styled-components';

export const types = {
  BORDERED: 'BORDERED',
  FILL: 'FILL',
};

const cssByType = {
  [types.BORDERED]: css`
    border: 1px solid ${({ theme }) => theme.colors.secondary};
  `,
  [types.FILL]: css`
    background-color: ${({ theme }) => theme.colors.primary};
  `,
};

const Card = styled.div`
  padding: 2em;
  border-radius: 1em;
  ${({ type }) => cssByType[type]}
`;

Card.defaultProps = {
  type: types.BORDERED,
};

export default Card;
