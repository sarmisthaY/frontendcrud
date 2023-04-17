import { Table } from "antd"
import 'antd/dist/reset.css';
import axios from "axios";
import { useState, useEffect } from "react";
import Icon, { DeleteOutlined, EditOutlined } from '@ant-design/icons';

const TableData = () => {
  const [result, setResult] = useState({});

  useEffect(() => {
    axios.get('https://sandapps.hubblerapp.com/testrest/zac/')
      .then(res => {
        const persons = res.data;
        setResult(persons)
      })
  }, [1]);

  const onDelete = (record) => {
    console.log(record, 'inside the delete function >>>>>>>>>>>>>>');
    axios.delete(`https://sandapps.hubblerapp.com/testrest/srinivas/${record._id}`).then((res) => {
      console.log(res, 'kkkkkkkkkkkkkkkkkkk');

    }).catch((err) => {
      console.log(err, 'llllllllllllll');
    });
  };

  const editData = {
    
  }

  const onUpdateTheData = (record) => {
    console.log(record, 'llllllllllllllll');
    axios.put(`https://sandapps.hubblerapp.com/testrest/srinivas/${record._id}`, editData).then((res) => {
      console.log(res, 'kkkkkkkkkkkkkkkkkkk');
    }).catch((res) => {
      console.log(res, 'ppppppppppppppppppppp');
    })
  };

  const columns = [
    {
      key: "first_name",
      title: "First Name",
      render: (record) => {
        return (
          <>
            {record.first_name ? <h4>{record.first_name}</h4> : <h4>{''}</h4>}
          </>
        )
      }
    },
    {
      key: "last_name",
      title: "Last Name",
      render: (record) => {
        return (
          <>
            {record.last_name ? <h4>{record.last_name}</h4> : <h4>{''}</h4>}
          </>
        )
      }
    },
    {
      key: "email",
      title: "Email",
      render: (record) => {
        return (
          <>
            {record.email ? <h4>{record.email}</h4> : <h4>{''}</h4>}
          </>
        )
      }
    },
    {
      key: "phone",
      title: "Phone Number",
      render: (record) => {
        return (
          <>
            {record.phone ? <h4>{record.phone}</h4> : <h4>{''}</h4>}
          </>
        )
      }
    },
    {
      key: "gender",
      title: "Gender",
      render: (record) => {
        return (
          <>
            {record.gender ? <h4>{record.gender}</h4> : <h4>{''}</h4>}
          </>
        )
      }
    },
    {
      key: "actions",
      title: "Actions",
      render: (record) => {
        return (
          <>
            {record.email ? <>
              <EditOutlined onClick={() => onUpdateTheData(record)}/>
              <DeleteOutlined onClick={() => onDelete(record)} style={{ color: 'red', marginLeft: '12px' }} />
            </> : <>
            {''}
            </>}
          </>
        )
      }
    }
  ]

  return (
    <div>
      <Table dataSource={result.result} columns={columns} pagination={false} />
    </div>

  );
}

export default TableData;
