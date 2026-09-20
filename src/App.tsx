import { lazy, Suspense } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Gallery from './Components/Gallery/Gallery'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import GoogleMap from './Components/GoogleMap/GoogleMap'
import { BrowserRouter as Router, Route, Routes } from 'react-router'
import Slider from './Components/Slider/Slider'
import { useTranslation } from 'react-i18next'

const ImagesPage = lazy(() => import('./Components/ImagesPage/ImagesPage'))

const App = () => {
  const [t] = useTranslation("global");

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Title subTitle={t('titles.services.subTitle')} title={t('titles.services.title')} />
              <Programs />
              <Title subTitle={t('titles.gallery.subTitle')} title={t('titles.gallery.title')} />
              <Gallery />
              <Title subTitle={t('titles.partners.subTitle')} title={t('titles.partners.title')} />
              <Slider />
              <Title subTitle={t('titles.contact.subTitle')} title={t('titles.contact.title')} />
              <Contact />
              <GoogleMap />
              <Footer />
            </>
          } />
          <Route path='/images' element={
            <Suspense fallback={null}>
              <ImagesPage />
            </Suspense>
          } />
        </Routes>
      </div>
    </Router>
  )
}

export default App