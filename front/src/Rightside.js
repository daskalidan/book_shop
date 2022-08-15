import React  from 'react'
import { useEffect, useState } from "react"
import axios from "axios";
import { SERVER_URL } from './App';


const Rightside = () => {
    const [name, setname] = useState("");
    const [author, setauthor] = useState("");
    const [year_published, setyear_published] = useState("");
    const [books, setbooks] = useState([]);
    useEffect(() => {
      show_books()
    }, 
    [])

    const show_books = () => {
        axios.get(`${SERVER_URL}allbooks/`).then((response) => setbooks(response.data));
      };
    
      const add_book = () => {
        const book = {
          name: name,
          author: author,
          year_published: year_published,
        };
        axios.post(`${SERVER_URL}createbook/`, book).then((response) => console.log(response)).then(show_books)
      };
    
      const delete_book = (id) => {
        axios.delete(`${SERVER_URL}singlebook/${id}`).then((response) => console.log(response)).then(show_books)
      };
      
      const update_book = (id) => {
        const book = {
          name: name,
          author: author,
          year_published: year_published,
        };
        axios.put(`${SERVER_URL}singlebook/${id}`, book).then((response) => console.log(response)).then(show_books)
      };



  return (
    <div className="col-sm-9">
        <h1>my book shop</h1>
        <div>
      <hr></hr>
      <div>
        name: <input onChange={(e) => setname(e.target.value)}></input>
      </div>
      <div>
        author: <input onChange={(e) => setauthor(e.target.value)}></input>
      </div>
      <div>
        year:{" "}
        <input onChange={(e) => setyear_published(e.target.value)}></input>
      </div>
      <button onClick={() => add_book()}>add</button>
      <hr></hr>
      <div>{books.length}</div>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <button onClick={()=>delete_book(book.id)}>delete: {book.id}</button> , 
            <button onClick={()=>update_book(book.id)}>update: {book.id}</button> ,
            book name: {book.name}, author: {book.author}, year published: {book.year_published}
          </li>
        ))}
      </ul>
    </div>
    </div>
  )
}

export default Rightside
