import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import {useDispatch,useSelector} from 'react-redux'
import {addTodoAction} from "../../redux/actions"
import {v4 as uuidv4} from 'uuid'
import {useState} from 'react'
import {todoRemainingSelector} from "../../redux/selector"

export default function TodoList() {

  const todoList = useSelector(todoRemainingSelector)
  const [todoName,setTodoName]= useState("")
  const [prioriry,setPrioriry]=useState("Medium")

  const dispatch = useDispatch()
  const handAddButtonOnClick =()=>{
      dispatch(addTodoAction({
        id:uuidv4(),
        name:todoName,
        completed:false,
        prioriry:prioriry
      }))
      setTodoName("")
      setPrioriry("Medium")
  }
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {/* <Todo name='Learn React' prioriry='High' />
        <Todo name='Learn Redux' prioriry='Medium' />
         */}
        {todoList.map((todo,index)=><Todo key={index} id={todo.id} name={todo.name} prioriry={todo.prioriry} completed={todo.completed} />)}

      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={(event)=>{setTodoName(event.target.value)}} />
          <Select defaultValue="Medium"  onChange={(event)=>{setPrioriry(event)}}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handAddButtonOnClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
