import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="w-full bg-sky-500 flex items-center justify-center"
    >
    <Link href="https://github.com/monishwarmc/bookStore" target="_blank">
        <h1 className="text-6xl hover:text-blue-900 hover:underline font-bold p-3"
        >Book Store</h1>
    </Link>
    </div>
  )
}

export default Navbar
