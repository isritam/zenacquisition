import React, { useEffect } from 'react';

interface CalEmbedProps {
  calLink?: string;
  className?: string;
}

export const CalEmbed: React.FC<CalEmbedProps> = ({
  calLink = 'zenacquisition/strategy',
  className = '',
}) => {
  useEffect(() => {
    // Load Cal embed snippet safely
    (function (C: any, A: string) {
      const p = function (a: any, ar: any) {
        a.q = a.q || [];
        a.q.push(ar);
      };
      const d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          const cal = C.Cal;
          const args = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement('script')).src = A;
            cal.loaded = true;
          }
          if (args[0] === 'init') {
            const api: any = function () {
              p(api, arguments);
            };
            const namespace = args[1];
            api.q = api.q || [];
            if (typeof namespace === 'string') {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], args);
              p(cal, ["initNamespace", namespace]);
            } else {
              p(cal, args);
            }
            return;
          }
          p(cal, args);
        };
    })(window, 'https://app.cal.com/embed/embed.js');

    if ((window as any).Cal) {
      (window as any).Cal('init', 'strategy', { origin: 'https://cal.com' });
      (window as any).Cal.ns.strategy('inline', {
        elementOrSelector: '#cal-inline-widget',
        config: { layout: 'month_view', theme: 'dark' },
        calLink: calLink,
      });
      (window as any).Cal.ns.strategy('ui', {
        theme: 'dark',
        styles: { branding: { brandColor: '#ffffff' } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    }
  }, [calLink]);

  return (
    <div className={`w-full overflow-hidden liquid-glass border border-white/10 rounded-3xl p-2 md:p-6 ${className}`}>
      <div
        id="cal-inline-widget"
        className="w-full min-h-[600px] overflow-auto rounded-2xl bg-black/40"
      />
    </div>
  );
};
