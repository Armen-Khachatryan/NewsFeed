import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'lightgray',
    marginHorizontal: 25,
    marginVertical: 15,
    borderRadius: 10,
  },
  image: {
    flex: 2,
    height: '100%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  content: {fontSize: 12, marginTop: 10, textAlign: 'center'},
  date: {textAlign: 'right', marginTop: 10},
  description: {margin: 20, flex: 3},
});

export default styles;
