import React, { Component } from 'react';
import { Form, Input, Button, Select, Row, Col, message} from 'antd';
import postForm from '../../services/api/postForm';
import ReCAPTCHA from "react-google-recaptcha";
import './styles.scss';

const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;
const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};
const key = 'updatable';

class Home extends Component {

  state={
    name: '',
    email: '',
    priority: '',
    type: '',
    reason: '',
    products: '',
    subject: '',
    description: '',
    flag_recaptcha: true
  }
  
  onChange = (value) => {
    console.log("Captcha value:", value);
    this.setState({
      flag_recaptcha: false
    })
  }

  send = () => {
    let data = new URLSearchParams ({
      "orgid": '00D5f000005XpZY',
      "name": this.state.name || '',
      "email": this.state.email || '',
      "priority": this.state.priority || '',
      "type": this.state.type || '',
      "reason": this.state.reason || '',
      "00N5f00000J8kHX": this.state.products || '',
      "subject": this.state.subject || '',
      "description": this.state.description || '',
    })
    postForm.postForm(data).then(

      this.setState({
        name: '',
        email: '',
        priority: '',
        type: '',
        reason: '',
        products: '',
        subject: '',
        description: '',
        flag_recaptcha: false
        })
      
      ).then( () => {
        message.loading({ content: 'Loading...', key });
        setTimeout(() => {
          message.success({ content: 'Case created successfully!!!!', key, duration: 3 });
        }, 1000);
      });
    }

    handleChangeName = (e) => {
      this.setState({
        name: e.target.value
      });
    }

    handleChangeEmail = (e) => {
      this.setState({
        email: e.target.value
      });
    }

    handleChangeReason = (value) => {
      this.setState({
        reason: value
      });
    }

    handleChangeSubject = (e) => {
      this.setState({
        subject: e.target.value
      });
    }

    handleChangeDescription = (e) => {
      this.setState({
        description: e.target.value
      });
    }

    handleChangePriority = (value) =>{
      this.setState({
        priority: value
      });
    }

    handleChangeType = (value) =>{
      this.setState({
        type: value
      });
    }

    handleChangeProduct = (value) =>{
      this.setState({
        products: value
      });
    }
  
  render() {
    return (
      <div className='content__full'>
        <h1>Form to create a Case</h1>
        <div className='content__form'>
        <Form {...layout} >
        <Row>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <FormItem
              label='Contact Name'>
            <Input
              id="name" 
              maxLength="80" 
              name="name" 
              size="20" 
              type="text"
              onChange= { (e) => this.handleChangeName(e)}
              value={this.state.name}

            />
          </FormItem>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <FormItem
              label='Email'>
            <Input
              id="email" 
              maxLength="80" 
              name="email" 
              size="20" 
              type="text"
              onChange= { (e) => this.handleChangeEmail(e)}
              value={this.state.email}
            />
          </FormItem>
          </Col>
        </Row>
        <Row>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <FormItem
              label='Priority'>
            <Select
              id="priority" 
              name="priority" 
              onChange= { this.handleChangePriority}
              value={this.state.priority}
            >
              <Option value='High'>High</Option>
              <Option value='Medium'>Medium</Option>
              <Option value='Low'>Low</Option>
            </Select>
          </FormItem>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <FormItem
              label='Type'>
            <Select
              id="type" 
              name="type" 
              onChange= { this.handleChangeType}
              value={this.state.type}
            >
              <Option value='High'>Mechanical</Option>
              <Option value='Electronic'>Electrical</Option>
              <Option value='Medium'>Electronic</Option>
              <Option value='Structural'>Structural</Option>
              <Option value='Other'>Other</Option>
            </Select>
          </FormItem>
          </Col>
        </Row>
        
        <Row>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <FormItem
              label='Case Reason'>
            <Select
              id="reason" 
              name="reason" 
              onChange= { this.handleChangeReason}
              value={this.state.reason}
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
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <FormItem
              label='Product'>
            <Select
              id="00N5f00000J8kHX" 
              name="00N5f00000J8kHX" 
              onChange= { this.handleChangeProduct}
              value={this.state.products}
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
          </Col>
        </Row>   
          
        <Row>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <FormItem
              label='Subject'>
            <Input
              id="subject" 
              maxLength="80" 
              name="subject" 
              size="20" 
              type="text"
              onChange= { (e) => this.handleChangeSubject(e)}
              value={this.state.subject}
            />
          </FormItem>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <FormItem
              label='Description'>
            <TextArea
            onChange= { (e) => this.handleChangeDescription(e)}
            value={this.state.description}
              name="description" 
            />
          </FormItem>
          </Col>
        </Row>   
          
          <div className='recaptcha__content'>
            <ReCAPTCHA
              sitekey="6LcorukcAAAAAAjk399RyD5Zos8IrKE2y_m-6lae"
              onChange={this.onChange}
            />
          </div>
          <Button type='primary' disabled={this.state.flag_recaptcha} onClick={this.send}>
            Create Case
          </Button>      
        </Form>
        </div>
      </div>
    )
  }
}

export default Home;