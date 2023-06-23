import Link from 'next/link'
import { SiCounterstrike } from "react-icons/si";
const links =[{
    label: 'Noticias',
    route: '/'
  },{
    label: 'Jugado',
    route: '/played'
  }
  ,{
    label: 'próximo',
    route: '/upcoming'
  }]

export default function Navigation() {
    return (
        <header className="p-1 mb-1">
              <nav>
                <ul className="flex list-none gap-8 text-xl justify-center mt-6">
                  {links.map(({label, route})=>(
                    <li key={route} className='font-bold text-slate-600 hover:text-slate-800'>
                      <Link href={route} className='flex items-center'><SiCounterstrike/>{label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </header>
      )
}
