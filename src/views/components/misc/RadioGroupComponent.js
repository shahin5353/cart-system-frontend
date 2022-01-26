import { Form, Radio } from 'antd';
import React from 'react';

const RadioGroupConponent= (props)=>{
    return  <Form.Item label={props.label} name={props.name} initialValue={0} labelCol={{lg:{span:4},xs:{span:24}}} wrapperCol={{lg:{span:20},xs:{span:24}}} className='radio-group-component'>
              <Radio.Group >
                <Radio value={3}>Reference Homozygous</Radio>
                <Radio value={2}>Altered Homozygous</Radio>
                <Radio value={1}>Heterozygous</Radio>
                <Radio value={0}>Not Tested</Radio>
              </Radio.Group>
            </Form.Item>
}
export default RadioGroupConponent;