import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="w-full bg-sky-500 flex items-center justify-center"
    >
    <Link href="https://example.com">
      <a target="_blank" rel="noopener noreferrer"
        className="hover:bg-blue-500">
        <h1 className="text-6xl hover:text-5xl font-bold p-3"
        >Book Store</h1>
      </a>
    </Link>
    </div>
  )
}

export default Navbar
