import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import smoothscroll from 'smoothscroll-polyfill';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Initialize smooth scroll polyfill
    smoothscroll.polyfill();

    // Smooth scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
}