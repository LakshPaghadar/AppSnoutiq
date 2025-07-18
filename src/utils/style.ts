import { StyleSheet } from 'react-native';
import Font from './font';

const CommonStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    marginTop: 20,
    fontSize: 20,
    color: '#333',
    fontWeight: 'bold',
  },
  text16Bold: {
    fontSize: 16,
    fontFamily: Font.Bold,
  },

  // Add more common styles as needed
});

export default CommonStyles;
