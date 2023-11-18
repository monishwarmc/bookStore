import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="w-full bg-sky-500 flex items-center justify-center"
    >
    <Link href="https://github.com/monishwarmc/bookStore" passHref>
      <a target="_blank"
        className="hover:text-blue-900">
        <h1 className="text-6xl hover:underline font-bold p-3"
        >Book Store</h1>
      </a>
    </Link>
    </div>
  )
}

export default Navbar
