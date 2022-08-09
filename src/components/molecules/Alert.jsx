import styled from 'styled-components';
import AlertIcon from '../icons/AlertIcon';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5em;

  background-color: ${({ theme }) => theme.colors.accentPale};
  border-radius: 0.7em;

  & > * {
    margin: 0.5em;
  }
`;

const StyledAlertIcon = styled(AlertIcon)`
  display: block;
  flex: none;
`;

const Alert = ({ children }) => {
  return (
    <Wrapper>
      <StyledAlertIcon />
      <p>{children}</p>
    </Wrapper>
  );
};

export default Alert;
