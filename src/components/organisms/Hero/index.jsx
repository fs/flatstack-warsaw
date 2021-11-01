import styled from 'styled-components';
import config from '../../../config';
import { useL10n } from '../../L10nContext';
import useOnClickHydrate from '../../../hooks/useOnClickHydrate';
import Section from '../../molecules/Section';
import ShareButton from '../../molecules/ShareButton';
import ButtonLink, {
  variants as buttonLinkVariants,
} from '../../atoms/ButtonLink';
import { variants as buttonVariants } from '../../atoms/Button';
import RecommendButton from '../../molecules/RecommendButton';

const StyledSection = styled(Section)`
  margin: 5em 0;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 3em;
`;

const ActionsWrapper = styled.div`
  display: flex;
  gap: 1em;
  flex-wrap: wrap;
`;

const Content =
  typeof window === 'undefined' ? require('./Content').default : () => null;

const Hero = () => {
  const { t } = useL10n();
  const { handleClick, shouldBeHydrated } = useOnClickHydrate();

  return (
    <StyledSection>
      <ContentWrapper dangerouslySetInnerHTML={{ __html: '' }}>
        <Content />
      </ContentWrapper>
      <ActionsWrapper
        dangerouslySetInnerHTML={shouldBeHydrated ? undefined : { __html: '' }}
        onClick={handleClick}
      >
        <ButtonLink
          href={`#${config.sectionIds.join}`}
          variant={buttonLinkVariants.ACCENT}
        >
          {t('hero.actions.apply')}
        </ButtonLink>
        <RecommendButton variant={buttonVariants.BORDERED} />
        <ShareButton variant={buttonVariants.BORDERED} />
      </ActionsWrapper>
    </StyledSection>
  );
};

export default Hero;
