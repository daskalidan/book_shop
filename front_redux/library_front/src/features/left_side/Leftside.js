import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectToken } from '../authentication/authenticationSlice'
import { doaddbookAsync } from '../main_shop/main_shopSlice'


const Leftside = () => {
  const dispatch = useDispatch();

  const [bookname, setbookname] = useState('')
  const [author, setauthor] = useState('')
  const [year_published, setyear_published] = useState('')

  const token = useSelector(selectToken);

  return (
    <div className="left">
        {token ? (<div className='add-book'>
        <h3>add a book</h3>
        <input type='text' value={bookname} placeholder='bookname' onChange={(e) => setbookname(e.target.value)}></input>{' '}
        <input type='text' value={author} placeholder='author' onChange={(e) => setauthor(e.target.value)}></input>{' '}
        <input type='text' value={year_published} placeholder='year_published' onChange={(e) => setyear_published(e.target.value)}></input>{' '}
        <button onClick={()=> dispatch(doaddbookAsync({'bookname': bookname, 'author': author, 'year_published': year_published, 'token':token}))}>add book</button>
        </div>): (<p className='add-book'>log in to add books</p>)}
        <h3>categories</h3>
    </div>
  )
}

export default Leftside