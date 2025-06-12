import { Link } from 'react-router'

const ErrorPage = () => {
  return (
    <div className="flex flex-1 justify-center items-center flex-col">
      <h1 className='font-bold text-6xl mb-2'>404</h1>
      <h1 className='font-bold text-4xl mb-4'>Page not found</h1>
      <p className='italic text-1xl mb-4'>Você acessou uma pagina que não existe!</p>

      <Link to="/" className='bg-gray-50/20 py-1 px-4 rounded-md'>Voltar para Home</Link>
    </div>
  )
}

export { ErrorPage }