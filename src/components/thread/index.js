import React, { useState, useEffect } from 'react'
import Axios from 'axios'

const API_URL_THREADS = 'https://5starguides-api.tungtung.tech/messages'
const API_URL_USERS = 'https://5starguides-api.tungtung.tech/searchTourGuide'
const API_URL = 'https://5starguides-api.tungtung.tech'

const Thread = (props) => {
  const [threads, setThreads] = useState([])
  const [users, setUsers] = useState([])
  const [idx, setIdx] = useState([])

  const config = {
    headers: { Authorization: `Bearer ${props.jwt}` }
  }

  useEffect(() => {
    const fetchThread = async () => {
      const threadPromise = Axios.get(API_URL_THREADS, config)
        .then(({ data }) => {
          setThreads(data.data)
          return data.data
        })
        .then(thread => {
          const tmp = thread.map(thread => {
            let i = 0
            thread.users.forEach((user, index) => {
              if (props.id !== user._id) {
                i = index
              }
            })
            return i
          })
          setIdx(tmp)
        })
        .catch(err => console.log(err))

      await Promise.all([threadPromise])
    }

    const fetchUsers = async () => {
      const usersPromise = Axios.post(API_URL_USERS)
        .then(({ data }) => {
          setUsers(data.data)
        })
        .catch(err => console.log(err))
      await Promise.all([usersPromise])
    }

    fetchThread()
    fetchUsers()
  }, [])

  if (threads.length > 0) {
    return (
      <>
        <ul className='list-unstyled'>
          {threads.map((thread, index) => {
            const src = (thread.users[idx[index]] && thread.users[idx[index]].avatar) ? API_URL + thread.users[idx[index]].avatar.url : '../../../public/assets/img-temp/100x100/img1.jpg'
            const username = thread.users[idx[index]] ? thread.users[idx[index]].username : null
            return (
              <li className='media g-brd-around g-brd-gray-light-v4 g-pa-20 g-mb-minus-1' key={thread._id}>
                <div className='d-flex g-mt-2 g-mr-15'>
                  <img className='g-width-40 g-height-40 rounded-circle' src={src} alt='Image Description' />
                </div>
                <div className='media-body'>
                  <div className='d-flex justify-content-between'>
                    <strong>{username}</strong>
                    <span className='align-self-center small text-nowrap'>2 min ago</span>
                  </div>
                  <span className='d-block'>{thread.lastMessage}</span>
                </div>
              </li>
            )
          })}
        </ul>

        <br />

        <ul className='list-unstyled'>
          {users.length > 0 && users.map((user) => {
            const src = user.avatar ? API_URL + user.avatar.url : '../../../public/assets/img-temp/100x100/img1.jpg'
            const username = user.username
            return (
              <li className='g-brd-around g-brd-gray-light-v4 g-brd-left-3 g-brd-blue-left g-rounded-3 g-pa-20 g-mb-7' key={user._id}>
                <div className='d-flex g-mt-2 g-mb-15 g-mr-15'>
                  <img className='g-width-40 g-height-40 rounded-circle' src={src} alt='Image Description' />
                </div>
                <div className='d-flex justify-content-start'>
                  <h5 className='g-font-weight-600 g-color-black'>{username}</h5>
                  <span className='ml-auto small g-color-blue g-px-10'>{user.address}</span>
                </div>
                <p>{user.aboutMe}</p>
                <div className='d-flex justify-content-between'>
                  <ul className='u-list-inline' />
                  <div className='align-self-center'>
                    <a className='btn u-btn-outline-blue g-font-weight-600 g-rounded-50' href='#'>Message</a>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </>
    )
  } else return null
}

export default Thread
