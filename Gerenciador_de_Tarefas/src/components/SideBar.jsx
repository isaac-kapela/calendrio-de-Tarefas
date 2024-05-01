import CriarTarefas from './CriarTarefas';
import CalendarioPequeno from './CalendarioPequeno';


export default function SideBar() {
  return (
    <>
    <aside className='border p-5 w-64'>
      <CriarTarefas/>
      <CalendarioPequeno/> 
    </aside>

    </>
  )
}
