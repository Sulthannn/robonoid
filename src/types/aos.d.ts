declare module 'aos' {
  interface AosOptions {
    offset?: number;
    duration?: number;
    easing?: string;
    delay?: number;
    once?: boolean;
    mirror?: boolean;
    anchorPlacement?: string;
  }

  interface AosStatic {
    init(options?: AosOptions): void;
    refresh(): void;
    refreshHard(): void;
  }

  const AOS: AosStatic;
  export default AOS;
}
