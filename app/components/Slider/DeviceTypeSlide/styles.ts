import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
  },
  header: {textAlign: 'center'},
  buttonGroupContainerStyle: {
    height: 50,
    width: '80%',
    borderRadius: 10,
    marginTop: 10,
  },
  buttonGroupButtonStyle: {padding: 10},
  nextButtonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 50,
  },
  nextButton: {borderRadius: 10, width: 150},
});
