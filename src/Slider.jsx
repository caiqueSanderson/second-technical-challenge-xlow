import { useState, useEffect } from "react";
import styles from "../src/Slider.module.css";

const images = [
  {
    url: "https://wallpapercave.com/wp/wp9180868.jpg",
    alt: "Campo deslumbrante",
    link: "https://wallpapercave.com/wp/wp9180868.jpg"
  },
  {
    url: "https://sementesnovasafra.com.br/wp-content/uploads/2021/12/WhatsApp-Image-2021-12-16-at-14.31.22.jpeg",
    alt: "Imagem de um campo cultivado com vistas para o horizonte.",
    link: "https://sementesnovasafra.com.br/wp-content/uploads/2021/12/WhatsApp-Image-2021-12-16-at-14.31.22.jpeg"
  },
  {
    url: "https://images.hdqwalls.com/download/beautiful-landscape-2-hd-1920x1080.jpg",
    alt: "Paisagem deslumbrante de lago perto de montanhas",
    link: "https://images.hdqwalls.com/download/beautiful-landscape-2-hd-1920x1080.jpg"
  },
  {
    url: "https://s1.1zoom.me/b5050/87/Scenery_Sky_Lake_443175_1920x1080.jpg",
    alt: "Céu deslumbrante",
    link: "https://images.hdqwalls.com/download/beautiful-landscape-2-hd-1920x1080.jpg"
  }
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPortrait, setIsPortrait] = useState(window.innerHeight > window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      {isPortrait ? (
        <div className={styles.portraitWarning}>
          <div className={styles.rotateContainer}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 18H12.01M9.2 21H14.8C15.9201 21 16.4802 21 16.908 20.782C17.2843 20.5903 17.5903 20.2843 17.782 19.908C18 19.4802 18 18.9201 18 17.8V6.2C18 5.0799 18 4.51984 17.782 4.09202C17.5903 3.71569 17.2843 3.40973 16.908 3.21799C16.4802 3 15.9201 3 14.8 3H9.2C8.0799 3 7.51984 3 7.09202 3.21799C6.71569 3.40973 6.40973 3.71569 6.21799 4.09202C6 4.51984 6 5.07989 6 6.2V17.8C6 18.9201 6 19.4802 6.21799 19.908C6.40973 20.2843 6.71569 20.5903 7.09202 20.782C7.51984 21 8.07989 21 9.2 21Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            <p>Por favor rotacione seu aparelho!</p>
          </div>
        </div>
      ) : (
        <div className={styles.sliderContainer}>
          <button className={styles.leftArrow} onClick={prevSlide}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13.75 16.25C13.6515 16.2505 13.5538 16.2313 13.4628 16.1935C13.3718 16.1557 13.2893 16.1001 13.22 16.03L9.72001 12.53C9.57956 12.3894 9.50067 12.1988 9.50067 12C9.50067 11.8013 9.57956 11.6107 9.72001 11.47L13.22 8.00003C13.361 7.90864 13.5285 7.86722 13.6958 7.88241C13.8631 7.89759 14.0205 7.96851 14.1427 8.08379C14.2649 8.19907 14.3448 8.35203 14.3697 8.51817C14.3946 8.68431 14.363 8.85399 14.28 9.00003L11.28 12L14.28 15C14.4205 15.1407 14.4994 15.3313 14.4994 15.53C14.4994 15.7288 14.4205 15.9194 14.28 16.06C14.1353 16.1907 13.9448 16.259 13.75 16.25Z" fill="#ffffff"></path> </g></svg>
          </button>
          <a href={images[currentIndex].link} target="_blank" rel="noopener noreferrer" className={styles.imageWrapper}>
            <img
              src={images[currentIndex].url}
              alt={images[currentIndex].alt}
              className={styles.image}
            />
          </a>
          <button className={styles.rightArrow} onClick={nextSlide}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10.25 16.25C10.1493 16.2466 10.0503 16.2227 9.95921 16.1797C9.86807 16.1367 9.78668 16.0756 9.72001 16C9.57956 15.8594 9.50067 15.6688 9.50067 15.47C9.50067 15.2713 9.57956 15.0806 9.72001 14.94L12.72 11.94L9.72001 8.94002C9.66069 8.79601 9.64767 8.63711 9.68277 8.48536C9.71786 8.33361 9.79933 8.19656 9.91586 8.09322C10.0324 7.98988 10.1782 7.92538 10.3331 7.90868C10.4879 7.89198 10.6441 7.92391 10.78 8.00002L14.28 11.5C14.4205 11.6407 14.4994 11.8313 14.4994 12.03C14.4994 12.2288 14.4205 12.4194 14.28 12.56L10.78 16C10.7133 16.0756 10.6319 16.1367 10.5408 16.1797C10.4497 16.2227 10.3507 16.2466 10.25 16.25Z" fill="#ffffff"></path> </g></svg>
          </button>
          <div className={styles.dotsContainer}>
            {images.map((_, index) => (
              <span
                key={index}
                className={index === currentIndex ? styles.dotActive : styles.dot}
                onClick={() => goToSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      )}
    </>
  );
}