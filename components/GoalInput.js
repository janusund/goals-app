import { StyleSheet, View, TextInput, Button , Modal, Image} from "react-native";
import { useState } from "react";


function GoalInput(props) {
  const [goalEnteredText, setGoalEnteredText] = useState("");

  function handleGoalInput(enteredText) {
    setGoalEnteredText(enteredText);
  }

  function handleAddGoalHandler() {
    props.AddGoalHandler(goalEnteredText);
    setGoalEnteredText(""); // reseting the current value of the text box
  }

  function handleCloseHandler(){
    props.OnCancel();
  }

  return (
    <Modal visible={props.isVisible} animationType="slide">
      
      <View style={styles.inputContainer}>
      <Image style={styles.image} source={require('../assets/images/goal.png')} />
        <TextInput
          style={styles.textInput}
          placeholder="Your Course Goals"
          onChangeText={handleGoalInput}
          value={goalEnteredText}
        ></TextInput>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={handleAddGoalHandler} color="#5e0acc"/>
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={handleCloseHandler} color="#f31282"/>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex:1,
    justifyContent: "center",
    alignItems:"center",
    padding:16,   
    backgroundColor:"#311b6b"
  },
  textInput: {
    width: "100%",
    borderColor: "#e4d0ff",
    backgroundColor:"#e4d0ff",
    borderRadius: 6 ,// rounded corner
    borderWidth: 1,
    padding:8,
    color:"#120438"
  },
  buttonContainer:{
    flexDirection:'row', // since the buttons needs to placed next to each other in same row
  },
  button:{
    width:'30%',
    marginHorizontal:8
  },
  image:{
    width:100,
    height:100,
    margen:20
  }
});
