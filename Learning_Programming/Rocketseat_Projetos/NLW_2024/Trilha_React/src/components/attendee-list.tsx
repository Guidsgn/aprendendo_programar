import { Search } from 'lucide-react'

export function AttendeeList() {
    return (
        <div className='flex flex-col gap-4'>
            <div className="flex gap-3 items-center">
                <h1 className="text-2xl font-bold">Participantes</h1>
                <div className="flex items-center px-3 w-72 py-1.5 border border-white/10 rounded-lg text-sm gap-3">
                    <Search className="size-4 text-indigo-300" />
                    <input type="text" placeholder="Buscar Participante" className="flex-1 bg-transparent outline-none" />
                </div>
            </div>

            <div className='border border-white/10 rounded-lg'>
                <table className='w-full'>
                    <thead>
                        <tr className='border-b border-white/10'>
                            <th className='py-3 px-2.5 text-sm font-semibold text-left'>
                                <input type="checkbox" />
                            </th>
                            <th className='py-3 px-2.5 text-sm font-semibold text-left'>Código</th>
                            <th className='py-3 px-2.5 text-sm font-semibold text-left'>Participante</th>
                            <th className='py-3 px-2.5 text-sm font-semibold text-left'>Data de Inscrição</th>
                            <th className='py-3 px-2.5 text-sm font-semibold text-left'>Data do Check-in</th>
                            <th className='py-3 px-2.5 text-sm font-semibold text-left'></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='border-b border-white/10'>
                            <td className='py-3 px-2.5 text-sm text-zinc-300'>
                                <input type="checkbox" />
                            </td>
                            <td className='py-3 px-2.5 text-sm text-zinc-300'>21512</td>
                            <td className='py-3 px-2.5 text-sm text-zinc-300'>
                                <div className='flex flex-col gap-1'>
                                    <span className='font-semibold text-white'>Mayk Brito</span>
                                    <span>maykbritu@gmail.com</span>
                                </div>
                            </td>
                            <td className='py-3 px-2.5 text-sm text-zinc-300'>7 dias atrás</td>
                            <td className='py-3 px-2.5 text-sm text-zinc-300'>3 dias atrás</td>
                            <td className='py-3 px-2.5 text-sm text-zinc-300'></td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={3}>
                                Mostrando 10 de 299 itens
                            </td>
                            <td colSpan={3}>
                                Página 1 de 23
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}