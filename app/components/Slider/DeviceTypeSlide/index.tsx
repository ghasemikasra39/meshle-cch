import {View} from 'react-native';
import {Button, ButtonGroup} from '@rneui/themed';
import React from 'react';
import {Text} from '@rneui/themed';
import {DeviceTypeSlideProps} from './types.ts';
import {styles} from './styles.ts';

const HEADER_TITLE = 'Device Type Slide';
const BUTTON_TITLE = 'Next';

export const DeviceTypeComponent = ({
  buttons,
  goToNextSlide,
  selectedIndex,
  setSelectedIndex,
}: DeviceTypeSlideProps) => {
  return (
    <View style={styles.container}>
      <Text h4 style={styles.header}>
        {HEADER_TITLE}
      </Text>
      <ButtonGroup
        buttons={buttons}
        selectedIndex={selectedIndex}
        onPress={index => setSelectedIndex(index)}
        containerStyle={styles.buttonGroupContainerStyle}
        buttonStyle={styles.buttonGroupButtonStyle}
      />
      <View style={styles.nextButtonContainer}>
        <Button
          title={BUTTON_TITLE}
          onPress={goToNextSlide}
          buttonStyle={styles.nextButton}
        />
      </View>
    </View>
  );
};

export const DeviceTypeSlide = React.memo(DeviceTypeComponent);
