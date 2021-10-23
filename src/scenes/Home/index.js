import React, { Component } from 'react';
import { Form, Input, Button, Select } from 'antd';
import postForm from '../../services/api/postForm';
import ReCAPTCHA from "react-google-recaptcha";
import './styles.scss';
const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;
class Home extends Component {
  onChange = (value) => {
    console.log("Captcha value:", value);
  }

  send = () => {
    let data = new URLSearchParams ({
      "orgid": '00D5f000005XpZY',
      "email": 'alex.cch97@gmail.com'
    })
    postForm.postForm(data);
  }
  
  render() {
    return (
      <div className='form__content'>
        <Form>
            <FormItem
              label='Contact Name'>
            <Input
              id="name" 
              maxLength="80" 
              name="name" 
              size="20" 
              type="text"
            />
          </FormItem>
          <FormItem
              label='Email'>
            <Input
              id="email" 
              maxLength="80" 
              name="email" 
              size="20" 
              type="text"
            />
          </FormItem>
          <FormItem
              label='Priority'>
            <Select
              id="priority" 
              name="priority" 
            >
              <Option value='High'>High</Option>
              <Option value='Medium'>Medium</Option>
              <Option value='Low'>Low</Option>
            </Select>
          </FormItem>
          <FormItem
              label='Type'>
            <Select
              id="type" 
              name="type" 
            >
              <Option value='High'>Mechanical</Option>
              <Option value='Electronic'>Electrical</Option>
              <Option value='Medium'>Electronic</Option>
              <Option value='Structural'>Structural</Option>
              <Option value='Other'>Other</Option>
            </Select>
          </FormItem>
          <FormItem
              label='Case Reason'>
            <Select
              id="reason" 
              name="reason" 
            >
              <Option value='Installation'>Installation</Option>
              <Option value='Equipment Complexity'>Equipment Complexity</Option>
              <Option value='Performance'>Performance</Option>
              <Option value='Breakdown'>Breakdown</Option>
              <Option value='Equipment Design'>Equipment Design</Option>
              <Option value='Feedback'>Feedback</Option>
              <Option value='Other'>Other</Option>
            </Select>
          </FormItem>

          <FormItem
              label='Product'>
            <Select
              id="00N5f00000J8kHX" 
              name="00N5f00000J8kHX" 
            >
              <Option value='GC1060'>GC1060</Option>
              <Option value='GC3020'>GC3020</Option>
              <Option value='GC3040'>GC3040</Option>
              <Option value='GC3060'>GC3060</Option>
              <Option value='GC5020'>GC5020</Option>
              <Option value='GC5040'>GC5040</Option>
              <Option value='GC1020'>GC1020</Option>
            </Select>
          </FormItem>
          <FormItem
              label='Subject'>
            <Input
              id="subject" 
              maxLength="80" 
              name="subject" 
              size="20" 
              type="text"
            />
          </FormItem>
          <FormItem
              label='Description'>
            <TextArea
              name="description" 
            />
          </FormItem>
          <ReCAPTCHA
            sitekey="6LeOyeocAAAAALYItep9gSM97oFKFuqM0UgNSUzp"
            onChange={this.onChange}
          />
          <div className="g-recaptcha" data-sitekey="6LcorukcAAAAAAjk399RyD5Zos8IrKE2y_m-6lae"></div><br/>
          <div className="g-recaptcha" data-sitekey="6LeOyeocAAAAALYItep9gSM97oFKFuqM0UgNSUzp"></div><br/>
          <Button onClick={this.send}>
            enviar
          </Button>      
        </Form>

        
      </div>
    )
  }
}

export default Home;