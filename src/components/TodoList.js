import TodoListItem from './TodoListItem';
import './TodoList.scss';
import React, { useCallback } from 'react';
import { List } from 'react-virtualized';

const TodoList = ({ todos, onRemove, onToggle }) => {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [onRemove, onToggle, todos],
  );
  return (
    <List
      className="TodoList"
      width={512}
      height={513}
      rowCount={todos.length} //항목개수
      rowHeight={57} //항목 높이
      rowRenderer={rowRenderer} //항목을 렌더링 할때 쓰는 함수
      list={todos} //배열
      style={{ outline: 'none' }} //List에 기본적용되는 outline스타일 제거
    />
  );
};

export default React.memo(TodoList);