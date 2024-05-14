import {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';

export const useHome = () => {
  const navigation = useNavigation();

  const onAddDeviceHandler = useCallback(
    () => navigation.navigate('AddDevice'),
    [navigation],
  );

  return {onAddDeviceHandler};
};
