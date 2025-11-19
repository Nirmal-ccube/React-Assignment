import SideMenu from "./components/SideMenu/SideMenu";
import { useState } from "react";

function App() {
  console.log('App rendered')

  const [selectedMenu, setSelectedMenu ] = useState<string>('');
  const [open ,setOpen] = useState<boolean>(true);

  function onMenuSelected(title:string) {
    console.log('App: onMenuSelected : ' + title)
    if (selectedMenu !== title) {
      setSelectedMenu(title)
    }
  }

  function openMenuTap() {
    //setOpen(!open)
  }

  return (
    <>
      <div className="min-h-screen flex bg-gray-50">
        <SideMenu isOpen={open} selectedTab={selectedMenu} onMenuTap={onMenuSelected} />
        <main >
            {/*<button
              onClick={() => openMenuTap()}
              className="mb-4 px-4 py-2 bg-indigo-600 text-white rounded"
              >
              {open ? "Hide Menu" : "Show Menu"}
            </button>*/}

            <h1 className="text-3xl font-bold">Shopping App</h1>  
        </main>
        
      </div>
    </>
  )
}

export default App
