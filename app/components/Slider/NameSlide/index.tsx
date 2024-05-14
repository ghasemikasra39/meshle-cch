import {View, KeyboardAvoidingView, Platform} from 'react-native';
import {Button, Text, Input} from '@rneui/themed';
import React from 'react';
import {NameSlideProps} from './types.ts';
import {styles} from './styles.ts';

const HEADER_TITLE = 'What is the device name?';
const BUTTON_TITLE = 'Add Device';

export const NameSlideComponent = ({
  onAddDevice,
  deviceName,
  setDeviceName,
}: NameSlideProps) => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={20}>
      <Text h4 style={styles.header}>
        {HEADER_TITLE}
      </Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Device name"
          value={deviceName}
          onChangeText={setDeviceName}
          inputContainerStyle={styles.inputContainerStyle}
          inputStyle={styles.inputStyle}
        />
      </View>
      <View style={styles.nextButtonContainer}>
        <Button
          title={BUTTON_TITLE}
          onPress={onAddDevice}
          buttonStyle={styles.nextButton}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export const NameSlide = React.memo(NameSlideComponent);
