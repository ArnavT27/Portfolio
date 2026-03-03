/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                dark: '#050505',
            },
            fontFamily: {
                sans: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
