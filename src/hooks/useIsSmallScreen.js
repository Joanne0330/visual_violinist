import { useState, useEffect } from 'react';

const useIsSmallScreen = () => {
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

export default useIsSmallScreen;