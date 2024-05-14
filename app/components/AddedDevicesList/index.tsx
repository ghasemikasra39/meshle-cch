import {FlatList} from 'react-native';
import React, {useCallback} from 'react';
import {DeviceItem} from './DeviceItem';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store.ts';
import {toggleDevice} from '../../features/devices/devicesSlice.ts';

const AddedDevicesListComponent = () => {
  const dispatch = useDispatch();
  const devices = useSelector((state: RootState) => state.devices.devices);

  const setSelectedIndexHandler = useCallback(
    (deviceId: string, _: number) => {
      dispatch(toggleDevice(deviceId));
    },
    [dispatch],
  );

  return (
    <FlatList
      data={devices}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <DeviceItem
          id={item.id}
          title={item.name}
          isOn={item.isOn}
          setSelectedIndex={setSelectedIndexHandler}
        />
      )}
    />
  );
};

export const AddedDevicesList = React.memo(AddedDevicesListComponent);
