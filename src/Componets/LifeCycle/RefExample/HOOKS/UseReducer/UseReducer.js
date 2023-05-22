import React, { useReducer, useState } from 'react'

const booksData = [
    {id:1,name:'Pather Panchal'},
    {id:2,name:'Padma Nadir Mahji'},
    {id:3,name:'Srikanta'}
]

const Modal = ({modalText}) => {
   return  <p>{modalText}</p>
}

const UseReducer = () => {

// const[books, setBooks] = useState(booksData);
// const[modalText,setModalText] = useState("");
// const[isModalOpen, setModalOpen] = useState(false);


const reducer = (state, action) =>{
    //action.type , action.payload
    if(action.type === "ADD")
    {   
        const allBooks = [...state.books, action.payload]

            return {
                ...state,
                books:allBooks,
                isModalOpen:true,
                modalText:"Book is added"

            } 
    }
    if(action.type === "REMOVE")
    {
        const filteredBooks = [...state.books].filter(book => book.id !== action.payload);

            return{
                ...state,
                books:filteredBooks,
                isModalOpen:true,
                modalText:"Book is removed"
            };

    }
    return state;
}

const [bookState, dispatch] = useReducer(reducer, {
    books:booksData,
    isModalOpen:false,
    modalText:""
});

const[bookName, setBookName] = useState("");

const handleSubmit = (e)=>{
            e.preventDefault();
            const newBook = {id: new Date().getTime().toString(), name:bookName};
            dispatch({type:"ADD" , payload:newBook})
            setBookName("");

      

        };

    const removeBook = (id)=>{
        dispatch({type:"REMOVE" , payload: id}) 
    }

  return (
    <>
      <h3>Book List</h3>

    <form onSubmit={handleSubmit}>
        <input type="text" value={bookName} onChange={(e)=>{setBookName(e.target.value)}}></input>

        <button type='submit' >Add Book</button>
    </form>
    {
        bookState.isModalOpen && <Modal modalText={bookState.modalText}></Modal>
    }

      {
        bookState.books.map((book)=>{
            const{id,name} = book;
            return <div><li style={{textAlign:"center" ,textDecoration:"None", listStyleType: "none",   marginRight:"2px"}} key={id}>{name} <button onClick={()=>{removeBook(id)}} >X</button></li>
            <br></br></div>
        
        })
      }
    </>
  )
}

export default UseReducer
