const translations = {
  'og:title':
    'Вакансия – Fullstack Developer (Rails, TypeScript), Варшава (релокация)',
  'og:description':
    'Ищешь большой, технически сложный проект с красивой архитектурой? Присоединяйся к нашей команде в Варшаве! Помогаем с переездом, даем MacBook, отпуск 38 дней, мед. страховка. Удаленка только из EU.',
  hero: {
    subtitle: ({ Highlight }) => (
      <>
        в Варшаву <Highlight>&#123;с релокацией&#125;</Highlight>
      </>
    ),
    salary: '$3,500–5,000 net',
    actions: {
      apply: 'Откликнуться',
    },
  },
  shareModal: {
    triggerButtonText: 'Поделиться',
    title: 'Поделиться',
    copy: 'Копировать',
    copySuccess: 'Скопировано!',
    copyFailed: 'Ошибка!',
    shareViaFacebook: 'Поделиться в Facebook',
    shareViaTelegram: 'Поделиться в Telegram',
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
          {'Нажимая кнопку "Отправить", вы соглашаетесь с нашей '}
          <LinkComponent href="/privacy-policy-ru.pdf" target="_blank">
            Политикой конфиденциальности
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
    hrMessage: 'Ирина отвечает на все письма и сообщения от вас',
    hrPhotoAlt: 'Hr photo',
    shareLink: 'поделиться ссылкой',
    recommendationDescription:
      'Получи денежный бонус $700 - $1,700 за успешную рекомендацию',
  },
  form: {
    requiredText: ({ AsteriskWrapper }) => (
      <>
        <AsteriskWrapper>*</AsteriskWrapper> - обязательные поля
      </>
    ),
  },
};

// we need some values only during build-time while generating HTML
// and we don't need them in browser
if (typeof window === 'undefined') {
  Object.assign(translations, {
    title:
      'Вакансия – Fullstack Developer (Rails, TypeScript), Варшава (релокация)',
    metaDescription:
      'Вакансия в офисе Flatstack в Варшаве. Помогаем с релокацией из RU&CIS, удаленка возможна только из EU. Технически сложный проект, сильная команда. Присоединяйся!',
    metaKeywords:
      'flatstack, software engineer, fullstack разработчик, ruby on rails, typescript, aws, работа в Варшава, hiring, вакансия, релокейт',
    logoAlt: 'Логотип Flatstack',
    menu: {
      vacancy: 'Вакансии',
      company: 'Компания',
      relocation: 'Релокация',
      feedbacks: 'Отзывы',
      warsaw: 'Варшава',
    },
    company: {
      title: 'О Flatstack',
      description:
        'Мы создаем программное обеспечение с 2006 года для клиентов в США, Европе и других странах. Наши проекты помогают людям решать реальные проблемы, меняя жизнь к лучшему. У нас более 100 талантливых программистов, дизайнеров, менеджеров проектов и QA, которые работают вместе, создавая потрясающие вещи.',
      flatstackImageAlt: 'Команда Flatstack',
      flatstackWarsawImageAlt: 'Офис в Варшаве',
      flatstackNewOrleansImageAlt: 'Офис в Новом Орлеане',
      flatstackAntalyaImageAlt: 'Офис в Анталии',
    },
    vacancy: {
      vacancyDescription:
        'Мы ищем Software Engineer, имеющего опыт работы с большой кодовой базой, сложной архитектурой и подходом Infrastructure as Code.',
      aboutProduct: {
        description:
          'Продукт, над которым работаем - из сферы GRC (Governance, Risk Management, Compliance)',
        items: [
          'оптимизирует процессы оценки рисков',
          'автоматизирует процессы проверки на соблюдение нормативных требований (SOX, GDPR и т.д.)\n',
          'оптимизирует процессы разработки корпоративных политик',
        ],
      },
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
          'Изучение новых технологий (например, Serverless, Terraform), обмен опытом и поддержка коллег в их росте (посредством code-review, sharing-sessions и т.д.)',
        ],
      },
      workOrganisation: {
        title: 'Организация работы',
        items: [
          'Чтобы глубже погрузиться в проект, у вас будет доступ к библиотеке обучающих видео курсов, рассказывающих о нашем проекте',
          'Грамотно выстроенные процессы позволят вам сосредоточиться на важном',
          'Команда поможет легко интегрироваться в проект',
          'Мы не занимаемся микро-менеджментом, но ожидаем своевременных и качественных результатов',
          'Вы получите обратную связь о проделанной работе. Отличная работа - всегда предмет гордости!',
        ],
      },
      requirements: {
        title: 'Навыки и опыт',
        items: [
          'Стэк: Rails, PostgreSQL, React.js., REST, TDD, Docker, AWS, Terraform, TypeScript, Serverless',
          'Если у вас нет каких-либо знаний из стэка, нам важно, чтобы у вас было желание и готовность эти знания получить',
          'Вы пишете чистый код, заботитесь о его качестве и понимаете, как выстроить процесс деплоя этого кода на продакшн',
          'Опыт создания надежного, масштабируемого и безопасного RESTful API будет преимуществом',
          'Креативные идеи, умение работать в команде и следование рабочей этике помогут вам быть успешными в работе с нами',
          'Уровень владения английским языком должен позволять вам свободно вести деловую переписку, обсуждать технические детали и организационные моменты. Разговорный, письменный английский и чтение - обязательны',
        ],
      },
      benefits: {
        title: 'Преимущества',
        items: [
          '38 дней отпуска в год. Можно использовать даже 3 недели подряд, например, для путешествия, или 1-3 дня для решения бытовых вопросов',
          'MacBook для каждого сотрудника',
          'Медицинская страховка и годовой бюджет на частное здравоохранение',
          'Бюджет на дополнительные льготы на ваш выбор (от конференций и курсов до покупки велосипеда)',
          'Современный офис',
          'Возможность работы удаленно (из Европы)',
          'Организация и поддержка переезда, если он вам необходим (смотрите подробности ниже)',
        ],
      },
      apply: 'Откликнуться',
    },
    relocation: {
      title: 'Релокация',
      imageAlt: 'Наша команда',
      alert:
        'Для работы над нашим крутым проектом вы должны находиться в Европе или Турции. Это требование клиента.',
      description:
        'Хотите жить в Европе? Мы можем помочь с релокацией в Польшу (город Варшава)',
      listTitle: 'Мы делаем это с заботой:',
      listItems: [
        'Помогаем с оформлением визы, всех необходимых документов и их переводами',
        'Мы помогаем с поиском жилья и трансфером',
        'Мы делаем для вас карту резидента',
        'Мы предоставляем юриста, который будет вести вас до получения ВНЖ и ответит на все ваши вопросы по легализации',
        'Мы проходим весь процесс вместе, чтобы для вас он был максимально комфортным!',
      ],
    },
    feedbacks: {
      title: 'Отзывы',
      items: [
        {
          title: 'Дима, Fullstack Developer',
          teamTime: '1 год в команде',
          feedback:
            'Молодая современная команда профессионалов, дружеская атмосфера в коллективе, всегда чувствуешь поддержку от коллег. Flatstack ассоциируется как современная it компания с современными подходами в разработке, новые технологии и очень интересным подходом в управлении работниками и проектами. Если работаешь здесь, значит это всегда интересные стартапы, тренинги для повышения квалификации и классные корпоративы.',
        },
        {
          title: 'Алина, Fullstack Developer',
          teamTime: '3+ лет в команде',
          feedback:
            'Веселый дружный коллектив, нескучная работа, использование новых для нас технологий. Хороший офис, ценю своих коллег и атмосферу.',
        },
        {
          title: 'Аркадий, Fullstack Developer',
          teamTime: '7+ лет в команде',
          feedback:
            'Крутой заказчик и проект. Классные новые технологии. Крутые процессы, которые реально работают. Тут легко вырасти и получить очень разносторонний опыт. Классно организованный переезд в Польшу. В целом все довольно демократично.',
        },
        {
          title: 'Аскар, Fullstack Developer',
          teamTime: '9+ лет в команде',
          feedback:
            'Хороший офис, неплохие коллеги, фрукты по средам) Демократичная организация труда.\n' +
            'Возможность работать с современными компаниями. Убедился, что принимаемые решения обоснованы и аргументированная критика всегда будет услышана.\n' +
            'Компания ассоциируется с людьми с которыми посчастливилось работать, с профессионалами в своем деле и с умными ребятами.\n',
        },
      ],
    },
    warsaw: {
      title: 'Наш офис в Варшаве',
      description:
        'Мы работаем в современном офисе, где вы всегда найдёте подходящую атмосферу для работы, независимо от того, нужно ли вам уединённое место или нужно переключить свое внимание. Здесь есть места для парковки велосипедов, зона кафе, качели и даже комната для сна с климат-контролем.',
      address: 'Варшава, Konstruktorska 11, 02-673',
      imageAlt: 'Наш офис в Варшаве',
    },
  });
}

export default {
  translations,
};
