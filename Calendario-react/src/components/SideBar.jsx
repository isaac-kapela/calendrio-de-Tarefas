import CriarTarefas from './CriarTarefas';
import CalendarioPequeno from './CalendarioPequeno';
// import Labels from './Labels';

export default function SideBar() {
  return (
    <>
    <aside className='border p-5 w-64'>
      <CriarTarefas/>
      <CalendarioPequeno/> 
      {/* <Labels/> */}
    </aside>

    </>
  )
}
