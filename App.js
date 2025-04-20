import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button, TextInput, ScrollView, FlatList} from 'react-native';
import {useState} from 'react';
import GoalItem  from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { connectToDevTools } from 'react-devtools-core';

connectToDevTools({
  host: '192.168.50.159',
  port: 8097,
});

export default function App() {
  const [goals, setGoals]= useState([]);
  // For Modal visibility state
  const [isModalVisible, setModalVisibility] = useState(false);
  // For Button Handler
  function handleAddGoalHandler(goalText){
    setGoals((prevGoal)=> [...prevGoal, {text: goalText ,id : Math.random().toString()} ]);
    handleEndGoalHandler();
  }

  function handleEndGoalHandler(){
    setModalVisibility(false);
   
  }
  function handleOnDeleteItem(id){
    setGoals((prevGoal) =>{
      return prevGoal.filter((item)=>item.id != id);
    });
  }

  function handleModalVisibility(){
    setModalVisibility(true);
  }
  return (
    <>
    <StatusBar style='light'/>
  <View style = {styles.appContainer}>
    <Button onPress={handleModalVisibility} color="#560acc" title ="Add a goal"/>
   <GoalInput AddGoalHandler={handleAddGoalHandler} isVisible = {isModalVisible} OnCancel ={handleEndGoalHandler}/>
    <View style={styles.goalContainer}>
    <Text >List of Goals</Text>
      <FlatList data ={goals}
       renderItem={(dataItem)=>{
        return (
          <GoalItem text = {dataItem.item.text} id ={dataItem.item.id} onDeleteItem={handleOnDeleteItem}/>
        )
       }}
       keyExtractor={(item,id)=>
        {return item.id}}
     />  
     
    </View>
  </View>   
 </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    alignItems: 'center',
    justifyContent: 'center',
  },
  appContainer:{
    flex:1, // Takes the whole screen
    padding:50,
    paddingTop:50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a',
  },
  goalContainer: {
    backgroundColor: '#f0f4f8',
    padding: 5,
    marginVertical: 6,
    marginHorizontal: 12,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  
 
});
