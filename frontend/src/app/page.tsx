import { Books } from './components/Books'
import Navbar from './components/Navbar'

export default function Home() {

  const api : string = "http://localhost:8080/books";
  
  return (
    <>
      <Navbar />
      <Books 
        api={api}
      />
    </>
  )
}
