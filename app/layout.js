import { Space_Grotesk } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    variable: '--font-space-grotesk',
    display: 'swap',
})

export const metadata = {
    title: 'Sanches - Software Engineer',
    description: 'Engineering scalable systems with advanced technology',
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
