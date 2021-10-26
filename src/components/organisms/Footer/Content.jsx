import styled from 'styled-components';
import Link from '../../atoms/Link';
import InstagramIcon from '../../icons/InstagramIcon';
import VkIcon from '../../icons/VkIcon';
import MediumIcon from '../../icons/MediumIcon';
import ApplePodcastsIcon from '../../icons/ApplePodcastsIcon';
import FacebookIcon from '../../icons/FacebookIcon';
import LinkedInIcon from '../../icons/LinkedInIcon';
import TwitterIcon from '../../icons/TwitterIcon';
import GitHubIcon from '../../icons/GitHubIcon';

const InnerWrapper = styled.div`
  display: flex;
  gap: 2em;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const CopyrightText = styled.p`
  margin: 0;
`;

const SocialLinksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
`;

const StyledIcon = styled(({ icon: Icon, ...props }) => <Icon {...props} />)`
  display: block;
  font-size: 1.5em;
  color: ${({ theme }) => theme.colors.secondary};
`;

const Content = () => {
  return (
    <InnerWrapper>
      <CopyrightText>&copy; 2021 Flatstack LLC</CopyrightText>
      <SocialLinksWrapper>
        <Link
          href="https://www.instagram.com/flatstack/"
          title="Instagram"
          target="_blank"
          rel="noopener"
          noHoverEffect
        >
          <StyledIcon icon={InstagramIcon} currentColor />
        </Link>
        <Link
          href="https://vk.com/flatstack"
          title="Vk"
          target="_blank"
          rel="noopener"
          noHoverEffect
        >
          <StyledIcon icon={VkIcon} currentColor />
        </Link>
        <Link
          href="https://medium.flatstack.com/?gi=e18d02043ba2"
          title="Medium"
          target="_blank"
          rel="noopener"
          noHoverEffect
        >
          <StyledIcon icon={MediumIcon} currentColor />
        </Link>
        <Link
          href="https://podcasts.apple.com/us/podcast/%D0%BE-%D1%87%D0%B5%D0%BC-%D0%B3%D0%BE%D0%B2%D0%BE%D1%80%D1%8F%D1%82-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%87%D0%B8%D0%BA%D0%B8/id1556254800"
          title="Apple Podcasts"
          target="_blank"
          rel="noopener"
          noHoverEffect
        >
          <StyledIcon icon={ApplePodcastsIcon} currentColor />
        </Link>
        <Link
          href="https://ru-ru.facebook.com/flatstack"
          title="Facebook"
          target="_blank"
          rel="noopener"
          noHoverEffect
        >
          <StyledIcon icon={FacebookIcon} currentColor />
        </Link>
        <Link
          href="https://www.linkedin.com/company/flatstack"
          title="LinkedIn"
          target="_blank"
          rel="noopener"
          noHoverEffect
        >
          <StyledIcon icon={LinkedInIcon} currentColor />
        </Link>
        <Link
          href="https://twitter.com/flatstack"
          title="Twitter"
          target="_blank"
          rel="noopener"
          noHoverEffect
        >
          <StyledIcon icon={TwitterIcon} currentColor />
        </Link>
        <Link
          href="https://github.com/fs"
          title="GitHub"
          target="_blank"
          rel="noopener"
          noHoverEffect
        >
          <StyledIcon icon={GitHubIcon} currentColor />
        </Link>
      </SocialLinksWrapper>
    </InnerWrapper>
  );
};

export default Content;
