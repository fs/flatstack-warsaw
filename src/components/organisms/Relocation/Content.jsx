import styled from 'styled-components';
import { useL10n } from '../../L10nContext';
import Alert from '../../molecules/Alert';
import List from '../../atoms/List';
import imagePathJpg from './image.jpg';
import imagePathWebp from './image.webp';
import imagePathAvif from './image.avif';
import Section from '../../molecules/Section';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -1em;
`;

const Picture = styled.picture`
  display: block;
  flex: 0 0 16em;
  max-width: calc(100% - 2em);
  margin: 1em;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;

  border-radius: 1em;
`;

const TextWrapper = styled.div`
  flex: 1 1 20em;
  margin: 1em;
`;

const Content = () => {
  const { t } = useL10n();

  return (
    <>
      <Section.Title>{t('relocation.title')}</Section.Title>

      <Wrapper>
        <Picture>
          <source srcSet={imagePathAvif} type="image/avif" />
          <source srcSet={imagePathWebp} type="image/webp" />
          <Image
            src={imagePathJpg}
            width="256"
            height="310"
            alt={t('relocation.imageAlt')}
            loading="lazy"
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
    </>
  );
};

export default Content;
