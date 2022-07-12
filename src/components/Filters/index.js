import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import {useDispatch} from 'react-redux'
import {useState} from 'react'
import {searchFilterChange,searchStatusChange,searchProriryChange} from "../../redux/actions"
const { Search } = Input;

export default function Filters() {
  const dispatch = useDispatch()
  const [search,setSearch]= useState("");
  const [complete,setComple]=useState("");
  const [prioriry,setPrioriry]=useState("");
  const handlerSelectPrioriry = (e)=>{
    setPrioriry(e)
    dispatch(searchProriryChange(e))
  }
  const handlerSearch=(e)=>{
      setSearch(e.target.value)
      dispatch(searchFilterChange(e.target.value))
  }
  const handlerClickRadio =(e)=>{
    setComple(e.target.value)
    console.log(e.target.value);
     dispatch(searchStatusChange(e.target.value))
  }
  return (
    <Row justify='center'>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search placeholder='input search text' value={search} onChange={handlerSearch}  />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={complete} onChange={handlerClickRadio}>
          <Radio value='All'>All</Radio>
          <Radio value='Completed'>Completed</Radio>
          <Radio value='Todo'>To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          onChange={handlerSelectPrioriry}
          mode='multiple'
          allowClear
          placeholder='Please select'
          style={{ width: '100%' }}
        >
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
      </Col>
    </Row>
  );
}
