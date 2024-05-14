import {UseAddDevice} from './types.ts';
import {useAppDispatch, useAppSelector} from '../../../../hooks.ts';
import {selectCounter} from '../../../../features/test/testSlice.ts';
import {useRef, useState} from 'react';

export const useAddDevice: UseAddDevice = () => {
  const counter = useAppSelector(selectCounter);
  const dispatch = useAppDispatch();
  const swiperRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [deviceName, setDeviceName] = useState('');

  const goToNextSlide = () => {
    swiperRef?.current?.scrollBy(1);
  };

  return {
    goToNextSlide,
    swiperRef,
    selectedIndex,
    setSelectedIndex,
    deviceName,
    setDeviceName,
  };
};
