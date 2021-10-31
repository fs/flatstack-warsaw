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
      imageAlt: 'Наша команда',
      alert:
        'Для работы над нашим крутым проектом вы должны находиться в Европе. Это требование клиента.',
      description:
        'Вы живете в России, Беларуси, Украине или другой стране СНГ? Мы можем помочь с релокацией в Польшу (город Варшава).',
      listTitle: 'Мы делаем это с заботой:',
      listItems: [
        'Помогаем с оформлением визы, карты резидента, всех необходимых документов и их переводами',
        'Мы свяжем вас с юристом, который ответит на все ваши вопросы по легализации',
        'Проходим весь процесс вместе!',
      ],
    },
    feedbacks: {
      title: 'Отзывы',
      items: [
        {
          person: 'Дима, Fullstack Developer',
          time: '1 год в команде',
          feedback:
            'Молодой современный коллектив профессионалов, дружеская атмосфера, всегда чувствуешь поддержку со стороны коллег. «Flatstack» ассоциируется у меня с современной ИТ-компанией, с новейшими технологиями и новейшими подходами в разработке, с очень интересными способами управления людьми и проектами. Если вы здесь работаете, вы всегда найдете интересные стартапы, тренинги по развитию навыков и крутые корпоративы.',
        },
        {
          person: 'Алина, Fullstack Developer',
          time: '3+ лет в команде',
          feedback:
            'Веселый, сплоченный коллектив, интересная «нескучная» работа, используются новейшие технологии. Хорошие офисные помещения, очень ценю своих коллег и атмосферу!',
        },
        {
          person: 'Аркадий, Fullstack Developer',
          time: '7+ лет в команде',
          feedback:
            'Классный клиент и проект. Крутые передовые технологии. Классные процессы, которые действительно работают. Здесь вы можете легко расти и получать разнообразный и разносторонний опыт. Комфортный и хорошо организованный переезд в Польшу. В целом все вполне демократично.',
        },
        {
          person: 'Аскар, Fullstack Developer',
          time: '9+ лет в команде',
          feedback:
            'Хороший офис, хорошие коллеги, фрукты каждую среду, демократичная организация работы. Принимаемые решения обоснованы и аргументированная критика всегда будет услышана. Это то, что я испытал здесь. «Flatstack» ассоциируется у меня с людьми, с которыми мне посчастливилось работать, с профессионалами своего дела и с умными ребятами.',
        },
      ],
    },
    warsaw: {
      title: 'Варшава',
      description:
        'Мы работаем в современном офисе, где вы всегда найдете подходящую атмосферу для работы, независимо от того, нужно ли вам уединенное место или нужно переключить свое внимание. Здесь есть места для парковки велосипедов, зона кафе, качели и даже сонная комната с климат-контролем.',
      videoAlt: 'Видео о Варшаве',
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
