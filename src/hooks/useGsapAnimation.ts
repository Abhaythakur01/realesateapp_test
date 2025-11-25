import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export type AnimationType = 
  | 'fadeIn'
  | 'slideInLeft'
  | 'slideInRight'
  | 'slideInUp'
  | 'slideInDown'
  | 'scaleIn'
  | 'revealLeft'
  | 'revealRight';

interface UseGsapAnimationOptions {
  animation?: AnimationType;
  duration?: number;
  delay?: number;
  stagger?: number;
  ease?: string;
  scrub?: boolean | number;
  start?: string;
  end?: string;
}

export function useGsapAnimation(options: UseGsapAnimationOptions = {}) {
  const {
    animation: animationType = 'fadeIn',
    duration = 1.5,
    delay = 0,
    ease = 'power2.out',
    scrub = false,
    start = 'top 80%',
    end = 'bottom 20%',
  } = options;

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let fromProps: any = {};

    // Get animation properties based on type
    switch (animationType) {
      case 'slideInLeft':
        fromProps = { x: -100, opacity: 0 };
        break;
      case 'slideInRight':
        fromProps = { x: 100, opacity: 0 };
        break;
      case 'slideInUp':
        fromProps = { y: 100, opacity: 0 };
        break;
      case 'slideInDown':
        fromProps = { y: -100, opacity: 0 };
        break;
      case 'scaleIn':
        fromProps = { scale: 0.8, opacity: 0 };
        break;
      case 'revealLeft':
        fromProps = { xPercent: -100, opacity: 0 };
        break;
      case 'revealRight':
        fromProps = { xPercent: 100, opacity: 0 };
        break;
      case 'fadeIn':
      default:
        fromProps = { opacity: 0 };
        break;
    }

    // Create the animation
    const tween = gsap.from(element, {
      ...fromProps,
      duration,
      delay,
      ease,
      scrollTrigger: {
        trigger: element,
        start,
        end,
        scrub,
        toggleActions: 'play none none reverse',
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [animationType, duration, delay, ease, scrub, start, end]);

  return ref;
}

// Hook for animating multiple children with stagger
export function useGsapStagger(options: UseGsapAnimationOptions = {}) {
  const {
    animation: animationType = 'fadeIn',
    duration = 1,
    delay = 0,
    stagger = 0.15,
    ease = 'power2.out',
    start = 'top 80%',
  } = options;

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const children = element.children;
    if (children.length === 0) return;

    let fromProps: any = {};

    // Get animation properties based on type
    switch (animationType) {
      case 'slideInLeft':
        fromProps = { x: -80, opacity: 0 };
        break;
      case 'slideInRight':
        fromProps = { x: 80, opacity: 0 };
        break;
      case 'slideInUp':
        fromProps = { y: 60, opacity: 0 };
        break;
      case 'slideInDown':
        fromProps = { y: -60, opacity: 0 };
        break;
      case 'scaleIn':
        fromProps = { scale: 0.85, opacity: 0 };
        break;
      case 'fadeIn':
      default:
        fromProps = { opacity: 0, y: 30 };
        break;
    }

    const tween = gsap.from(children, {
      ...fromProps,
      duration,
      delay,
      stagger,
      ease,
      scrollTrigger: {
        trigger: element,
        start,
        toggleActions: 'play none none reverse',
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [animationType, duration, delay, stagger, ease, start]);

  return ref;
}

// Hook for parallax counter-animations (like Sunteck)
export function useGsapReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;
    const image = imageRef.current;

    if (!container || !text || !image) return;

    // Text slides in from left
    const textTween = gsap.from(text, {
      xPercent: -100,
      duration: 1.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: container,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });

    // Image slides in from right (counter-animation)
    const imageTween = gsap.from(image, {
      xPercent: 100,
      duration: 1.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: container,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });

    return () => {
      textTween.kill();
      imageTween.kill();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return { containerRef, textRef, imageRef };
}
