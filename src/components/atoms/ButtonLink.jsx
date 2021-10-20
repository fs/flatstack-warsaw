import styled from 'styled-components';
import Button from './Button';

const ButtonLink = styled(Button).attrs(() => ({
  as: 'a',
}))``;

export { variants } from './Button';

export default ButtonLink;
