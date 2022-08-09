import styled from 'styled-components';
import { useL10n } from '../../L10nContext';
import HrPhotoWebpPath from './hr-photo.webp';
import HrPhotoAvifPath from './hr-photo.avif';
import HrPhotoJpgPath from './hr-photo.jpg';

const Picture = styled.picture`
  position: relative;

  display: block;

  &::before {
    position: absolute;
    top: -0.5em;
    left: -1em;

    display: block;
    width: 3em;
    height: 3em;

    background-color: ${({ theme }) => theme.colors.accent};
    border-radius: 50%;

    content: '';
  }

  &::after {
    position: absolute;
    right: 0;
    bottom: -1em;

    display: block;
    width: 1.5em;
    height: 1.5em;

    background-color: ${({ theme }) => theme.colors.accent};
    border-radius: 50%;

    content: '';
  }
`;

const Image = styled.img`
  display: block;

  border-radius: 50%;
`;

const HrDecoratedPhoto = (props) => {
  const { t } = useL10n();

  return (
    <Picture {...props}>
      <source srcSet={HrPhotoAvifPath} type="image/avif" />
      <source srcSet={HrPhotoWebpPath} type="image/webp" />
      <Image
        src={HrPhotoJpgPath}
        alt={t('join.hrPhotoAlt')}
        width="128"
        height="128"
        loading="lazy"
      />
    </Picture>
  );
};

export default HrDecoratedPhoto;
