import {ActivityIndicator, View} from 'react-native';
import {Button, Text} from '@rneui/themed';
import React from 'react';
import {LoadingSlideProps} from './types.ts';
import {styles} from './styles.ts';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store.ts';
import {useNavigation} from '@react-navigation/native';

const BUTTON_TITLE_LOADING = 'Saving ...';
const BUTTON_TITLE_Done = 'Done';

export const LoadingSlideComponent = (_: LoadingSlideProps) => {
  const navigation = useNavigation();
  const loading = useSelector((state: RootState) => state.devices.addingDevice);
  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <Text h3 style={{color: 'green'}}>
          ✓ Done
        </Text>
      )}
      <View style={styles.nextButtonContainer}>
        <Button
          title={loading ? BUTTON_TITLE_LOADING : BUTTON_TITLE_Done}
          onPress={() => navigation.navigate('Home')}
          buttonStyle={styles.nextButton}
          disabled={loading}
        />
      </View>
    </View>
  );
};

export const LoadingSlide = React.memo(LoadingSlideComponent);
