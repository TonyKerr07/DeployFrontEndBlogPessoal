import LinkedinLogo from '../../assets/linkedin.png'
import GithubLogo from '../../assets/github.png'
import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import './footer.css';

function Footer() {

  const { usuario, handleLogout } = useContext(AuthContext)

  let footerComponent

  let data = new Date().getFullYear()

  if(usuario.token !== '') {
    footerComponent = (
      <>
        <div className="flex justify-center bg-indigo-900 text-white">
          <div className="container flex flex-col items-center py-4">
            <p className='text-xl font-bold'>Blog pessoal Generation | Copyright: {data}</p>
            <p className='text-lg'>Acesse nossas redes sociais</p>
            <div className='flex gap-2'>
            <a href="https://www.linkedin.com/in/antoniokerr/" target='_blank'><img src={LinkedinLogo} alt="" className='logo' /></a>
            <a href="https://github.com/TonyKerr07/" target='_blank'><img src={GithubLogo} alt="" className='logo' /></a>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      {footerComponent}
    </>
  )
}

export default Footer