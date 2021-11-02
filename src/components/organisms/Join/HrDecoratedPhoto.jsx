import styled from 'styled-components';
import { useL10n } from '../../L10nContext';
import HrPhotoWebpPath from './hr-photo.webp';
import HrPhotoAvifPath from './hr-photo.avif';
import HrPhotoJpgPath from './hr-photo.jpg';

const Picture = styled.picture`
  display: block;
  position: relative;

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
    right: 0;
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
