// src/aos.d.ts
declare module 'aos' {
  const AOS: {
    init: (options?: {
      duration?: number;
      easing?: string;
      once?: boolean;
      delay?: number;
      offset?: number;
      mirror?: boolean;
      anchorPlacement?: string;
    }) => void;
  };
  export default AOS;
}
