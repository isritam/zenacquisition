import React, { useEffect } from 'react';

interface WistiaVideoPlayerProps {
  mediaId?: string;
  className?: string;
}

export const WistiaVideoPlayer: React.FC<WistiaVideoPlayerProps> = ({
  mediaId = '8tc28mlc5m',
  className = '',
}) => {
  useEffect(() => {
    // Dynamically append Wistia player scripts if not present
    if (!document.querySelector('script[src="https://fast.wistia.com/player.js"]')) {
      const script1 = document.createElement('script');
      script1.src = 'https://fast.wistia.com/player.js';
      script1.async = true;
      document.head.appendChild(script1);
    }

    const embedScriptUrl = `https://fast.wistia.com/embed/${mediaId}.js`;
    if (!document.querySelector(`script[src="${embedScriptUrl}"]`)) {
      const script2 = document.createElement('script');
      script2.src = embedScriptUrl;
      script2.async = true;
      script2.type = 'module';
      document.head.appendChild(script2);
    }
  }, [mediaId]);

  return (
    <div className={`w-full relative rounded-2xl overflow-hidden liquid-glass border border-white/10 shadow-2xl ${className}`}>
      {/* 16:9 Aspect Ratio Container */}
      <div className="relative w-full pt-[56.25%] bg-black/80">
        <iframe
          src={`https://fast.wistia.net/embed/iframe/${mediaId}?seo=true&videoFoam=true`}
          title="Zen Academy Training Overview"
          allow="autoplay; fullscreen"
          allowTransparency
          frameBorder="0"
          scrolling="no"
          className="absolute top-0 left-0 w-full h-full rounded-2xl"
          name="wistia_embed"
        />
      </div>
    </div>
  );
};
