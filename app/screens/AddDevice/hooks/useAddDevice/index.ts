import {UseAddDevice} from './types.ts';
import {useAppDispatch, useAppSelector} from '../../../../hooks.ts';
import {selectCounter} from '../../../../features/test/testSlice.ts';
import {useRef} from 'react';

export const useAddDevice: UseAddDevice = () => {
  const counter = useAppSelector(selectCounter);
  const dispatch = useAppDispatch();
  const swiperRef = useRef(null);

  const goToNextSlide = () => {
    swiperRef?.current?.scrollBy(1);
  };

  return {goToNextSlide, swiperRef};
};
