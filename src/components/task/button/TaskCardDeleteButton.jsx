import React from 'react';

const TaskCardDeleteButton = ({
  taskCardsList,
  setTaskCardsList,
  taskCard,
}) => {
  const taskCardDeleteButton = (id) => {
    // このidは下のtaskCard.idのidを受け取っている
    //タスクカードを削除する
    setTaskCardsList(taskCardsList.filter((item) => item.id !== id));
    //filter関数を使うことで、配列の中身全とそれらとボタンが押されたカードのIDを比較し違うなら残し、同じならば消すという動作が行われている。eは変数。
  };
  return (
    <div>
      <button
        className="taskCardDeleteButton"
        onClick={() => taskCardDeleteButton(taskCard.id)}
        //ボタンが押されたらその押されたボタンのidを取得する
      >
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
};

export default TaskCardDeleteButton;
