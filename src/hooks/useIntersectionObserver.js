import { useState, useEffect } from "react";

const useIntersectionObserver = (elementRef, options) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry], observerInstance) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observerInstance.unobserve(entry.target);
      }
    }, options);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [elementRef, options]);

  return isIntersecting;
};

export default useIntersectionObserver;
