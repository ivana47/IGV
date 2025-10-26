import  { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Gallery from './Components/Gallery/Gallery'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'
import GoogleMap from './Components/GoogleMap/GoogleMap'
import { BrowserRouter as Router, Route, Routes } from 'react-router'
import ImagesPage from './Components/ImagesPage/ImagesPage'
import Slider from './Components/Slider/Slider'

const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Title subTitle='Usluge' title='Otkrijte kako vam možemo pomoći' />
              <Programs />
              <Title subTitle='Galerija' title='Dio naših projekata' />
              <Gallery />
              <Title subTitle='Saradnje' title='Naši partneri' />
              <Slider />
              <Title subTitle='Kontakt' title='Kontaktirajte nas putem obrasca' />
              <Contact />
              <GoogleMap />
              <Footer />
              <VideoPlayer playState={playState} setPlayState={setPlayState} />
            </>
          } />
          <Route path='/images' element={<ImagesPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App