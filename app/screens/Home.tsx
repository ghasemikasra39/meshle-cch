import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {Header} from 'react-native/Libraries/NewAppScreen';
import {RootStackScreenProps} from './types';

export const Home = (props: RootStackScreenProps<'Home'>) => {
  return (
    <View>
      <Header />
      <View style={styles.container}>
        <Button
          title="Go to counter"
          onPress={() => props.navigation.navigate('Counter')}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
