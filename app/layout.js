import { Space_Grotesk } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    variable: '--font-space-grotesk',
    display: 'swap',
})

export const metadata = {
    title: 'Arnav Taneja - Software Developer',
    description: 'Third-year CS student at IIIT Pune | Building innovative solutions with cloud, AI/ML, and full-stack technologies',
    icons: {
        icon: '/favicon.ico',
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={spaceGrotesk.variable}>
            <body className="bg-[#050505] text-white antialiased font-sans">
                {children}
            </body>
        </html>
    )
}
