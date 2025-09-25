/** @type {import('tailwindcss').Config} */
const config = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                dmserif: ['"DM Serif Display"', 'serif'],
            },
        },
    },
    plugins: [],
};

export default config;
