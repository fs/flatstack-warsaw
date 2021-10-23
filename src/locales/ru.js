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
        recommend: 'Рекомендовать',
        share: 'Поделиться',
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
      title: 'Поделиться',
      copy: 'Копировать',
      copySuccess: 'Скопировано!',
      copyFailed: 'Ошибка!',
      shareViaFacebook: 'Поделиться в Facebook',
      shareViaVk: 'Поделиться в ВКонтакте',
      shareViaTwitter: 'Поделиться в Twitter',
      shareViaLinkedIn: 'Поделиться в LinkedIn',
    },
    join: {
      title: 'Присоединиться к команде',
      form: {
        name: 'Имя',
        email: 'Email',
        link: 'Ссылка на CV или на профиль в социальных сетях',
        cv: 'Приложить CV',
        submit: 'Отправить',
        agreement: 'Нажимая кнопку "Отправить", вы даёте соглашение с нашей',
        privacyPolicy: 'политикой конфиденциальности',
      },
      hrMessage: 'Ирина ответит на все эмейлы и сообщения от вас',
      hrPhotoAlt: 'Hr photo',
      share: 'Поделиться',
      shareLink: 'поделиться ссылкой',
      recommendationDescription: 'Получи Apple Watch за успешную рекомендацию',
      recommendationLinkText: 'Рекомендовать',
    },
  },
};
