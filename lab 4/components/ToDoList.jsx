import React from 'react';
import {
    StyleSheet,
    Pressable,
    Text,
    ScrollView,
} from 'react-native';
 
const ToDoList = ({tasks}) => {
 
  return (
            <ScrollView>
                {tasks.map((task, index) => (
                    <Pressable
                        key={index}
                        style={({ pressed }) => [
                            styles.task,
                            pressed && styles.completed,
                        ]}
                    >
                        <li><Text style={styles.taskText}>{task}</Text></li>
                    </Pressable>
                ))}
            </ScrollView>
  );
}
 
const styles = StyleSheet.create({
    task: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    completed: {
        backgroundColor: '#e0e0e0',
    },
    taskText: {
        fontSize: 16,
    },
});
 
export default ToDoList;