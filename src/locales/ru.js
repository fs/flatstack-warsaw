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
      relocations: 'Релокация',
      feedbacks: 'Отзывы',
      warsaw: 'Варшава',
    },
    hero: {
      title: ({ LineWrapper }) => (
        <>
          <LineWrapper>Привет! Мы — Flatstack!</LineWrapper>
          <br />
          <LineWrapper>
            Мы нанимает инженеров для нашего офиса в Варшаве.
          </LineWrapper>
          <br />
          <LineWrapper>Присоединяйся к нам!</LineWrapper>
        </>
      ),
      joinButton: 'Присоедениться',
    },
    jobDescription: {
      title: 'Кого мы ищем?',
    },
    aboutProject: {
      title: 'О проекте',
    },
    aboutTeam: {
      title: 'О команде',
    },
    join: {
      title: 'Присоединяйся к нам!',
    },
  },
};
