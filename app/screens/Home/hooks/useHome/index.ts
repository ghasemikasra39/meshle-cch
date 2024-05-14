import {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {UseHome} from './types.ts';

export const useHome: UseHome = () => {
  const navigation = useNavigation();

  const onAddDeviceHandler = useCallback(
    () => navigation.navigate('AddDevice'),
    [navigation],
  );

  return {onAddDeviceHandler};
};
