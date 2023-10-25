"use client";

import { useEffect, useState } from "react";
import Book, { book } from "./Book";
import Image from "next/image";

type props = {
  api: string;
};

export const Books: React.FC<props> = ({ api }) => {
  const [books, setBooks] = useState<book[]>([]);
  const [add, setAdd] = useState<boolean>(true);
  const [bookForm, setBookForm] = useState<book>({
    id: "",
    name: "",
    img: "",
    price: 0,
  });
  const [refresh, setRefresh] = useState<boolean>(true);

  const handleAdd = () => {
    setAdd((prev) => !prev);
  };
  const handleAdding = () => {
    handleAdd();
    fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookForm),
    })
      .then((res) => {
        if (!res.ok) {
          console.log("res not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log("error happened: ", e);
      });
      setBookForm({
        id: "",
        name: "",
        img: "",
        price: 0,
      });
      setRefresh((prev)=>!prev);
  }

  useEffect(() => {
    fetch(api)
      .then((res) => {
        if (!res.ok) {
          console.log("res not ok");
        }
        return res.json();
      })
      .then((data: book[]) => {
        setBooks(data);
      })
      .catch((e) => {
        console.log("error happened: ", e);
      });
  }, [refresh]);

  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-9 mx-16 my-6 items-center justify-center">
      {books.map((book: book) => (
        <Book
          key={book.id}
          setRefresh={setRefresh}
          api={api}
          book={{
            id: book.id,
            name: book.name,
            img: book.img,
            price: book.price,
          }}
        />
      ))}
      {add ? (
      <div className="flex flex-col items-center justify-center">
            <button
                className="m-3 py-6 px-9 text-3xl text-black-600 font-bold bg-blue-600 rounded-3xl"
                onClick={()=>setRefresh((prev)=>!prev)}
            >
                Refresh
            </button>
          <button
            className="p-16 text-3xl text-sky-300 font-bold bg-green-700 rounded-3xl"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
        ) : (
        <div className="flex flex-col items-center justify-center">
            <div className="flex gap-x-3">
                <input
                type="text"
                placeholder="Book-id"
                className="py-1 px-3 my-3 w-2/6 text-slate-950 rounded-xl"
                value={bookForm.id}
                onChange={(e) =>
                    setBookForm({
                    ...bookForm,
                    id: e.target.value,
                    })
                }
                />
                <input
                type="text"
                placeholder="Book name"
                className="py-1 px-3 my-3 w-4/6 text-slate-950 rounded-xl"
                value={bookForm.name}
                onChange={(e) =>
                    setBookForm({
                    ...bookForm,
                    name: e.target.value,
                    })
                }
                />
            </div>
            <input
              type="text"
              className="p-1 px-6 m-3 w-full text-slate-950 rounded-xl"
              placeholder="Book image url"
              value={bookForm.img}
              onChange={(e) =>
                setBookForm({
                  ...bookForm,
                  img: e.target.value,
                })
              }
            />
            <Image
              src={bookForm.img}
              alt={bookForm.name}
              width={230}
              height={230}
              className="rounded-xl"
            />
            <div className="flex gap-x-16">
              <input
                type="number"
                className="ml-16 my-3 px-3 py-1 w-4/12 text-slate-950 rounded-xl"
                placeholder="book price"
                value={bookForm.price}
                onChange={(e) =>
                  setBookForm({
                    ...bookForm,
                    price: parseFloat(e.target.value),
                  })
                }
              />
              <button
                className="px-4 py-2 my-3 text-lg bg-green-500 text-blue-900 rounded-xl"
                onClick={handleAdding}
              >
                add
              </button>
            </div>
          </div>
        )}
    </div>
  );
};
