import {StyleSheet,Text,Pressable, View} from 'react-native';

function GoalItem(props){
return (
  <Pressable android_ripple={{color:'#dddddd'}} 
  onPress={props.onDeleteItem.bind(this, props.id)}
   style={({pressed})=> pressed && styles.pressed}>
    <View style={styles.goalItem}>
      <Text style={styles.goalText} >{props.text}</Text>
    </View>
  </Pressable>
);
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    padding: 6,
    backgroundColor: "#560acc",
  },
  goalText: {
    color: "white",
    padding: 8, // Move this to avoid ripple effect only on the text but on the whole item 
  },
  pressed :{
    opacity : 0.5 // Adds the effects of a duller opacity for selected item
  }
});