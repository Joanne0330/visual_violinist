import { useEffect, useState } from 'react';
import PracticeSession from "../../common/PracticeSession";

const PracticePage = () => {
  const [isSmallScreen, setIsSmallScreen ] = useState(false)
  useEffect(() => {
    const handleResize = () => {
      window.innerWidth < 450 ? setIsSmallScreen(true) : setIsSmallScreen(false)

    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return(
    <>
      <h3>This is the Practice Page</h3>
      <PracticeSession isSmallScreen={isSmallScreen}/>
    </>
  )
}

export default PracticePage;