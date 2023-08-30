//logo
import LogoWhite from '../assets/logo-white.svg'

export default function Footer() {
   return (
       <footer className='bg-primary py-12'>
            <div className='container mx-autp text-white flex justify-between'>
                {/* logo */}
                <a href='/'>
                    <img src='LogoWhite' alt=''/>
                </a>
                Copyright &copy; 2022. All rights reserved. 
            </div>
       </footer>
   )
}
