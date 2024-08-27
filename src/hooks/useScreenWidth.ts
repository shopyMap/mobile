import {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';

const useScreenWidth = (): number => {
  const [screenWidth, setScreenWidth] = useState<number>(
    Dimensions.get('window').width,
  );

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(Dimensions.get('window').width);
    };

    Dimensions.addEventListener('change', handleResize);
  }, []);

  return screenWidth;
};

export default useScreenWidth;
