import {Pressable, StyleSheet, Text, View, Button, TouchableOpacity, TouchableHighlight } from 'react-native';

// ui component
//button,touchable opacity(similar to button but custom),alert,pressable

export default function App() {

  const handlePress = () => {
    console.log('first')
  }
  return (
    <View style={styles.container}>
      <Text>   ui component</Text>
      <Button title='press' onPress={handlePress} />

      <Text>Touchable Opacity</Text>
      {/* ------------------------ */}
      <TouchableOpacity
        onPress={handlePress}
        style={{

          padding: 20,
          borderColor: "blue",
          borderWidth: 1,
          backgroundColor: "red",
          width: 200
        }}>
        <Text>Press here</Text>


      </TouchableOpacity>

      <Text>Touchable Highlight</Text>

      {/* ---------------------------- */}
      <TouchableHighlight
        onPress={handlePress}

        style={{

          padding: 20,
          borderColor: "blue",
          borderWidth: 1,
          backgroundColor: "red",
          width: 200
        }}>
        <Text>Hi</Text>
      </TouchableHighlight>

{/* --------------- */}
<Pressable>
  <Text>button</Text>
</Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
