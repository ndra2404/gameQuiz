import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
const Option = props => {
  const {value, index, onPress} = props;
  const onPressOption = item => onPress(item);
  return (
    <TouchableOpacity
      onPress={() => {
        onPressOption(index);
      }}>
      <View style={[styles.Option]}>
        <Text style={styles.OptionText}>{value}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Option;

const styles = StyleSheet.create({
  Option: {
    borderColor: 'black',
    borderWidth: 3,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 25,
    height: 95,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EDECEC',
  },
  OptionText: {
    fontSize: 30,
  },
});
