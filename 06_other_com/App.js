import { useState } from 'react';
import { PixelRatio, Text, View, SafeAreaView, ActivityIndicator } from 'react-native';

export default function App() {


  const [modalvisible, setmodalVisible] = useState(false)

  const toggleModal = () => {
    setmodalVisible(!modalvisible)
  }

  //pixel ratio
  const pixelden = PixelRatio.get()


  // dimension
  return (
    <SafeAreaView>
      <View >
        <Text>OTHER COMPONENT!</Text>
        <ActivityIndicator size={"large"}
          color='red'
        />
      </View>

      <View>
        <Text>pixel density{pixelden}</Text>
        <Text>screenWidth {screenWidth}</Text>

      </View>


      <View>
        <Button title='press' onPress={toggleModal} />
      </View>
    </SafeAreaView>
  );
}
