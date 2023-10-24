"use client"

import Image from "next/image"
import { useEffect, useState } from "react";

export interface book {
    id : string;
    name : string;
    img : string;
    price : number;
}

type props = {
    book : book;
    api : string;
    setRefresh : React.Dispatch<React.SetStateAction<boolean>>
};

const Book : React.FC<props> = ({book, api, setRefresh}) => {

  const [isEditing, setIsEditing] = useState<boolean>(true);
  const [bookForm, setBookForm] = useState<book>(book);

  const handleEdit = () => {
    setIsEditing((prev) => !prev);
  }

  const handleDelete = () => {
    fetch(api+"/"+bookForm.id, {
      method: "DELETE"
    })
    .then(res => {
      if(!res.ok){
        console.log("res not ok");
      }
      return res.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(e => {
      console.log("error happened: ", e);
    })
    
    setRefresh((prev)=>!prev);
  }

  useEffect(()=>{
    if(isEditing){
      fetch(api, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(bookForm)
      })
      .then(res => {
        if(!res.ok){
          console.log("res not ok");
        }
        return res.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(e => {
        console.log("error happened: ", e, bookForm);
      })
    }
  }, [isEditing])

  return (
    <>
    {!isEditing ? 
      <div className="flex flex-col items-center justify-center"
      >
          <input
            type="text"
            className="p-1 text-slate-950 w-min rounded-xl"
            value={bookForm.name}
            onChange={(e) => setBookForm({
              ...bookForm,
              name: e.target.value
            })
            }
          />
          <input
            type="text"
            className="p-1 m-3 w-full text-slate-950 rounded-xl"
            value={bookForm.img}
            onChange={(e) => setBookForm({
              ...bookForm,
              img: e.target.value
            })
          }
          />
          <Image src={bookForm.img} alt={bookForm.id} 
          width={230}
          height={230}
          className="rounded-xl"
          />
          <div className="flex gap-x-28"
          ><input
            type="number"
            className="ml-9 my-3 w-3/12 text-slate-950 rounded-xl"
            value={bookForm.price}
            onChange={(e) => setBookForm({
              ...bookForm,
              price: parseFloat(e.target.value)
            })
          }
          />
          <button className="px-3 py-1 my-3 text-lg bg-green-500 text-blue-900 rounded-xl" onClick={handleEdit}
          >save</button>
          </div>
      </div>
      : <div className="flex flex-col items-center justify-center"
    >
      <div className="flex gap-x-1"
        ><h2 className="text-3xl p-3 text-purple-600"
        >#{bookForm.id}</h2>
          <h2 className="text-3xl text-cyan-300 p-3"
        >{bookForm.name}</h2>
        </div>
        <Image src={bookForm.img} alt={book.name} 
        width={300}
        height={300}
        className="rounded-xl"
        />
        <div className="flex gap-x-6"
        ><h3 className="text-lg p-1 m-3 text-amber-200"
        >${bookForm.price}</h3>
        <button className="px-3 py-1 my-3 text-lg bg-sky-500 text-blue-900 rounded-xl" onClick={handleDelete}
        >delete</button>
        <button className="px-3 py-1 my-3 text-lg bg-sky-500 text-blue-900 rounded-xl" onClick={handleEdit}
        >edit</button>
        </div>
    </div>}
    </>
  )
}

export default Book;