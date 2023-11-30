import { useState, useEffect } from 'react';
import { Avatar, Drawer, Divider, Input, Button } from 'antd';
import { 
	MobileOutlined, 
	MailOutlined, 
	UserOutlined, 
	CompassOutlined,
	HomeOutlined,
	GlobalOutlined,
} from '@ant-design/icons';

const UserView = ({
  data,
  onUserViewClose,
  onUserViewChange
}) => {
  const [state, setState] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setState(data)
  }, [data])

  const onInputChange = (e) => {
    let name = e.target.name.split('.')
    if (name.length === 1) {
      return setState({...state, [e.target.name]: e.target.value})
    }
    console.log(name, name[1])
    if (name.length === 2) {
      return setState({...state, [name[0]]: {
        ...state[name[0]],
        [name[1]]: e.target.value,
      }})
    }
  }

  const saveHandle = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      onUserViewChange(state)
    }, 3000)
  }

  return (
    <Drawer
      width={300}
      placement="right"
      onClose={onUserViewClose}
      closable={false}
      visible={data}
    >
      <div className="text-center mt-3">
        <Avatar size={80} src={data?.avatar} />
        <h3 className="mt-2 mb-0">{data?.name}</h3>
        <div className="text-muted">{data?.username}</div>
        <div className="">{data?.company?.name}</div>
      </div>
      <Divider dashed />
      <div className="">
        <h6 className="text-muted text-uppercase mb-3">Account details</h6>
        <p>
          <UserOutlined />
          <span className="ml-3 text-dark">id: {data?.id}</span>
        </p>
      </div>
      <div className="mt-5">
        <h6 className="text-muted text-uppercase mb-3">CONTACT</h6>
        <p className='d-flex align-items-center'>
          <MobileOutlined />
          <Input onChange={ onInputChange } size='small' className="ml-3 text-dark" name='phone' value={state?.phone}></Input>
        </p>
        <p className='d-flex align-items-center'>
          <MailOutlined />
          <Input onChange={ onInputChange } size='small' className="ml-3 text-dark" name='email' value={state?.email ? state?.email: '-'}></Input>
        </p>
        <p className='d-flex align-items-center'>
          <HomeOutlined />
          <Input onChange={ onInputChange } size='small' className="ml-3 text-dark" name='address.city' value={state?.address?.city}></Input>
        </p>
        <p>
          <CompassOutlined />
          <span className="ml-3 text-dark">({state?.address?.geo?.lat}; {state?.address?.geo?.lng})</span>
        </p>
      </div>
      <div className="mt-5">
        <h6 className="text-muted text-uppercase mb-3">Social profiles</h6>
        <p className='d-flex align-items-center'>
          <GlobalOutlined />
          <Input onChange={ onInputChange } size='small' className="ml-3 text-dark" name='website' value={`${state?.website ? state?.website : '-'}`}></Input>
        </p>
      </div>
      <div className='d-flex justify-content-between'>
        <Button type="primary" onClick={ saveHandle } loading={ isLoading }>
          Сохранить
        </Button>
        <Button onClick={ onUserViewClose} type="primary" danger>
          Отменить
        </Button>
      </div>
    </Drawer>
  )
}

export default UserView
