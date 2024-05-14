import {UseAddDevice} from './types.ts';
import {useCallback, useEffect, useRef, useState} from 'react';
import Swiper from 'react-native-swiper';

export const useAddDevice: UseAddDevice = () => {
  const swiperRef = useRef<Swiper>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [deviceName, setDeviceName] = useState('');

  useEffect(() => {
    console.log('✅==> selectedIndex', selectedIndex);
    console.log('✅==> deviceName', deviceName);
  }, [selectedIndex, deviceName]);

  const goToNextSlide = useCallback(() => {
    swiperRef?.current?.scrollBy(1);
  }, []);

  return {
    goToNextSlide,
    swiperRef,
    selectedIndex,
    setSelectedIndex,
    deviceName,
    setDeviceName,
  };
};
