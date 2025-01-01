import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView >

      <Text style={{marginTop:30}}>Styling</Text>


      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-evenly" }}>

        <View style={{ margin: 9, padding: 10, backgroundColor: "red" }}>
          <Text>ITEM 1</Text>
        </View>

        <View style={{ margin: 9, padding: 10, backgroundColor: "red" }}>
          <Text>ITEM 2</Text>
        </View>

        <View style={{ margin: 9, padding: 10, backgroundColor: "red" }}>
          <Text>ITEM 3</Text>
        </View>


      </View>

    </SafeAreaView>
  );
}
