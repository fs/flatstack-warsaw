import styled from 'styled-components';

const Card = styled.div`
  padding: 1em;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 0.7em;
`;

export default Card;
