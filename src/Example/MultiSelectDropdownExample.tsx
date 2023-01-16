import { TreeSelect } from 'antd';
import React from 'react';
import MultiSelectDropdown from '../Components/MultiSelectDropdown';

const { SHOW_CHILD} = TreeSelect;


const MultiSelectDropdownExample: React.FC = () => {
  const treeData = [
    {
      title: 'Node1',
      value: 'parent 1',
      children: [
        {
          title: 'Child Node1',
          value: 'child devicename axial',
        },
      ],
    },
    {
      title: 'Node2',
      value: 'parent device 2',
      children: [
        {
          title: 'Child Node3',
          value: 'child device2 axial',
        },
        {
          title: 'Child Node4',
          value: 'child device2 tan',
        },
        {
          title: 'Child Node5',
          value: 'child device2 hori',
        },
      ],
    },
  ];

  const onChange =(value: string[])=>{
    console.log('on change data',value)
  };

  const onBlur =(value: string[])=>{
    console.log('on blur data',value)
  }

  const onClear =()=>{
    console.log('on clear data')
  }

  const defaultValue = ['child devicename axial'];
  return <MultiSelectDropdown 
  treeData={treeData}
  defaultValue={defaultValue}
  isCustomTag 
  onOptionChange={onChange}
  treeCheckable ={true}
  checkboxLimit={3}
  showCheckedStrategy= {SHOW_CHILD}
  placeholder= {'Please select'}
  onBlurDropdown ={onBlur}
  onCloseClick={onClear}
  style= {{
    width: '50%',
  }}
  allowClear={true}
  bordered={true}
  disabled={false}
  dropdownMatchSelectWidth={true}
  dropdownStyle={{maxHeight: 400, overflow: "auto"}}
  maxTagCount={3}
  listHeight={400}
  notFoundContent={'No data'}
  showArrow={true}
  treeDefaultExpandAll={true}
  treeNodeFilterProp={'title'}/>
};

export default MultiSelectDropdownExample;