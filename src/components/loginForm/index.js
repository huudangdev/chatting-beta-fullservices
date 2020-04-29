import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import Chatting from '../chatting'
import Thread from '../thread'

const API_URL = 'https://5starguides-api.tungtung.tech/auth/local'

const Login = () => {
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const [jwt, setJwt] = useState('')
  const [isLogin, setIsLogin] = useState(false)
  const [id, setId] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(identifier, password)
    Axios.post(API_URL, {
      identifier,
      password
    }).then(({ data }) => {
      if (data) {
        setJwt(data.jwt)
        setId(data.user._id)
      }
    })
  }

  useEffect(() => {
    if (jwt !== '') {
      setIsLogin(true)
    }
  }, [jwt])

  if (!isLogin) {
    return (
      <>
        <form className='g-brd-around g-brd-gray-light-v4 g-pa-30 g-mb-30'>
          <div className='form-group g-mb-25'>
            <label>Email address</label>
            <input
              type='email'
              className='form-control rounded-0 form-control-md'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
              placeholder='Enter email'
              value={identifier}
              onChange={(event) => setIdentifier(event.target.value)}
            />
            <small id='emailHelp' className='form-text text-muted'>We'll never share your email with anyone else.</small>
          </div>

          <div className='form-group g-mb-25'>
            <label>Password</label>
            <input
              type='password'
              className='form-control rounded-0 form-control-md'
              id='exampleInputPassword1'
              placeholder='Password'
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button type='submit' className='btn btn-md u-btn-primary rounded-0' onClick={handleSubmit}>Submit</button>
        </form>
      </>
    )
  } else {
    return (
      <>
        <Thread jwt={jwt} id={id} />
      </>
    )
  }
}

export default Login
