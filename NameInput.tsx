import React, {useEffect} from 'react';
import {Keyboard, SafeAreaView, StyleSheet, TextInput} from 'react-native';

const NameTextInput = () => {
  const [text, onChangeText] = React.useState('');

  useEffect(() => {
    const showing = Keyboard.addListener('keyboardDidShow', () => {});
    const hiding = Keyboard.addListener('keyboardDidHide', () => {});

    return () => {
      showing.remove();
      hiding.remove();
    };
  }, []);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="type your name"
        keyboardType="ascii-capable"
        onSubmitEditing={Keyboard.dismiss}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default NameTextInput;
