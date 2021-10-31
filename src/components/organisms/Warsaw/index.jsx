import { Suspense, lazy, useRef } from 'react';
import { useL10n } from '../../L10nContext';
import Section from '../../molecules/Section';
import config from '../../../config';
import useOnClickHydrate from '../../../hooks/useOnClickHydrate';

const Video =
  typeof window === 'undefined'
    ? require('./Video').default
    : lazy(() => import('./Video'));

const Warsaw = () => {
  const { t } = useL10n();
  const { handleClick: handleHydrateClick, shouldBeHydrated } =
    useOnClickHydrate({ repeatClickAfterHydrate: false });
  const videoRef = useRef();
  const innerHtmlRef = useRef('');

  const handleSectionClick = (e) => {
    e.preventDefault();
    if (shouldBeHydrated) {
      return;
    }

    innerHtmlRef.current = videoRef.current.innerHTML;
    handleHydrateClick(e);
  };

  return (
    <Section id={config.sectionIds.warsaw}>
      <Section.Title>{t('warsaw.title')}</Section.Title>
      <p>{t('warsaw.description')}</p>
      <Suspense
        fallback={
          <div dangerouslySetInnerHTML={{ __html: innerHtmlRef.current }} />
        }
      >
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <div
          dangerouslySetInnerHTML={
            shouldBeHydrated ? undefined : { __html: '' }
          }
          onClick={handleSectionClick}
          ref={videoRef}
        >
          <Video />
        </div>
      </Suspense>
    </Section>
  );
};

export default Warsaw;
