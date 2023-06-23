import Link from 'next/link'
const links =[{
    label: 'Inicio',
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
                <ul className="flex list-none gap-5 text-xl justify-center mt-6">
                  {links.map(({label, route})=>(
                    <li key={route} className='font-bold text-slate-600 hover:text-slate-800'>
                      <Link href={route}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </header>
      )
}
