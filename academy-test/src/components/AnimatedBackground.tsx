
import UnicornScene from "unicornstudio-react";

export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none opacity-80">
      <UnicornScene 
        projectId="nZiyr6jJikCOMD8xNDFj" 
        sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.2.6/dist/unicornStudio.umd.js"
        width="100%" 
        height="100%" 
      />
      {/* Dark gradient overlay to ensure text remains readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black pointer-events-none" />
    </div>
  );
};
