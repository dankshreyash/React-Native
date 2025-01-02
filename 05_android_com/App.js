import { PermissionsAndroid, SafeAreaView, Text, View, Button, ToastAndroid } from 'react-native';

export default function App() {


  const showtoast = () => {
    ToastAndroid.show("hello toast", ToastAndroid.CENTER)
  }


  const req_permission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Camera Permission",
          message: "This app needs access to your camera to take pictures.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        }
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Camera permission granted");
      } else {
        console.log("Camera permission denied");
      }
    } catch (error) {
      console.error("Failed to request permission", error);
    }
  };

  return (
    <SafeAreaView>

      <View >
        <Text>hi</Text>
        <Button onPress={showtoast} title='i m button'></Button>



      </View>

      <View>
        <Button onPress={req_permission} title='req button'></Button>

      </View>


    </SafeAreaView>

  );
}
