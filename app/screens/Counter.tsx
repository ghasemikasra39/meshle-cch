import React from 'react';
import {useAppDispatch, useAppSelector} from '../hooks';
import {decrement, increment, selectCounter} from '../features/test/testSlice';
import {Button, StyleSheet, Text, View} from 'react-native';
import {RootStackScreenProps} from './types';
import {packBuffer} from '../helpers/buffer';
import {IncrementAsync, IncrementBuf} from '../sagas/types';
import {IncrementStruct} from '../structs/increment';

type Props = RootStackScreenProps<'Counter'>;
export const Counter = (_: Props) => {
  const counter = useAppSelector(selectCounter);
  const dispatch = useAppDispatch();
  return (
    <View style={styles.container}>
      <Text>Press the buttons below to change the value of counter</Text>
      <Text>{counter}</Text>
      <View style={styles.buttons}>
        <Button title="Increment" onPress={() => dispatch(increment())} />
        <Button title="Decrement" onPress={() => dispatch(decrement())} />
      </View>
      <View style={styles.buttons}>
        <Button
          title="Increment Async"
          onPress={() => dispatch<IncrementAsync>({type: 'INCREMENT_ASYNC'})}
        />
        <Button
          title="Increment Buffer"
          onPress={() =>
            dispatch<IncrementBuf>({
              type: 'INCREMENT_BUF',
              buffer: packBuffer(IncrementStruct, {
                value: 10,
                reserved1: '8',
                reserved0: '8',
              }).toString('base64'),
            })
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  buttons: {
    flexDirection: 'row',
    gap: 10,
  },
});
