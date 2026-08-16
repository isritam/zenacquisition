import React, { useRef, useEffect, useState } from 'react';

interface FadingVideoProps {
  src: string | string[];
  className?: string;
  style?: React.CSSProperties;
}

export const FadingVideo: React.FC<FadingVideoProps> = ({ src, className, style }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sources = Array.isArray(src) ? src : [src];
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let fadeOutRAF: number;
    let fadeInRAF: number;

    const fade = (element: HTMLVideoElement, targetOpacity: number, duration: number, callback?: () => void) => {
      const startOpacity = parseFloat(element.style.opacity || '0');
      const startTime = performance.now();

      const animate = (time: number) => {
        const elapsed = time - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        element.style.opacity = (startOpacity + (targetOpacity - startOpacity) * progress).toString();

        if (progress < 1) {
          if (targetOpacity === 1) {
            fadeInRAF = requestAnimationFrame(animate);
          } else {
            fadeOutRAF = requestAnimationFrame(animate);
          }
        } else if (callback) {
          callback();
        }
      };
      
      if (targetOpacity === 1) {
        fadeInRAF = requestAnimationFrame(animate);
      } else {
        fadeOutRAF = requestAnimationFrame(animate);
      }
    };

    const handleLoadedData = () => {
      fade(video, 1, 500); // Fade in over 500ms
    };

    const handleTimeUpdate = () => {
      if (video.duration - video.currentTime <= 0.55 && parseFloat(video.style.opacity) === 1) {
        fade(video, 0, 550); // Fade out over 550ms
      }
    };

    const handleEnded = () => {
      if (sources.length === 1) {
        video.currentTime = 0;
        video.play();
        fade(video, 1, 500);
      } else {
        setCurrentIndex((prev) => (prev + 1) % sources.length);
      }
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
      cancelAnimationFrame(fadeInRAF);
      cancelAnimationFrame(fadeOutRAF);
    };
  }, [currentIndex, sources.length]);

  return (
    <video
      ref={videoRef}
      src={sources[currentIndex]}
      className={className}
      style={{ ...style, opacity: 0, transition: 'none' }} // Handle opacity via JS
      autoPlay
      muted
      playsInline
      preload="auto"
    />
  );
};
