import { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import img1 from '../../assets/carousel/1.png';
import img2 from '../../assets/carousel/2.png';

const images = [img1, img2];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index:any) => {
    setCurrentSlide(index);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="relative w-full max-w-8xl mx-auto">
      {/* 16:3 aspect ratio for 1920x360 */}
      <div className="relative w-full aspect-[16/3] overflow-hidden bg-gray-200">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              className="absolute block max-w-full max-h-full object-contain -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white scale-110' : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-current={index === currentSlide}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* Previous Button */}
      <div className="absolute top-1/2 left-5 transform -translate-y-1/2 z-30">
        <IconButton
          onClick={goToPrevious}
          sx={{
            backgroundColor: 'transparent',
            color: 'white',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.2)',
            },
          }}
        >
          <NavigateBeforeIcon />
        </IconButton>
      </div>

      {/* Next Button */}
      <div className="absolute top-1/2 right-5 transform -translate-y-1/2 z-30">
        <IconButton
          onClick={goToNext}
          sx={{
            backgroundColor: 'transparent',
            color: 'white',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.2)',
            },
          }}
        >
          <NavigateNextIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Carousel;
