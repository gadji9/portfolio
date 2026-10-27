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
    metaTitle: "Гаджимурад Султанмагомедов — Fullstack / Frontend-разработчик",
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
        role: "Fullstack-разработчик",
        description:
            "Создаю веб-продукты целиком — от архитектуры и фронтенда до бэкенда и деплоя. Основной стек — React и TypeScript.",
        facts: [
            "5 лет коммерческой разработки",
            "Senior Frontend · X5 (5Post)",
            "React · TypeScript · Node.js",
        ],
        cta: {
            cv: "Скачать CV",
            telegram: "Telegram",
        },
    },
    about: {
        title: "Я Гаджимурад",
        itsMe: "Это я ;)",
        subtitle: "Fullstack-разработчик",
        stackTitle: "Технологии",
        stack: [
            "React",
            "Next.js",
            "TypeScript",
            "JavaScript",
            "Redux Toolkit",
            "Redux",
            "MobX",
            "React Query",
            "GraphQL",
            "Apollo",
            "REST API",
            "Node.js",
            "Express",
            "Nest.js",
            "HTML5",
            "CSS3",
            "SCSS",
            "Tailwind CSS",
            "MUI",
            "styled-components",
            "Jest",
            "React Testing Library",
            "Vitest",
            "Webpack",
            "Vite",
            "Git",
            "Docker",
            "CI/CD",
            "WebSocket",
        ],
        bio: [
            "Я живу в Республике Дагестан.",
            "Начал программировать в 13 лет. Я любил играть в игры, поэтому решил стать геймдевелопером. Начал с C#.",
            "По видеоурокам из интернета я получил достаточно знаний, чтобы создавать игры на Unity. Я с увлечением занимался этим делом и создавал игры одну за другой. Одну из них выложил в Google Play.",
            "В поисках возможности монетизировать свою деятельность я нашёл вакансию в соседнем городе — Vue JS.",
            "Поэтому я усердно начал изучать HTML, CSS, JS. К сожалению, меня не взяли из-за возраста.",
            "Через полгода обучения меня взяли в spichka dev бэкенд-разработчиком. У меня открылось второе дыхание.",
            "Мне очень понравилось учиться и общаться с коллегами, поэтому ещё через полгода я стал фулстеком. Так как задачи на бэкенде закончились, я попросил давать мне задачи по фронту. Так я начал своё погружение в React JS. С тех пор я изучаю его и стараюсь становиться всё лучше и лучше.",
            "Уровень английского — B2, тоже изучал самостоятельно.",
            "Я активно слежу за последними трендами и изменениями в IT, потому что эта сфера мне очень интересна, и я готов посвятить ей жизнь. Поэтому я ищу сильную команду, в которой смогу развиваться, узнавать новое и быть полезным.",
            "Если вам нужен мотивированный сотрудник, готовый развиваться и становиться лучше каждый день, — смело связывайтесь со мной, буду рад ответить ;)",
        ],
        experience: {
            title: "Опыт работы",
            total: "5 лет",
            jobs: [
                {
                    company: "X5 (5Post)",
                    role: "Senior Frontend-разработчик",
                    period: "Февраль 2025 — настоящее время",
                    summary:
                        "Веб-сервисы логистики и курьерской доставки 5Post: админ-панель, клиентский сайт, портал ПВЗ, внутренние сервисы.",
                    achievements: [
                        "Разработал с нуля React-приложение для сотрудников ПВЗ — используется во всех пунктах выдачи 5Post",
                        "Внедрил ИИ в процесс разработки (ревью кода, ИИ-агенты) — скорость выпуска фич +120%",
                        "Разработал и запустил дизайн-систему вместе с дизайнером — ускорил разработку зависимых приложений",
                        "Настроил генерацию API-документации через конфигурацию сборки — ускорил разработку и тестирование",
                    ],
                },
                {
                    company: "АстралСофт",
                    role: "Middle Frontend-разработчик",
                    period: "Август 2023 — февраль 2025",
                    summary:
                        "Астрал ЭДО — сервис электронного документооборота (doc.astral.ru). React, GraphQL, code review, тесты, общая архитектура и npm-пакеты.",
                    achievements: [
                        "Устранил 400+ циклических зависимостей — потребление памяти −25%, написал CI против их повторного появления",
                        "Оптимизировал рендер большого даталиста на 20%",
                        "Нашёл уязвимость, приводившую к падению сервера, и способствовал её устранению",
                    ],
                },
                {
                    company: "Spichka",
                    role: "Frontend-разработчик",
                    period: "Ноябрь 2021 — июнь 2023",
                    summary:
                        "E-commerce проекты: маркетплейс Splover, интернет-магазин Karjewy и админ-панели к ним.",
                    achievements: [
                        "Ускорил загрузку каталогов Karjewy в 3 раза — с 2.3 с до 0.7 с (кеш, поиск бага ререндера, оптимизация изображений)",
                    ],
                },
            ],
        },
        hard: "Hard skills",
        hardSkills: [
            "React, Next.js",
            "Redux, Redux Toolkit, MobX",
            "React Query, GraphQL, Apollo, REST API",
            "Jest, React Testing Library, Vitest",
            "HTML5, CSS3, SCSS, JavaScript, TypeScript",
            "Node.js, Express, Nest.js",
            "Docker, CI/CD",
            "Webpack, Vite, Git",
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
        commercialSubtitle:
            "Проекты, которые я делал на заказ и в командах компаний",
        internal: "Внутренний продукт",
        pet: "Пет-проекты",
        petSubtitle:
            "Проекты, которые пришли мне в голову или сделаны для практики новых технологий.",
        docsParagraph:
            "Сервис электронного документооборота с контрагентами. Работает как через 1С, так и в формате веб-кабинета в вашем браузере. Получение документов — бесплатно!",
        pvz: {
            name: "Pvz portal",
            description: "Портал приёма и выдачи заказов 5Post",
            result: "Разработал с нуля — используется во всех ПВЗ сети",
        },
        omni: {
            name: "Omni portal",
            description: "Админ-панель: заказы, склады, бизнес-процессы 5Post",
        },
        docs: {
            name: "Docs",
            description: "Электронный документооборот",
            result: "Убрал 400+ циклических зависимостей — память −25%",
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
            result: "Каталог грузится в 3 раза быстрее — 2.3 с → 0.7 с",
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
            description: "Аркадный 2D-раннер в Google Play",
        },
        hackerSM: {
            name: "Social Media",
            description: "Клон соцсети — в разработке",
        },
    },
};

const en: typeof ru = {
    metaTitle: "Gadjimurad Sultanmagomedov — Full-Stack / Front-End Developer",
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
        hiName: "Hi. I'm Gadjimurad",
        role: "Full-Stack Developer",
        description:
            "I build web products end-to-end — from architecture and frontend to backend and deployment. My core stack is React and TypeScript.",
        facts: [
            "5 years of commercial experience",
            "Senior Frontend at X5 (5Post)",
            "React · TypeScript · Node.js",
        ],
        cta: {
            cv: "Download CV",
            telegram: "Telegram",
        },
    },
    about: {
        title: "I'm Gadjimurad.",
        itsMe: "It's me ;)",
        subtitle: "I'm a full-stack developer working remotely from Dagestan.",
        stackTitle: "Tech stack",
        stack: [
            "React",
            "Next.js",
            "TypeScript",
            "JavaScript",
            "Redux Toolkit",
            "Redux",
            "MobX",
            "React Query",
            "GraphQL",
            "Apollo",
            "REST API",
            "Node.js",
            "Express",
            "Nest.js",
            "HTML5",
            "CSS3",
            "SCSS",
            "Tailwind CSS",
            "MUI",
            "styled-components",
            "Jest",
            "React Testing Library",
            "Vitest",
            "Webpack",
            "Vite",
            "Git",
            "Docker",
            "CI/CD",
            "WebSocket",
        ],
        bio: [
            "I live in the Republic of Dagestan.",
            "I started programming at the age of 13. I loved playing games, so I decided to become a game developer. Started with C#.",
            "From video tutorials on the Internet, I learned enough to create games on Unity. I was passionate about it and made games one after another. I published one of them on Google Play.",
            "Looking for a way to monetize what I was doing, I found a job opening in a nearby city — Vue JS.",
            "So I started studying HTML, CSS and JS. Unfortunately, they didn't hire me because of my age.",
            "After six months of studying, spichka dev hired me as a backend developer. I got my second wind.",
            "I loved learning and communicating with my colleagues, so six months later I became a full-stack developer. Backend tasks were running out, so I asked for frontend tasks. That's how I dove into React JS, and I've been studying it and getting better ever since.",
            "My English level is B2 — also self-taught.",
            "I actively follow the latest trends and changes in IT, because this field genuinely interests me and I'm ready to dedicate my life to it. That's why I'm looking for a strong team where I can grow, learn new things and be useful.",
            "If you need a motivated developer who is ready to grow and get better every day — feel free to get in touch, I'll be happy to answer ;)",
        ],
        experience: {
            title: "Experience",
            total: "5 years",
            jobs: [
                {
                    company: "X5 (5Post)",
                    role: "Senior Frontend Developer",
                    period: "February 2025 — present",
                    summary:
                        "Web services for 5Post logistics and courier delivery: admin panel, customer site, pickup-point portal, internal services.",
                    achievements: [
                        "Built a React application for pickup-point staff from scratch — now used across all 5Post pickup points",
                        "Introduced AI into the development process (code review, AI agents) — feature delivery speed +120%",
                        "Designed and launched a design system together with the designer — sped up development of dependent apps",
                        "Set up API docs generation via build config — faster development and testing",
                    ],
                },
                {
                    company: "AstralSoft",
                    role: "Middle Frontend Developer",
                    period: "August 2023 — February 2025",
                    summary:
                        "Astral EDO — electronic document management service (doc.astral.ru). React, GraphQL, code review, testing, shared architecture and npm packages.",
                    achievements: [
                        "Eliminated 400+ circular dependencies — memory usage −25%, wrote CI to prevent new ones",
                        "Optimized rendering of a huge data list by 20%",
                        "Found a vulnerability that crashed the server and helped fix it",
                    ],
                },
                {
                    company: "Spichka",
                    role: "Frontend Developer",
                    period: "November 2021 — June 2023",
                    summary:
                        "E-commerce projects: the Splover marketplace, the Karjewy online store and their admin panels.",
                    achievements: [
                        "Made Karjewy catalog pages load 3× faster — from 2.3 s to 0.7 s (caching, re-render bug hunt, image optimization)",
                    ],
                },
            ],
        },
        hard: "Hard skills",
        hardSkills: [
            "React, Next.js",
            "Redux, Redux Toolkit, MobX",
            "React Query, GraphQL, Apollo, REST API",
            "Jest, React Testing Library, Vitest",
            "HTML5, CSS3, SCSS, JavaScript, TypeScript",
            "Node.js, Express, Nest.js",
            "Docker, CI/CD",
            "Webpack, Vite, Git",
            "English — B2",
        ],
        soft: "Soft skills",
        softSkills: [
            "Creativity. Innovative, imaginative.",
            "Teamwork. Collaborative, cooperative.",
            "Adaptability. Flexible, responsive.",
            "Problem-solving. Analytical, logical.",
            "Growth mindset. Open-minded, optimistic.",
            "Self-study. Proactive, motivated, continuous.",
        ],
    },
    projects: {
        commercial: "Commercial",
        commercialSubtitle: "Projects I built for clients and company teams",
        internal: "Internal product",
        pet: "Pet projects",
        petSubtitle:
            "Projects that came to my mind or were made to practice new technologies.",
        docsParagraph:
            "Electronic document management service with contractors. It works both from 1C and in the web cabinet format in your browser. Getting documents is free!",
        pvz: {
            name: "Pvz portal",
            description: "5Post pickup-point portal",
            result: "Built from scratch — used across the whole network",
        },
        omni: {
            name: "Omni portal",
            description:
                "Admin panel: orders, warehouses, business processes of 5Post",
        },
        docs: {
            name: "Docs",
            description: "Electronic document management",
            result: "Eliminated 400+ circular dependencies — memory −25%",
        },
        splover: {
            name: "Splover",
            description: "Platforms and trainings marketplace",
        },
        sploverAdmin: {
            name: "Splover Admin",
            description: "Admin panel for Splover",
        },
        karjewy: {
            name: "Karjewy",
            description: "Online jewelry store",
            result: "Catalog loads 3× faster — 2.3 s → 0.7 s",
        },
        karjewyAdmin: {
            name: "Karjewy admin",
            description: "Admin panel for Karjewy",
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
            description: "Arcade 2D runner on Google Play",
        },
        hackerSM: {
            name: "Social Media",
            description: "Social network clone — WIP",
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
        document.title = translations[lang].metaTitle;
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

// eslint-disable-next-line react-refresh/only-export-components
export const useTranslation = (): ILanguageContext => {
    const ctx = useContext(LanguageContext);
    if (!ctx) {
        throw new Error("useTranslation must be used within LanguageProvider");
    }
    return ctx;
};
