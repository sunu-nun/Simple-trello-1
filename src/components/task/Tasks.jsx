import React from 'react';
import Task from './Task';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const reorder = (taskList, startIndex, endIndex) => {
  // ここのtaskList, startIndex, endIndexはこの関数独自の変数名で下記のTasksとは関係しない
  //タスクを並び替える
  const remove = taskList.splice(startIndex, 1);
  taskList.splice(endIndex, 0, remove[0]);
};

const Tasks = ({ taskList, setTaskList }) => {
  const handleDragEnd = (result) => {
    if (result.destination) {
      reorder(taskList, result.source.index, result.destination.index);
      setTaskList(taskList);
    }
  };
  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {taskList.map((task, index) => (
                <div key={task.id}>
                  <Task
                    index={index} //配列の番号を取ってきている
                    task={task}
                    taskList={taskList}
                    setTaskList={setTaskList}
                  />
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Tasks;
