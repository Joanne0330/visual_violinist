import { useState, useEffect } from 'react';

export const useIsMobileScreen = () => {
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      window.innerWidth < 580 ? setIsMobileScreen(true) : setIsMobileScreen(false)

    };

    window.addEventListener('resize', handleResize);
		handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobileScreen;
};

export const useIsSmallScreen = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      window.innerWidth < 850 ? setIsSmallScreen(true) : setIsSmallScreen(false)

    };

    window.addEventListener('resize', handleResize);
		handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isSmallScreen;
};

export const useIsMediumScreen = () => {
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      window.innerWidth > 767  && window.innerWidth < 850? setIsMediumScreen(true) : setIsMediumScreen(false)

    };

    window.addEventListener('resize', handleResize);
		handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMediumScreen;
};