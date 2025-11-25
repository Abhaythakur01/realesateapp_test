import { useEffect, useRef, useState } from 'react';

export type AnimationType =
  | 'fadeIn'
  | 'slideInLeft'
  | 'slideInRight'
  | 'slideInUp'
  | 'slideInDown'
  | 'scaleIn';

interface UseScrollAnimationOptions {
  animation?: AnimationType;
  threshold?: number;
  rootMargin?: string;
  delay?: number;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const {
    animation = 'fadeIn',
    threshold = 0.1,
    rootMargin = '0px',
    delay = 0,
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, delay]);

  // Map animation type to CSS class
  const getAnimationClass = () => {
    switch (animation) {
      case 'slideInLeft':
        return 'animate-slide-in-left';
      case 'slideInRight':
        return 'animate-slide-in-right';
      case 'slideInUp':
        return 'animate-slide-in-up';
      case 'slideInDown':
        return 'animate-slide-in-down';
      case 'scaleIn':
        return 'animate-scale-in';
      case 'fadeIn':
      default:
        return 'animate-fade-in';
    }
  };

  return {
    ref,
    className: `scroll-hidden ${isVisible ? getAnimationClass() : ''}`,
  };
}

// Hook for staggered animations
interface UseStaggerAnimationOptions {
  animation?: AnimationType;
  threshold?: number;
  rootMargin?: string;
  staggerDelay?: number;
}

export function useStaggerAnimation(
  itemCount: number,
  options: UseStaggerAnimationOptions = {}
) {
  const {
    animation = 'fadeIn',
    threshold = 0.1,
    rootMargin = '0px',
    staggerDelay = 0.1,
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  // Map animation type to CSS class
  const getAnimationClass = () => {
    switch (animation) {
      case 'slideInLeft':
        return 'animate-slide-in-left';
      case 'slideInRight':
        return 'animate-slide-in-right';
      case 'slideInUp':
        return 'animate-slide-in-up';
      case 'slideInDown':
        return 'animate-slide-in-down';
      case 'scaleIn':
        return 'animate-scale-in';
      case 'fadeIn':
      default:
        return 'animate-fade-in';
    }
  };

  // Generate className for each item with stagger
  const getItemClassName = (index: number) => {
    const staggerClass = Math.min(index + 1, 9);
    return `scroll-hidden ${isVisible ? `${getAnimationClass()} stagger-${staggerClass}` : ''}`;
  };

  return {
    ref,
    getItemClassName,
  };
}
