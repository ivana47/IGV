import  { useState } from 'react';
import './ImagesPage.css';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Footer from '../Footer/Footer';
import imageDescriptionsJson from '../../assets/data/imageDescriptions.json';
import type { Slide } from 'yet-another-react-lightbox';

<link rel="preload" as="image" href="../../assets/pozadina_galerija.png" />


interface CustomSlide extends Slide {
  title?: string;
}


//mozda record
interface ImageDescriptionJson {
  [folderName: string]: {
    [filename: string]: string;
  };
}



// KORISTIIII LAZY LOADINNNGGGG
//JPG morasss formatirati
const formatImages = (images: { src: string }[], folderName: string): CustomSlide[] =>
  images.map((image) => {
    const pathParts = image.src.split('/');
    const filename = pathParts[pathParts.length - 1];
    const description =
      (imageDescriptionsJson as ImageDescriptionJson)[folderName]?.[filename] || '';
    return {
      src: image.src,
      title: description
    };
  });

const vatrostalniImages = formatImages(
  Object.values(
    import.meta.glob('../../assets/Vatrostalstvo/*.{png,jpg,JPG,jpeg,svg}', { eager: true })
  ).map((image: any) => ({ src: image.default })),
  'Vatrostalstvo'
);

const termoizolacijaImages = formatImages(
  Object.values(
    import.meta.glob('../../assets/Termoizolacija/*.{png,jpg,jpeg,svg}', { eager: true })
  ).map((image: any) => ({ src: image.default })),
  'Termoizolacija'
);

const skelaImages = formatImages(
  Object.values(
    import.meta.glob('../../assets/Skela/*.{png,jpg,jpeg,svg}', { eager: true })
  ).map((image: any) => ({ src: image.default })),
  'Skela'
);


const ImagesPage = () => {
  const [activeGallery, setActiveGallery] = useState<'vatrostalni' | 'termoizolacija' | 'skela' | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const images: CustomSlide[] = activeGallery === 'vatrostalni'
    ? vatrostalniImages
    : activeGallery === 'termoizolacija'
      ? termoizolacijaImages
      : skelaImages;

  return (
    <div>
      <div className="app-container">
        <div className="page-content">
          <div className='heroImages'>
            <div className='hero-images-text'>
              <h1>Galerija i reference</h1>
            </div>
          </div>
          <div className="buttons-container">
            <button onClick={() => setActiveGallery('termoizolacija')}>Termoizolacija</button>
            <button onClick={() => setActiveGallery('vatrostalni')}>Vatrostalstvo</button>
            <button onClick={() => setActiveGallery('skela')}>Cijevna skela</button>
          </div>
          {/* Prikaz odgovarajuce galerije */}
          <div className="gallery-container">
            {activeGallery &&
              images.map((img, index) => (
                <img
                  key={index}
                  src={img.src}
                  alt={`Slika ${index + 1}`}
                  onClick={() => setLightboxIndex(index)}
                  className="gallery-image"
                />
              ))}
          </div>
        </div>
        <Footer />
        {/* Lightbox */}
        {lightboxIndex !== null && (
          <Lightbox
            slides={images}
            open={lightboxIndex !== null}
            index={lightboxIndex}
            close={() => setLightboxIndex(null)}
            controller={{ closeOnBackdropClick: true }}
            plugins={[Thumbnails]}
            render={{
              slide: ({ slide }) => {
                const customSlide = slide as CustomSlide;
                return (
                  <>
                    <img src={customSlide.src} style={{
                      maxWidth: '95vw',
                      maxHeight: '95vh',
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain',
                      display: 'block',
                      margin: '0 auto'
                    }} alt="" />
                    {customSlide.title && (
                      <div
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          backgroundColor: 'rgba(0, 0, 0, 0.6)', // poluprovidna crna/siva
                          color: '#fff',
                          padding: '15px 25px',

                        }}
                      ><p className="details">

                          {customSlide.title}
                        </p>
                      </div>
                    )}
                  </>
                );
              },
            }}
          />


        )}
      </div>
    </div>
  );
};

export default ImagesPage;