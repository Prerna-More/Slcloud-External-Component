import React, { useState } from 'react';
import { Tag, TreeSelect } from 'antd';

const { SHOW_PARENT ,SHOW_ALL,SHOW_CHILD} = TreeSelect;
type treeDataType = {
  title: string,
  value: string,
  children?: Array<treeDataType>
}

interface Props{
    treeData: Array<treeDataType>,
    defaultValue?:string[],
    onOptionChange?:any,
    treeCheckable: boolean,
    showCheckedStrategy: typeof SHOW_PARENT | typeof SHOW_ALL |typeof SHOW_CHILD,
    placeholder?: string,
    style?:any,
    allowClear?:boolean,
    bordered?: boolean,
    disabled?:boolean,
    dropdownMatchSelectWidth?:boolean,
    maxTagCount?:number,
    notFoundContent?:string,
    showArrow?:boolean,
    treeDefaultExpandAll?:boolean,
    treeNodeFilterProp?: string,
    onBlurDropdown?:any,
    onCloseClick?:any
    isCustomTag?:boolean,
    checkboxLimit?: number,
    dropdownStyle?:any,
    listHeight?: number,
}

const MultiSelectDropdown = ({treeData,
    defaultValue =[],
    onOptionChange,
    treeCheckable=true,
    showCheckedStrategy,
    placeholder ='Please select',
    style,
    allowClear=true,
    bordered,
    disabled=false,
    dropdownMatchSelectWidth,
    maxTagCount,
    listHeight,
    notFoundContent,
    showArrow,
    treeDefaultExpandAll,
    treeNodeFilterProp,
    onBlurDropdown,
    onCloseClick,
    isCustomTag,
    checkboxLimit,
    dropdownStyle
}:Props) => {
  const [value, setValue]:any = useState<string[]>(defaultValue);
  const onChange = (newValue: string[]) => {
    if(checkboxLimit && newValue.length <= checkboxLimit){    
    setValue(newValue);
    }else if(!checkboxLimit){
    setValue(newValue);
    }
    onOptionChange(newValue);
  };
 
  const onBlur=()=>{
    onBlurDropdown(value);
  };

  const onClear=()=>{
    setValue([]);
    onCloseClick();
  }

const onTagClose=(text:string)=>{
    const activeTag = value.filter((item:any)=> item !== text)
    setValue(activeTag);
}

/**
 * Function triggers on select
 * @param selectedKeys 
 * @param info 
 */
  const onSelect = (selectedKeys:any, info:any) => {
    // console.log('selected', selectedKeys, info);
  };

const CustomTag = {
    tagRender: (props:any) => {
        return (
          <Tag
            className="custom-tag"
            closable
            onClose={()=>onTagClose(props.value)}
          >
            {props.value}
          </Tag>
        );
      },
 }
  const tProps = {
    treeData,
    value,
    onChange,
    treeCheckable,
    showCheckedStrategy,
    placeholder,
    style,
    allowClear,
    bordered,
    disabled,
    dropdownMatchSelectWidth,
    dropdownStyle,
    maxTagCount,
    listHeight,
    notFoundContent,
    showArrow,
    treeDefaultExpandAll,
    treeNodeFilterProp
  };

  const treeListProps = isCustomTag? {...tProps,...CustomTag}: {...tProps};

    return <TreeSelect {...treeListProps} 
      onBlur={onBlur}  onClear={onClear} onSelect={onSelect}/>;    
};

export default MultiSelectDropdown;