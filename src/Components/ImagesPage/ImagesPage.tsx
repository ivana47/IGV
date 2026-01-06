import { useState } from "react";
import "./ImagesPage.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Footer from "../Footer/Footer";
import type { Slide } from "yet-another-react-lightbox";
import playIcon from "../../assets/play3.jpg";
import { useTranslation } from "react-i18next";

interface CustomSlide extends Slide {
  title?: string;
  video?: boolean;
}

const formatImages = (
  images: { src: string }[],
  folderName: string,
  t: (key: string, options?: any) => string
): CustomSlide[] => {
  const sortedImages = images.sort((a, b) => {
    const nameA = a.src.split("/").pop()!;
    const nameB = b.src.split("/").pop()!;
    const numA = parseInt(nameA.match(/\d+/)?.[0] || "0", 10);
    const numB = parseInt(nameB.match(/\d+/)?.[0] || "0", 10);
    return numA - numB;
  });

  return sortedImages.map((image) => {
    const hashedFilename = image.src.split("/").pop()!; // slika11-BJN1-dP4.jpg

    // izvuci originalno ime bez hash-a
    const originalFilenameMatch = hashedFilename.match(/^(slika\d+)\./);
    const originalFilename = originalFilenameMatch ? `${originalFilenameMatch[1]}.jpg` : hashedFilename;

    const description = t(originalFilename, {
      ns: "imageDescriptions",
      keyPrefix: folderName,
      defaultValue: "",
    });

    return {
      src: image.src,      // hashirana putanja
      title: description,  // i18n tekst
      video: false,
    };
  });
};


const ImagesPage = () => {
  const { t } = useTranslation(["global", "imageDescriptions"]);

  const [activeGallery, setActiveGallery] = useState<
    "vatrostalni" | "termoizolacija" | "skela" | null
  >(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // --- IMAGES ---
  const vatrostalniImages = formatImages(
    Object.values(
      import.meta.glob("../../assets/Vatrostalstvo/*.{png,jpg,JPG,jpeg,svg}", {
        eager: true,
      })
    ).map((image: any) => ({ src: image.default })),
    "Vatrostalstvo",
    t
  );

  const termoizolacijaImages = formatImages(
    Object.values(
      import.meta.glob("../../assets/Termoizolacija/*.{png,jpg,jpeg,svg}", {
        eager: true,
      })
    ).map((image: any) => ({ src: image.default })),
    "Termoizolacija",
    t
  );

  const skelaImages = formatImages(
    Object.values(
      import.meta.glob("../../assets/Skela/*.{png,jpg,jpeg,svg}", {
        eager: true,
      })
    ).map((image: any) => ({ src: image.default })),
    "Skela",
    t
  );

  // --- VIDEOS ---
  const vatrostalniVideo: CustomSlide[] = Object.values(
    import.meta.glob("../../assets/Vatrostalstvo/video.mp4", { eager: true })
  ).map((video: any) => ({
    src: video.default,
    video: true,
    type: "image",
    thumbnail: playIcon,
  }));

  const termoizolacijaVideo: CustomSlide[] = Object.values(
    import.meta.glob("../../assets/Termoizolacija/video.mp4", { eager: true })
  ).map((video: any) => ({
    src: video.default,
    video: true,
    thumbnail: playIcon,
  }));

  const skelaVideo: CustomSlide[] = Object.values(
    import.meta.glob("../../assets/Skela/video.mp4", { eager: true })
  ).map((video: any) => ({
    src: video.default,
    video: true,
    type: "image",
    thumbnail: playIcon,
  }));

  // --- SLIDES ---
  const vatrostalniSlides: CustomSlide[] = [
    ...vatrostalniImages,
    ...vatrostalniVideo,
  ];
  const termoizolacijaSlides: CustomSlide[] = [
    ...termoizolacijaImages,
    ...termoizolacijaVideo,
  ];
  const skelaSlides: CustomSlide[] = [...skelaImages, ...skelaVideo];

  const images: CustomSlide[] =
    activeGallery === "vatrostalni"
      ? vatrostalniSlides
      : activeGallery === "termoizolacija"
      ? termoizolacijaSlides
      : activeGallery === "skela"
      ? skelaSlides
      : [];

  return (
    <div className="app-container">
      <div className="page-content">
        <div className="heroImages">
          <div className="hero-images-text">
            <h1>{t("gallery.title")}</h1>
          </div>
        </div>

        <div className="buttons-container">
          <button onClick={() => setActiveGallery("termoizolacija")}>
            {t("gallery.buttons.termo")}
          </button>
          <button onClick={() => setActiveGallery("vatrostalni")}>
            {t("gallery.buttons.vatro")}
          </button>
          <button onClick={() => setActiveGallery("skela")}>
            {t("gallery.buttons.skela")}
          </button>
        </div>

        <div className="gallery-container">
          {activeGallery &&
            images.map((img, index) => (
              <img
                key={index}
                src={img.video ? img.thumbnail : img.src}
                alt={`Slika ${index + 1}`}
                onClick={() => setLightboxIndex(index)}
                className="gallery-image"
              />
            ))}
        </div>
      </div>

      <Footer />

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
              return customSlide.video ? (
                <div style={{ textAlign: "center" }}>
                  <video
                    src={customSlide.src}
                    controls
                    style={{ maxWidth: "95vw", maxHeight: "95vh" }}
                    poster={customSlide.thumbnail}
                  />
                  {customSlide.title && (
                    <div
                      style={{
                        marginTop: "8px",
                        color: "#fff",
                        fontWeight: 600,
                        fontSize: 18,
                      }}
                    >
                      {customSlide.title}
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <img
                    src={customSlide.src}
                    style={{
                      maxWidth: "95vw",
                      maxHeight: "95vh",
                      width: "auto",
                      height: "auto",
                      objectFit: "contain",
                      display: "block",
                      margin: "0 auto",
                    }}
                    alt=""
                  />
                  {customSlide.title && (
                    <div
                      style={{
                        position: "absolute",
                        bottom: 9,
                        left: "50%",
                        transform: "translateX(-50%)",
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                        color: "#fff",
                        padding: "10px 12px",
                        borderRadius: "10px",
                        textAlign: "center",
                        maxWidth: "90%",
                      }}
                    >
                      <p className="details">{customSlide.title}</p>
                    </div>
                  )}
                </>
              );
            },
          }}
        />
      )}
    </div>
  );
};

export default ImagesPage;
