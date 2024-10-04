import Link from "next/link"

export default function NotFound() {
  return (
    <div className="grid items-center justify-center p-6">
      <h2 className="text-4xl">Whoopa!</h2>
      <p className="text-xl my-8 w-2/3">{`The page you were trying to get to can't be found and might have been moved or changed. Where shall we take you instead?`}</p>
      <div>
        <Link href="/" className="border-b-2 pb-2 border-slOrange font-bolder text-xl tracking-wide hover:text-slOrange">Take me home</Link>
      </div>
    </div>
  )
}
