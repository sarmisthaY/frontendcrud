import { Button, Form, Input, Dropdown } from "antd";
import { useState } from "react";
import axios from "axios";

const CreateData = () => {
    // const [firstname, setFirstName] = useState()
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        phone: ''
    })

    const onFinish = (values) => {
        console.log('Success:', values);
        // setValues({
        //     firstName: values.firstname,
        //     lastName: values.lastname,
        //     email: values.email,
        //     gender: values.gender,
        //     phone: values.phone
        // });

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        // const config = {
        //     header: {
        //         "Access-Control-Allow-Origin": "*",
        //         "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        //     }
        // };

        const clientData = {
            first_name: values.firstname,
            last_name: values.lastname,
            email: values.email,
            gender: values.gender,
            phone: values.phone
        };

        axios.post('https://sandapps.hubblerapp.com/testrest/srinivas/', clientData, config)
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

    const items = [
        {
            key: '1',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    1st menu item
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    2nd menu item (disabled)
                </a>
            ),
            //   icon: <SmileOutlined />,
            //   disabled: true,
        },
        {
            key: '3',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                    3rd menu item (disabled)
                </a>
            ),
            //   disabled: true,
        },
        {
            key: '4',
            danger: true,
            label: 'a danger item',
        },
    ];

    return (
        <Form name="basic" labelCol={{ span: 8 }}
            wrapperCol={{
                span: 16,
            }}
            style={{
                maxWidth: 600,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off">
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
                {/* <Dropdown menu={{ items }}>
                    <a onClick={(e) => e.preventDefault()}>
                        <Space>
                            Hover me
                            <DownOutlined />
                        </Space>
                    </a>
                </Dropdown> */}
            </Form.Item>
            <Form.Item label="Phone Number" name="phone" rules={[{ required: true, message: 'Please input your Phone Number!' }]}>
                <Input />
            </Form.Item>

            <Button type="primary" htmlType="submit">Submit</Button>
        </Form>
    );
};

export default CreateData;
