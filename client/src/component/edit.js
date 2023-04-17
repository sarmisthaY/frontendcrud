import { Button, Form, Input, Dropdown } from "antd";
import { useState } from "react";
import axios from "axios";

const EditUser = () => {

    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        phone: ''
    });

    const onFinish = (values) => {
        console.log('Success:', values);

        // const config = {
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // }

        const clientData = {
            first_name: values.firstname,
            last_name: values.lastname,
            email: values.email,
            gender: values.gender,
            phone: values.phone
        };

        axios.post('https://sandapps.hubblerapp.com/testrest/srinivas/', clientData)
            .then(response => {
                // history.push('/view')
                console.log('response >>>', response);
                setValues({
                    firstName: "",
                    lastName: "",
                    email: "",
                    gender: "",
                    phone: ""
                });
            }).catch(err => {
                console.log(err);
            });
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    console.log('values >>>', values);

    return (
        <Form name="basic" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} style={{ maxWidth: 600 }} initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
            <Form.Item label="FirstName" name="firstname" rules={[{ required: true, message: 'Please input your FirstName!' }]}>
                <Input />
            </Form.Item>
            <Form.Item label="LastName" name="lastname" rules={[{ required: true, message: 'Please input your LastName!' }]}>
                <Input />
            </Form.Item>
            <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your Email!' }]}>
                <Input />
            </Form.Item>
            <Form.Item label="Gender" name="gender" rules={[{ required: true, message: 'Please input your Gender!' }]}>
                <Input />
                
            </Form.Item>
            <Form.Item label="Phone Number" name="phone" rules={[{ required: true, message: 'Please input your Phone Number!' }]}>
                <Input />
            </Form.Item>

            <Button type="primary" htmlType="submit">Submit</Button>
        </Form>
    );
};

export default EditUser;
