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
    menu: {
      vacancy: 'Vacancy',
      relocation: 'Relocation',
      feedbacks: 'Feedbacks',
      warsaw: 'Warsaw',
    },
    hero: {
      subtitle: ({ Highlight }) => (
        <>
          to Warsaw <Highlight>&#123;with relocation&#125;</Highlight>
        </>
      ),
      actions: {
        apply: 'Apply now',
      },
    },
    vacancy: {
      aboutFlatstack: 'About Flatstack',
    },
    relocation: {
      title: 'Relocation',
    },
    feedbacks: {
      title: 'Feedbacks',
    },
    warsaw: {
      title: 'Warsaw',
    },
    shareModal: {
      triggerButtonText: 'Share',
      title: 'Share',
      copy: 'Copy',
      copySuccess: 'Copied!',
      copyFailed: 'Failed!',
      shareViaFacebook: 'Share via Facebook',
      shareViaVk: 'Share via VK',
      shareViaTwitter: 'Share via Twitter',
      shareViaLinkedIn: 'Share via LinkedIn',
    },
    recommendModal: {
      triggerButtonText: 'Recommend',
      title: 'Recommendation',
    },
    join: {
      title: 'Join the team',
      form: {
        name: 'Name',
        email: 'Email',
        link: 'Link to your CV or profile in social media',
        cv: 'Attach CV',
        submit: 'Submit',
        agreement: ({ LinkComponent }) => (
          <>
            {'By clicking the "Submit" button, you agree with our '}
            <LinkComponent href="/privacy-policy-en.pdf" target="_blank">
              privacy policy
            </LinkComponent>
          </>
        ),
        error: 'Unexpected error occurred',
        successTitle: 'Thank you for your application!',
        successDescription:
          'I will reply to you shortly. Looking forward to meet you on the interview!',
        successOkButton: 'Okay',
      },
      contacts: {
        telegram: 'Telegram',
        whatsapp: 'WhatsApp',
      },
      hrMessage: 'Irina replies all the emails and message from you',
      hrPhotoAlt: 'Hr photo',
      shareLinkIconAlt: 'share link',
      recommendationDescription:
        'Get Apple Watch for successful recommendation',
      appleWatchImageAlt: 'Apple Watch',
    },
  },
};
