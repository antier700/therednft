import Header from '../../components/common/header/Header'
import HeroSection from './sections/HeroSection/HeroSection'
import WhoWeAre from './sections/WhoWeAre/WhoWeAre'
import OurVision from './sections/OurVision/OurVision'
import OurMission from './sections/OurMission/OurMission'
import OurValues from './sections/OurValues/OurValues'
import OurImpact from './sections/OurImpact/OurImpact'
import JoinUs from './sections/JoinUs/JoinUs'
import ContactUs from './sections/ContactUs/ContactUs'
import Footer from '../../components/common/footer/Footer'
import './AboutPage.scss'

const AboutPage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <WhoWeAre />
      <OurVision />
      <OurMission />
      <OurValues />
      <OurImpact />
      <JoinUs />
      <ContactUs />
      <Footer />
    </>
  )
}

export default AboutPage
