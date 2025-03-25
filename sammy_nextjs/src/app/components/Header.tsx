interface HeaderProps {
  title: string;
  textClassName?: string;
  headerClassName?: string;
  children: React.ReactNode;
}

import Headernav from './Headernav';

export default function Header({title, textClassName, headerClassName }:HeaderProps){
  return(
    <header className={headerClassName}> 
      <h1 className={textClassName}>
        {title} 
      </h1>
      <Headernav />
    </header>
  )
}

// className="p-2 shadow-md bg-amber-300 text-black border-2 border-amber-950 hover:bg-green-600 transition-all">

// className="text-lg font-bold sm: hover:text-xl hover:text-blue-600"