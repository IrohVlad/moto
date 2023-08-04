import React from 'react'
import { useNavigate } from 'react-router-dom';
import Book from '../../features/book/book.jsx';
import  './style.scss'

export default function AdminPage() {
    const navigate = useNavigate();
    const [books, setBooks] = React.useState({value: [], loaded: false})
    React.useEffect(()=>{
        async function getBooks() {
            try{
                const request = await fetch('http://127.0.0.1:7000/api/book', {
                    method: 'GET',
                    headers: {
                        'content-type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': localStorage.getItem('token')
                    }
                })
                if(request.status == 200){
                    const data = await request.json()
                    setBooks({value: data, loaded: true})
                }
            } catch {
                setBooks({value: [], loaded: true})
            }
    }
    getBooks()
    } , [])
  return (
    <main>
        <section className='admin-section'>
            <div className="admin _container">
                <div className="nav">
                <svg onClick={()=>{navigate('/')}} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M436.5 251.44a11.33 11.33 0 0 0-2.36-3.46L323 136.86a11.34 11.34 0 0 0-16 16l91.78 91.77H86.57a11.34 11.34 0 0 0 0 22.68h312.18L307 359.11a11.34 11.34 0 1 0 16 16L434.14 264a11.33 11.33 0 0 0 2.36-12.56Z" fill="white" className="fill-262626"></path></svg>
                </div>
                <div className="content"> 
                    {books.loaded ? books.value.map((value, index)=>{
                        return <Book date={value.createdAt} mot={value.mot} track={value.track} number={value.number} email={value.email}/>
                    }) : <></>}
                </div>
            </div>
    </section>
    </main>
  )
}
