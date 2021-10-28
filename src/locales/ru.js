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
      vacancyDescription:
        'Мы ищем инженера-программиста, имеющего опыт работы с большой кодовой базой, сложной архитектурой и подходом Infrastructure as Code.',
      aboutProduct:
        'Продукт относится к сфере GRC (управление, управление рисками, соблюдение нормативных требований) для глобального рынка.',
      role: {
        title: 'Роль',
        items: [
          'Работа над технически сложным проектом с красивой архитектурой и современным подходом к разработке',
          'Применение кругозора и опыта для нахождения нестандартных решений',
          'Работа в большой международной команде fullstack-разработчиков',
          'Участие в разработке новых SPA и обслуживании уже существующих',
          'Разделение монолитного приложения на микросервисы',
          'Покрытие тестами: юнит-тесты (Jest), интеграционные тесты (Cypress)',
          'Использование различных инструментов (управление инфраструктурой, аналитика, CI и многих других)',
          'Изучение новых технологий (например, Serverless, Terraform), шеринг своих знаний и поддержка коллег в их росте (посредством Code Review, sharing sessions и т.д.',
        ],
      },
      workOrganisation: {
        title: 'Организация работы',
        items: [
          'Чтобы глубже погрузиться в проект, у вас будет доступ к ряду обучающих курсов (с видео), рассказывающих о нашем проекте',
          'Грамотно выстроенные процессы позволят вам сосредоточиться на важном',
          'Команда окажет помощь с интеграцией в проект',
          'Мы не занимаемся микроменеджментом, но ожидаем своевременных и качественных результатов',
          'Вы получите обратную связь о проделанной работе. Отличная работа - всегда предмет гордости!',
        ],
      },
      requirements: {
        title: 'Навыки и опыт',
        items: [
          'Стэк: Rails, PostgreSQL, React.js., REST, TDD, Docker, AWS, Terraform, TypeScript, Serverless.',
          'Возможно, у вас есть не все знания из этого списка, но вы должны быть готовы к изучению',
          'Вы пишете качественный код и понимаете, как он этот код оказывается и работает на продакшене',
          'Наличие опыта создания надежного, масштабируемого и безопасного RESTful API будет преимуществом',
          'У вас есть творческие идеи, стремление к сотрудничеству и командной работе.',
          'Ваш уровень знания английского языка должен позволять вам свободно вести деловую переписку, обсуждать технические детали и организационные моменты. Разговорная речь, написание текстов, чтение – обязательно.',
        ],
      },
      benefits: {
        title: 'Преимущества',
        items: [
          '38 PTO (оплачиваемых выходных) в году. Можно использовать даже 3 недели подряд для путешествия, или 1-3 дня для бытовых нужд',
          'MacBook для каждого сотрудника',
          'Годовой бюджет на частное здравоохранение',
          'Бюджет на дополнительные покупки, связанные с работой, по вашему выбору',
          'Современный офис',
          'Возможность работы удаленно (из Европы)',
          'Руководство и поддержка при переезде, если вам это нужно (смотрите подробности ниже)',
        ],
      },
      apply: 'Откликнуться',
    },
    relocation: {
      title: 'Релокация',
      fsPhotoAlt: 'Flatstack в горах в Польше',
      requirement:
        'Для работы над нашим крутым проектом вы должны жить в Европе. Это требование клиента.',
      relocationFrom:
        'Вы живете в России, Беларуси, Украине или другой стране СНГ? Мы можем помочь с релокацией в Польшу (город Варшава).',
      helpWith: {
        title: 'Мы делаем это с заботой:',
        items: [
          'Помогаем с оформлением визы, карты резидента, всей необходимой документации и ее переводом.',
          'Мы свяжем вас с юристом, который предоставит вам юридические данные.',
          'Проходим весь процесс вместе!',
        ],
      },
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
        error: 'Произошла непредвиденная ошибка',
        successMessage:
          'Спасибо за рекомендацию. В ближайшее время мы свяжемся с Вами и человеком, которого Вы порекомендовали.',
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
        facebook: 'Facebook',
        email: 'join@flatstack.com',
      },
      hrMessage: 'Ирина ответит на все эмейлы и сообщения от вас',
      hrPhotoAlt: 'Hr photo',
      shareLink: 'поделиться ссылкой',
      recommendationDescription: 'Получи Apple Watch за успешную рекомендацию',
      appleWatchImageAlt: 'Apple Watch',
    },
  },
};
