import {FlatList} from 'react-native';
import React, {useCallback} from 'react';
import {DeviceItem} from './DeviceItem';

// this will come from redux
const DATA = [
  {id: '1', title: 'Switch Button 1', buttons: ['On', 'Off'], isOn: false},
  {id: '2', title: 'HSV Device 1', buttons: ['On', 'Off'], isOn: true},
];

const AddedDevicesListComponent = () => {
  const setSelectedIndexHandler = useCallback(
    (deviceId: string, index: number) => {
      console.log('✅ device Id', deviceId);
      console.log('✅ index', index);
    },
    [],
  );

  return (
    <FlatList
      data={DATA}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <DeviceItem
          id={item.id}
          title={item.title}
          isOn={item.isOn}
          setSelectedIndex={setSelectedIndexHandler}
        />
      )}
    />
  );
};

export const AddedDevicesList = React.memo(AddedDevicesListComponent);
