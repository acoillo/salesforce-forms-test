import React, { Component } from 'react';
import { Form, Input, Button, Checkbox, Row, Col, Select } from 'antd';
import './styles.scss';
import Select2 from 'rc-select';
const FormItem = Form.Item;
const Option = Select;
const { TextArea } = Input;
class Home extends Component {



  render() {
    return (
      <div className='form__content'>
        <Form className="form" action="https://webto.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8" method="POST">
          
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

          <div class="g-recaptcha" data-sitekey="6LcorukcAAAAAAjk399RyD5Zos8IrKE2y_m-6lae"></div>
          <Button>
            enviar
          </Button><FormItem
              type='hidden'>
            <Input
              type='hidden'
              name='captcha_settings'
              value='{"keyname":"SalesforceFormsTest","fallback":"true","orgId":"00D5f000005XpZY","ts":""}'
            />
          </FormItem>
          <FormItem
              type='hidden'>
            <Input
              type='hidden'
              name='orgid'
              value='00D5f000005XpZY'
            />
          </FormItem>
          <FormItem
              type='hidden'>
            <Input
              type='hidden'
              name='retURL'
              value='https://www.salesforce.com/mx/?ir=1'
            />
          </FormItem>        
        </Form>

      </div>
    )
  }
}

export default Home;