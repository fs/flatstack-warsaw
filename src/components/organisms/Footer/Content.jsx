import styled from 'styled-components';
import Link from '../../atoms/Link';
import InstagramIcon from '../../icons/InstagramIcon';
import MediumIcon from '../../icons/MediumIcon';
import FacebookIcon from '../../icons/FacebookIcon';
import LinkedInIcon from '../../icons/LinkedInIcon';
import TwitterIcon from '../../icons/TwitterIcon';
import GitHubIcon from '../../icons/GitHubIcon';

const InnerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: -1em;
`;

const CopyrightText = styled.p`
  margin: 1em;
`;

const SocialLinksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0.5em;

  & > * {
    margin: 0.5em;
  }
`;

const StyledIcon = styled(({ icon: Icon, ...props }) => <Icon {...props} />)`
  display: block;

  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.5em;
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
          href="https://medium.flatstack.com/?gi=e18d02043ba2"
          title="Medium"
          target="_blank"
          rel="noopener"
          noHoverEffect
        >
          <StyledIcon icon={MediumIcon} currentColor />
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
