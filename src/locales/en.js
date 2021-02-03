export default {
  translations: {
    title: 'Flatstack Warsaw',
    metaDescription:
      'We are Flatstack and we are hiring software engineers for our Warsaw office. Join us!',
    metaKeywords:
      'flatstack, software engineer, ruby on rails, warsaw, hiring, relocate',
    'og:title': 'Flatstack Warsaw. Join us!',
    'og:description':
      'We are Flatstack and we are hiring software engineers for our Warsaw office. Join us!',
    logoAlt: 'Flatstack logo',
    hero: {
      title: ({ LineWrapper }) => (
        <>
          <LineWrapper>Hello! We are Flatstack!</LineWrapper>
          <br />
          <LineWrapper>
            We are hiring software engineers for our Warsaw office.
          </LineWrapper>
          <br />
          <LineWrapper>Join us!</LineWrapper>
        </>
      ),
      joinButton: 'Join',
    },
    jobDescription: {
      title: 'Who we are looking for?',
    },
    aboutProject: {
      title: 'About project',
    },
    aboutTeam: {
      title: 'About team',
    },
    join: {
      title: 'Join us!',
    },
  },
};
