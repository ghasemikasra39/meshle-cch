import React from 'react';
import {View} from 'react-native';
import {Button} from '@rneui/themed';
import {styles} from './styles.ts';
import {HomeProps} from './types.ts';
import {useHome} from './hooks/useHome';

const ADD_DEVICE_BTN_TITLE = 'Add Device';

const Home = (_: HomeProps) => {
  const {onAddDeviceHandler} = useHome();
  return (
    <View style={{flex: 1, margin: 15}}>
      <View style={styles.container}>
        <Button
          buttonStyle={styles.addDeviceBtn}
          title={ADD_DEVICE_BTN_TITLE}
          onPress={onAddDeviceHandler}
        />
      </View>
    </View>
  );
};

export default React.memo(Home);
