import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

import Colors from '../constants/Colors'

const ImagePicker = props => {
    return (
        <View>
      <View><Text>No image picked yet.</Text></View>
      <Button title="Take image" color={Colors.primary} onPress={} />
        </View>
    );
};

const styles = StyleSheet.create({
});

export default ImagePicker;