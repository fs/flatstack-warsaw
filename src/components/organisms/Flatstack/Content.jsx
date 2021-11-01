import React from 'react';
import Section from '../../molecules/Section';
import { useL10n } from '../../L10nContext';

const Content = () => {
  const { t } = useL10n();
  return (
    <>
      <Section.Title>{t('flatstack.title')}</Section.Title>
    </>
  );
};

export default Content;
