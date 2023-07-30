export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                white: "rgb(209,209,209)",
            },
            fontSize: {
                body: "var(--font-body)",
                h2: "var(--font-h2)",
                h1: "var(--font-h1)",
            },
            padding: {
                pagePaddingTop: "var(--page-padding-top)",

                xlPagePaddingX: "var(--page-padding-x-xl)",
                lgPagePaddingX: "var(--page-padding-x-lg)",
                mdPagePaddingX: "var(--page-padding-x-md)",
            },
        },
    },
    plugins: [],
};
