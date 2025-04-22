import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
    backgroundColor: 'red',
  },
});

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div>
      <View style={styles.container} />
    </div>
  );
}
