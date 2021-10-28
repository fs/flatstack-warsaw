import styled from 'styled-components';
import FsPhotoWebpPath from './fs-mountains.webp';
import FsPhotoAvifPath from './fs-mountains.avif';
import FsPhotoJpgPath from './fs-mountains.jpg';
import { useL10n } from '../../L10nContext';
import AlertIcon from './AlertIcon';

const InnerWrapper = styled.div`
  display: flex;
  gap: 1em;
  align-items: flex-start;
`;
const Picture = styled.picture``;
const Image = styled.img`
  width: 20em;
  border-radius: 0.7em;
`;

const RightCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
`;
const RequirementMessage = styled.div`
  display: flex;
  gap: 0.5em;
  max-width: 25em;
  align-items: center;
`;
const Message = styled.p`
  margin: 0;
`;

const BoldMessage = styled(Message)`
  font-weight: 600;
`;

const RequirementAlertIcon = styled(AlertIcon)`
  flex: none;
`;

const List = styled.ul``;
const HelpWithInnerWrapper = styled.div``;
const ListItem = styled.li`
  margin: 0.2em 0;
`;

const Content = () => {
  const { t } = useL10n();
  return (
    <InnerWrapper>
      <Picture>
        <source srcSet={FsPhotoWebpPath} type="image/webp" />
        <source srcSet={FsPhotoAvifPath} type="image/avif" />
        <Image src={FsPhotoJpgPath} alt={t('relocation.fsPhotoAlt')} />
      </Picture>
      <RightCol>
        <RequirementMessage>
          <RequirementAlertIcon />
          <Message>{t('relocation.requirement')}</Message>
        </RequirementMessage>
        <Message>{t('relocation.relocationFrom')}</Message>
        <HelpWithInnerWrapper>
          <BoldMessage>{t('relocation.helpWith.title')}</BoldMessage>
          <List>
            {t('relocation.helpWith.items').map((item) => (
              <ListItem>{item}</ListItem>
            ))}
          </List>
        </HelpWithInnerWrapper>
      </RightCol>
    </InnerWrapper>
  );
};

export default Content;
