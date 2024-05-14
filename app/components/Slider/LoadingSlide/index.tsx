import {ActivityIndicator, View} from 'react-native';
import {Button, Text} from '@rneui/themed';
import React, {useState} from 'react';
import {LoadingSlideProps} from './types.ts';
import {styles} from './styles.ts';

const BUTTON_TITLE_LOADING = 'Saving ...';
const BUTTON_TITLE_Done = 'Done';

export const LoadingSlideComponent = ({goToNextSlide}: LoadingSlideProps) => {
  const [loading, setLoading] = useState(true);
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
          onPress={goToNextSlide}
          buttonStyle={styles.nextButton}
          disabled={loading}
        />
      </View>
    </View>
  );
};

export const LoadingSlide = React.memo(LoadingSlideComponent);
