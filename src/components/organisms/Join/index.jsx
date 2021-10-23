import styled from 'styled-components';
import Section from '../../molecules/Section';
import { useL10n } from '../../L10nContext';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import Link from '../../atoms/Link';
import Card from '../../atoms/Card';
import HrPhotoJpgPath from './hr-photo.jpg?inline';
import HrPhotoWebpPath from './hr-photo.webp?inline';
import HrPhotoAvifPath from './hr-photo.avif?inline';
import AppleWatchWebpPath from './apple-watch.webp';
import AppleWatchPngPath from './apple-watch.png';
import TelegramIconSvg from './TelegramIconSvg';
import WhatsappIconSvg from './WhatsappIconSvg';
import ButtonLink from '../../atoms/ButtonLink';

const JoinSection = styled.div`
  padding: 1rem 0;
  margin: -1rem 0;
`;

const JoinSectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 6em 2em; ;
`;

const Title = styled.h2`
  font-size: 1.5em;
  margin: 1rem 0;
`;

const Form = styled.form`
  margin: 1rem 0;
  max-width: 30em;
`;

const StyledInput = styled(Input)`
  margin: 0.5em 0;
`;

const StyledButton = styled(Button)`
  margin: 1.5rem 0;
`;

const Agreement = styled.span`
  color: ${({ theme }) => theme.colors.paleText};
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
`;

const StyledCard = styled(Card)`
  padding-top: 4.5em;
  position: relative;
`;

const Picture = styled.picture`
  width: 8em;
  height: 8em;
  border-radius: 50%;
  position: absolute;
  top: -30%;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  display: block;

  &::before {
    display: block;
    content: '';
    width: 3em;
    height: 3em;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.accent};
    position: absolute;
    top: -0.5em;
    left: -1em;
  }

  &::after {
    display: block;
    content: '';
    width: 1.5em;
    height: 1.5em;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.accent};
    position: absolute;
    bottom: -1em;
    right: 5%;
  }
`;

const Image = styled.img`
  width: 8em;
  height: 8em;
  border-radius: 50%;
  position: absolute;
`;

const Message = styled.p``;

const ShareCard = styled(Card)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
`;
const SocialsWrapper = styled.div`
  margin: 0.5em 0;
`;

const Social = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  margin: 0.5em 0;
`;

const TelegramIcon = styled(TelegramIconSvg)`
  width: 1.5em;
`;

const WhatsappIcon = styled(WhatsappIconSvg)`
  width: 1.5em;
`;

const AplleWatchImage = styled.img`
  width: 6em;
`;

const RecommendationWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const RecommendationDescription = styled.p``;

const Join = () => {
  const { t } = useL10n();

  return (
    <Section grey id="join">
      <JoinSection>
        <Title>{t('join.title')}</Title>
        <JoinSectionWrapper>
          <Form>
            <StyledInput
              type="text"
              name="name"
              label={t('join.form.name')}
              id="join-form-input-name"
            />
            <StyledInput
              type="text"
              name="email"
              label={t('join.form.email')}
              id="join-form-input-email"
            />
            <StyledInput
              type="text"
              name="link"
              label={t('join.form.link')}
              id="join-form-input-link"
            />
            <StyledButton type="submit" fullWidth>
              {t('join.form.submit')}
            </StyledButton>
            <Agreement>
              {t('join.form.agreement')}{' '}
              <Link href="#">{t('join.form.privacyPolicy')}</Link>
            </Agreement>
          </Form>
          <CardsWrapper>
            <StyledCard>
              <Picture>
                <source srcSet={HrPhotoWebpPath} type="image/webp" />
                <source srcSet={HrPhotoAvifPath} type="image/avif" />
                <Image src={HrPhotoJpgPath} alt={t('join.hrPhotoAlt')} />
              </Picture>
              <Message>{t('join.hrMessage')}</Message>
              <SocialsWrapper>
                <Social>
                  <TelegramIcon />
                  <Link href="tel:000-000-000">Telegram</Link>
                </Social>
                <Social>
                  <WhatsappIcon />
                  <Link href="tel:000-000-000">Whatsapp</Link>
                </Social>
              </SocialsWrapper>
            </StyledCard>
            <ShareCard>
              <picture>
                <source srcSet={AppleWatchWebpPath} type="image/webp" />
                <AplleWatchImage src={AppleWatchPngPath} alt="Apple watch" />
              </picture>
              <RecommendationWrapper>
                <RecommendationDescription>
                  {t('join.recommendationDescription')}
                </RecommendationDescription>
                <ButtonLink>{t('join.recommendationLinkText')}</ButtonLink>
              </RecommendationWrapper>
            </ShareCard>
          </CardsWrapper>
        </JoinSectionWrapper>
      </JoinSection>
    </Section>
  );
};

export default Join;
