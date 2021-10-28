import styled from 'styled-components';
import { useL10n } from '../../L10nContext';
import Alert from '../../molecules/Alert';
import List from '../../atoms/List';
import imagePathJpg from './image.jpg';
import imagePathWebp from './image.webp';
import imagePathAvif from './image.avif';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
`;

const Picture = styled.picture`
  display: block;
  flex: 0 0 16em;
  max-width: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 1em;
  display: block;
`;

const TextWrapper = styled.div`
  flex: 1 1 20em;
`;

const Content = () => {
  const { t } = useL10n();

  return (
    <Wrapper>
      <Picture>
        <source srcSet={imagePathAvif} type="image/avif" />
        <source srcSet={imagePathWebp} type="image/webp" />
        <Image
          src={imagePathJpg}
          width="256"
          height="310"
          alt={t('relocation.imageAlt')}
        />
      </Picture>
      <TextWrapper>
        <Alert>{t('relocation.alert')}</Alert>
        <p>{t('relocation.description')}</p>
        <strong>{t('relocation.listTitle')}</strong>
        <List>
          {t('relocation.listItems').map((item) => (
            <List.Item>{item}</List.Item>
          ))}
        </List>
      </TextWrapper>
    </Wrapper>
  );
};

export default Content;
