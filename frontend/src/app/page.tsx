import { Books } from './components/Books'
import Navbar from './components/Navbar'

export default function Home() {

  const api : string = "http://54.224.234.234/books";
  
  return (
    <>
      <Navbar />
      <Books 
        api={api}
      />
    </>
  )
}
