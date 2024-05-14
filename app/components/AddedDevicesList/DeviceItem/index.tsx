import {View} from 'react-native';
import {ButtonGroup, Text} from '@rneui/themed';
import {styles} from './styles.ts';
import React from 'react';
import {DeviceItemProps} from './types.ts';

const BUTTONS = ['On', 'Off'];

const DeviceItemComponent = ({
  id,
  title,
  isOn,
  setSelectedIndex,
}: DeviceItemProps) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <ButtonGroup
        onPress={index => setSelectedIndex(id, index)}
        selectedIndex={isOn ? 0 : 1}
        buttons={BUTTONS}
        containerStyle={styles.buttonGroupContainerStyle}
        buttonStyle={styles.buttonGroupButtonStyle}
      />
    </View>
  );
};

export const DeviceItem = React.memo(DeviceItemComponent);
