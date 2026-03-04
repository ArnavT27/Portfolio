import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import SelectedWorks from '@/components/SelectedWorks'
import Achievements from '@/components/Achievements'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import BackgroundTracker from '@/components/BackgroundTracker'
import CustomCursor from '@/components/CustomCursor'
import TechMarquee from '@/components/TechMarquee'

export default function Home() {
    return (
        <main className="relative">
            <BackgroundTracker />
            <CustomCursor />
            <Header />
            <Hero />
            <About />
            <Services />
            <SelectedWorks />
            <Achievements />
            <CTA />
            <Footer />
            <TechMarquee />
        </main>
    )
}
