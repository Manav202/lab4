import React from "react";
import { StyleSheet, View, TextInput, Button, useState } from "react-native";

const ToDoList = ({addTask}) => {

    const [taskText, setTaskText] = useState('');

  return (
    <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Add a new task..."
                    value={taskText}
                    onChangeText={(text) => setTaskText(text)}
                />
                <Button title="Add task" onPress={() => addTask(taskText)} />
            </View>
  );
};

const styles = StyleSheet.create({
    form: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 20,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10,
    },
});

export default ToDoList;