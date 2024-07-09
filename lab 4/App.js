/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import { useState } from 'react'; 
import{SafeAreaView} from 'react-native';

import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';


function App() {

  const addTask = (taskText) => {
    setTasks([...tasks, taskText]);
  };


    [tasks, setTasks] = useState([['Do laundry',
    'Go to gym',
    'Walk dog']]);  

    return (
      
        <SafeAreaView>
          <ToDoList tasks={tasks} />

          <ToDoForm addTask={addTask} />
        </SafeAreaView>
    );
}

export default App;