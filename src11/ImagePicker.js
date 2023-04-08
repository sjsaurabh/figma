import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, TouchableOpacity,Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <TouchableOpacity onPress={pickImage} style={{margin: 20,flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:"#D9D9D9"}} >
    <View style={{  }}>
      
      <Text>Hi</Text>
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
    </TouchableOpacity>
  );
}