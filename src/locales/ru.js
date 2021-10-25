export default {
  translations: {
    title: 'Flatstack Варшава',
    metaDescription:
      'Мы — Flatstack и мы нанимает инженеров для нашего офиса в Варшаве. Присоединяйся к нам!',
    metaKeywords:
      'flatstack, software engineer, ruby on rails, warsaw, hiring, вакансия, релокейт',
    'og:title': 'Flatstack Варшава. Присоединяйся к нам!',
    'og:description':
      'Мы — Flatstack и мы нанимает инженеров для нашего офиса в Варшаве. Присоединяйся к нам!',
    logoAlt: 'Логотип Flatstack',
    menu: {
      vacancy: 'Вакансии',
      relocation: 'Релокация',
      feedbacks: 'Отзывы',
      warsaw: 'Варшава',
    },
    hero: {
      subtitle: ({ Highlight }) => (
        <>
          в Варшаву <Highlight>&#123;с релокацией&#125;</Highlight>
        </>
      ),
      actions: {
        apply: 'Откликнуться',
      },
    },
    vacancy: {
      aboutFlatstack: 'О компании Flatstack',
    },
    relocation: {
      title: 'Релокация',
    },
    feedbacks: {
      title: 'Отзывы',
    },
    warsaw: {
      title: 'Варшава',
    },
    shareModal: {
      triggerButtonText: 'Поделиться',
      title: 'Поделиться',
      copy: 'Копировать',
      copySuccess: 'Скопировано!',
      copyFailed: 'Ошибка!',
      shareViaFacebook: 'Поделиться в Facebook',
      shareViaVk: 'Поделиться в ВКонтакте',
      shareViaTwitter: 'Поделиться в Twitter',
      shareViaLinkedIn: 'Поделиться в LinkedIn',
    },
    recommendModal: {
      triggerButtonText: 'Рекомендовать',
      title: 'Рекомендация',
      form: {
        submit: 'Отправить',
        agreement: ({ LinkComponent }) => (
          <>
            {'Нажимая кнопку "Отправить", вы даёте соглашение с нашей '}
            <LinkComponent href="/privacy-policy-ru.pdf" target="_blank">
              политикой конфиденциальности
            </LinkComponent>
          </>
        ),
        aboutYou: 'О Вас',
        aboutRecommendee: 'О рекомендуемом',
        yourName: 'Ваше имя',
        yourEmail: 'Ваш Email',
        yourPhone: 'Ваш номер телефона (не обязательно)',
        recommendeeName: 'Имя рекомендуемого',
        recommendeeEmail: 'Email рекомендуемого',
        recommendeePhone: 'Номер телефона рекомендуемого (не обязательно)',
        recommendeeComment: 'Комментарий (не обязательно)',
      },
    },
    join: {
      title: 'Присоединиться к команде',
      form: {
        name: 'Имя',
        email: 'Email',
        link: 'Ссылка на CV или на профиль в социальных сетях',
        cv: 'Приложить CV',
        submit: 'Отправить',
        agreement: ({ LinkComponent }) => (
          <>
            {'Нажимая кнопку "Отправить", вы даёте соглашение с нашей '}
            <LinkComponent href="/privacy-policy-ru.pdf" target="_blank">
              политикой конфиденциальности
            </LinkComponent>
          </>
        ),
        error: 'Произошла непредвиденная ошибка',
        successTitle: 'Спасибо за отклик!',
        successDescription:
          'Я отвечу Вам в скором времени. C нетерпением ждём Вас на интервью!',
        successOkButton: 'OK',
      },
      contacts: {
        telegram: 'Telegram',
        whatsapp: 'WhatsApp',
      },
      hrMessage: 'Ирина ответит на все эмейлы и сообщения от вас',
      hrPhotoAlt: 'Hr photo',
      shareLink: 'поделиться ссылкой',
      recommendationDescription: 'Получи Apple Watch за успешную рекомендацию',
      appleWatchImageAlt: 'Apple Watch',
    },
  },
};
