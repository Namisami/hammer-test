import { useEffect, useState} from 'react'; 
import UserView from './UserView';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import { Card, Table, Tooltip, Button } from 'antd';
import {  
  DeleteOutlined, 
  LoadingOutlined,
  EditOutlined
} from '@ant-design/icons';
import axios from 'axios';

const ClientsList = () => {
  const [users, setUsers] = useState([])
  const [selectedUser, setSelectedUser] = useState()
  const [isLoading, setIsLoading] = useState(false)
  
  useEffect(async () => {
    setIsLoading(true)
    let userList = []
    await axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(async res => userList = res.data)
      .catch(err => console.log(err))
    let avatars = []
    await axios
      .get('https://jsonplaceholder.typicode.com/photos')
      .then(res => avatars = res.data)
      .catch(err => console.log(err))
    try {
      let i = 0
      for (let user of userList) {
        user.avatar = avatars[i].url
        user.avatarThumbnail = avatars[i].thumbnailUrl
        i++
      }
      setUsers(userList)
      setIsLoading(false)
    } catch(e) {
      console.log(e)
    }
  }, [])

  const deleteUser = async (id) => {
    await axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(async res => console.log(res.data))
      .catch(err => console.log(err))
    setUsers(users.filter(item => item.id !== id))
  }

  const showUser = (el) => {
    setSelectedUser(el)
  }

  const changeUser = (user) => {
    let userList = users
    let userChangeIndex = userList.indexOf(selectedUser)
    userList[userChangeIndex] = user
    console.log(userList)
    setUsers(userList)
    setSelectedUser(undefined)
  }

  const tableColumns = [
    {
      title: 'Пользователь',
      dataIndex: 'name',
      render: (_, record) => (
        <div className="d-flex">
          <AvatarStatus src={record.avatarThumbnail} name={record.name} subTitle={record.email}/>
        </div>
      ),
      sorter: {
        compare: (a, b) => {
          a = a.name.toLowerCase();
          b = b.name.toLowerCase();
          return a > b ? -1 : b > a ? 1 : 0;
        },
      },
    },
    {
      title: 'Телефон',
      dataIndex: 'phone',
    },
    {
      title: 'Город',
      dataIndex: 'address',
      render: (record) => {
        return <span>{record.city}</span>
      },
      sorter: {
        compare: (a, b) => {
          a = a.address.city.toLowerCase();
          b = b.address.city.toLowerCase();
          return a > b ? -1 : b > a ? 1 : 0;
        },
      },
    },
    {
      title: 'Компания',
      dataIndex: 'company',
      render: (record) => {
        return <span>{record.name}</span>
      },
      sorter: {
        compare: (a, b) => {
          a = a.company.name.toLowerCase();
          b = b.company.name.toLowerCase();
          return a > b ? -1 : b > a ? 1 : 0;
        },
      },
    },
    {
      title: '',
      dataIndex: 'actions',
      render: (_, elm) => (
        <div className="text-right">
          <Tooltip title="Редактировать">
            <Button type="primary" className="mr-2" icon={<EditOutlined />} onClick={() => {showUser(elm)}} size="small"/>
          </Tooltip>
          <Tooltip title="Удалить">
            <Button danger icon={<DeleteOutlined />} onClick={()=> {deleteUser(elm.id)}} size="small"/>
          </Tooltip>
        </div>
      )
    }
  ];

  return (
    <>
      { isLoading 
      ? <div className="d-flex justify-content-center align-items-center" style={{ height: '500px' }}>
          <LoadingOutlined style={{ fontSize: '5rem' }} />
        </div>
      : <Card bodyStyle={{'padding': '0px'}}>  
          <Table columns={ tableColumns } dataSource={ [...users] } rowKey={'id'} />
          <UserView data={ selectedUser } onUserViewClose={()=> { setSelectedUser(undefined) }} onUserViewChange={ (user) => changeUser(user) }/>
        </Card>
      } 
    </>
  )
}

export default ClientsList
