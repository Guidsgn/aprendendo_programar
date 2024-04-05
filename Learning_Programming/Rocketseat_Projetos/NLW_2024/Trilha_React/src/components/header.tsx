// TSX = TypeScript XML
// JSX = JavaScript XML

import gumeLogo from '../assets/LogoGume.svg'

export function Header() {
    return (
        <div className="flex items-center gap-5 py-2">
            <img src={gumeLogo} alt="Logo Gume Creations" />

            <nav className="flex items-center gap-5">
                <a href="" className="font-medium text-sm text-zinc-350">Eventos</a>
                <a href="" className="font-medium text-sm">Participantes</a>
            </nav>
        </div>
    )
}