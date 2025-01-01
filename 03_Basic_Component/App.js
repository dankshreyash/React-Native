import { useState } from 'react';
import { SafeAreaView, Text, View, TextInput, ScrollView } from 'react-native';

export default function App() {
  const [text, setText] = useState("")
  console.log(text, "text")

  const printing_text = (newtext) => {
    setText(newtext)
  }
  return (
    <SafeAreaView>
      <View style={{ marginTop: 32, paddingHorizontal: 24 }}>
        <Text>Hello Rn </Text>
      </View>

      <TextInput
        onChangeText={printing_text}
        value={text}
        style={{ height: 40, borderColor: "gray", borderWidth: 1, marginTop: 10 }}
        placeholder='Enter name' />

        <ScrollView>
          <Text>1</Text>
          <Text>2</Text>
          <Text>3</Text>
          <Text>4</Text>
          <Text>5</Text>

        </ScrollView>
    </SafeAreaView>
  );
}

