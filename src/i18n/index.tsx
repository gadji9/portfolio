import {
    createContext,
    FunctionComponent,
    ReactNode,
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react";

export type Lang = "ru" | "en";

const ru = {
    header: {
        work: "Работы",
        about: "Обо мне",
    },
    footer: {
        elsewhere: "Соцсети",
        contact: "Контакты",
    },
    main: {
        hi: "Привет.",
        hiName: "Привет. Я Гаджимурад",
        role: "Web-разработчик",
        description:
            "Я также разрабатываю бэкенд и игры. Но прокачиваю фронтенд-навыки, потому что считаю, что это моё призвание",
    },
    about: {
        title: "Я Гаджимурад.",
        itsMe: "Это я ;)",
        subtitle: "Я Web-разработчик, работаю удалённо из Дагестана.",
        bio: [
            "Я живу в Республике Дагестан.",
            "Начал программировать в 13 лет. Я любил играть в игры, поэтому решил стать геймдевелопером. Начал с C#.",
            "По видеоурокам из интернета я получил достаточно знаний, чтобы создавать игры на Unity. Я с увлечением занимался этим делом и создавал игры одну за другой. Одну из них выложил в Google Play.",
            "В поисках возможности монетизировать свою деятельность я нашёл вакансию в соседнем городе — Vue JS.",
            "Поэтому я усердно начал изучать html, css, js. К сожалению, меня не взяли из-за возраста.",
            "Через полгода обучения меня взяли в spichka dev бэкенд-разработчиком. У меня открылось второе дыхание.",
            "Мне очень понравилось учиться и общаться с коллегами, поэтому ещё через полгода я стал фулстеком. Так как задачи на бэкенде закончились, я попросил давать мне задачи по фронту. Так я начал своё погружение в React JS. С тех пор (4 года) я изучаю его и стараюсь становиться всё лучше и лучше.",
            "Уровень английского — «B2». Тоже изучал самостоятельно.",
            "Я активно слежу за последними трендами и изменениями в IT, потому что эта сфера мне очень интересна, и я готов посвятить ей жизнь. Поэтому я ищу сильную команду, в которой смогу развиваться, узнавать новое и быть полезным.",
            "Если вам нужен мотивированный сотрудник, готовый развиваться и становиться лучше каждый день, — смело связывайтесь со мной, буду рад ответить ;)",
        ],
        hard: "Hard skills",
        hardSkills: [
            "React, Next js",
            "Redux, redux-toolkit ,Mobx",
            "React query, Graphql, Apollo, RestApi",
            "Jest, React-testing-library",
            "HTML5, Css3, Scss, JavaScript, TypeScript",
            "Node js, Express js, feathers js, Nest js",
            "Sequelize, Docker",
            "Webpack, Babel, Git",
            "Английский — B2",
        ],
        soft: "Soft skills",
        softSkills: [
            "Креативность. Инновационный, обладающий воображением.",
            "Командная работа. Взаимодействие, сотрудничество.",
            "Адаптивность. Гибкость, отзывчивость.",
            "Решение проблем. Аналитичность, логичность.",
            "Мышление роста. Открытость, оптимизм.",
            "Самообучение. Проактивность, мотивация, постоянство.",
        ],
    },
    projects: {
        commercial: "Коммерческие",
        commercialSubtitle: "Интересные проекты, которые я делал на заказ",
        pet: "Пет-проекты",
        petSubtitle:
            "Проекты, которые пришли мне в голову или сделаны для практики новых технологий.",
        docsParagraph:
            "Сервис электронного документооборота с контрагентами. Работает как через 1С, так и в формате веб-кабинета в вашем браузере. Получение документов — бесплатно!",
        pvz: {
            name: "Pvz portal",
            description: "Приложение для получения и выдачи заказов",
        },
        omni: {
            name: "Omni portal",
            description: "Админ-панель для сотрудников сети FivePost",
        },
        docs: {
            name: "Docs",
            description: "Электронный документооборот",
        },
        splover: {
            name: "Splover",
            description: "Маркетплейс платформ и тренингов",
        },
        sploverAdmin: {
            name: "Splover Admin",
            description: "Админ-панель для Splover",
        },
        karjewy: {
            name: "Karjewy",
            description: "Интернет-магазин украшений",
        },
        karjewyAdmin: {
            name: "Karjewy admin",
            description: "Админ-панель для Karjewy",
        },
        catTrap: {
            name: "Cattrap",
            description: "Поймай кота",
        },
        trello: {
            name: "Trello",
            description: "Копия Trello с drag and drop",
        },
        rinja: {
            name: "Rinja game",
            description: "Аркадный 2D-раннер",
        },
        hackerSM: {
            name: "Social Media",
            description: "(Скоро)",
        },
    },
};

const en: typeof ru = {
    header: {
        work: "Work",
        about: "About",
    },
    footer: {
        elsewhere: "Elsewhere",
        contact: "Contact",
    },
    main: {
        hi: "Hi.",
        hiName: "Hi.I am Gadjimurad",
        role: "A Web Developer",
        description:
            "I`m also a back-end developer and game developer. But, I develop front-end skills, because I think that this is my passion",
    },
    about: {
        title: "I`am Gadjimurad.",
        itsMe: "It`s me ;)",
        subtitle: "I'm a Web Developer working remotely from Dagestan.",
        bio: [
            "I live in the Republic of Dagestan.",
            "Started programming at the age of 13. I loved to play games, so i decided to become a game developer. Started with c#.",
            "From video tutorials on the Internet, I learned enough knowledge to create games on Unity. I was passionate about this business and created games one by one. I posted one of them on google play.",
            "In search of an opportunity to monetize my activities, I found a vacancy in a nearby city in Vue JS.",
            "Therefore, I diligently began to study html css js. Unfortunately, I was not hired because of my age.",
            "Within six months of studying, I was hired by spichka dev as a backend developer. I got my second wind.",
            "I really liked learning and communicating with my colleagues, so in another half a year I became a full stack. Since the tasks on the backend are over, I asked them to give me tasks on the front. So I started my dive into React JS. Since then (4 years), I have been studying it and trying to get better and better.",
            "English level - \"B2\" Also studied on my own.",
            "I actively follow the latest trends and changes in IT, because for me this area is very interesting, and I am ready to devote my life to it. Therefore, I am looking for a strong team in which I could develop, learn new things, be useful.",
            "If you need a motivated employee who is ready to develop and become better every day, then feel free to get in touch with me, I will be happy to answer ;)",
        ],
        hard: "Hard",
        hardSkills: [
            "React, Next js",
            "Redux, redux-toolkit ,Mobx",
            "React query, Graphql, Apollo, RestApi",
            "Jest, React-testing-library",
            "HTML5, Css3, Scss, JavaScript, TypeScript",
            "Node js, Express js, feathers js, Nest js",
            "Sequelize, Docker",
            "Webpack, Babel, Git",
            "English - B2",
        ],
        soft: "Soft",
        softSkills: [
            "Creativity. Innovative, imaginative.",
            "Teamwork. Collaborative, cooperative.",
            "Adaptability. Flexible, responsive.",
            "Problem-solving. Analytical, logical.",
            "Growth Mindset. Open-minded, optimistic.",
            "Self-Study. Proactive, motivated, continuous.",
        ],
    },
    projects: {
        commercial: "Commercial",
        commercialSubtitle:
            "These are interesting projects that I`ve made on order",
        pet: "Pet",
        petSubtitle:
            "These are interesting projects that come to my mind, or for practicing new technologies.",
        docsParagraph:
            "Electronic document management service with contractors. It works both from 1C and in the web cabinet format in your browser. Getting documents is free!",
        pvz: {
            name: "Pvz portal",
            description: "Application for receiving and issuing orders",
        },
        omni: {
            name: "Omni portal",
            description: "Admin panel for FivePost network employees",
        },
        docs: {
            name: "Docs",
            description: "Electronic document management",
        },
        splover: {
            name: "Splover",
            description: "Platforms, trainings marketplace",
        },
        sploverAdmin: {
            name: "Splover Admin",
            description: "Admin panel for splover",
        },
        karjewy: {
            name: "Karjewy",
            description: "Online jewelry shop",
        },
        karjewyAdmin: {
            name: "Karjewy admin",
            description: "Admin panel for karjewy",
        },
        catTrap: {
            name: "Cattrap",
            description: "Catch a cat",
        },
        trello: {
            name: "Trello",
            description: "Trello copy with drag and drop",
        },
        rinja: {
            name: "Rinja game",
            description: "Arcade 2d runner",
        },
        hackerSM: {
            name: "Social Media",
            description: "(Coming soon)",
        },
    },
};

const translations: Record<Lang, typeof ru> = { ru, en };

interface ILanguageContext {
    lang: Lang;
    toggleLang: () => void;
    strings: typeof ru;
}

const LanguageContext = createContext<ILanguageContext | null>(null);

const STORAGE_KEY = "portfolio-lang";

const getInitialLang = (): Lang => {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved === "ru" || saved === "en") {
            return saved;
        }
    } catch {
        // localStorage unavailable — fall back to default
    }
    return "ru";
};

export const LanguageProvider: FunctionComponent<{ children: ReactNode }> = ({
    children,
}) => {
    const [lang, setLang] = useState<Lang>(getInitialLang);

    useEffect(() => {
        document.documentElement.lang = lang;
    }, [lang]);

    const toggleLang = useCallback(() => {
        setLang((prev) => {
            const next: Lang = prev === "ru" ? "en" : "ru";
            try {
                localStorage.setItem(STORAGE_KEY, next);
            } catch {
                // ignore persistence errors
            }
            return next;
        });
    }, []);

    return (
        <LanguageContext.Provider
            value={{ lang, toggleLang, strings: translations[lang] }}
        >
            {children}
        </LanguageContext.Provider>
    );
};

export const useTranslation = (): ILanguageContext => {
    const ctx = useContext(LanguageContext);
    if (!ctx) {
        throw new Error("useTranslation must be used within LanguageProvider");
    }
    return ctx;
};
