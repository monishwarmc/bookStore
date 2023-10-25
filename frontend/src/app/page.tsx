import { Books } from './components/Books'
import Navbar from './components/Navbar'

export default function Home() {

  const api : string = "https://bookstore-bjh2.onrender.com/books";
  
  return (
    <>
      <Navbar />
      <Books 
        api={api}
      />
    </>
  )
}
