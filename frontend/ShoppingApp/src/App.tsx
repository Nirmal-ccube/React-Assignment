import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
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
    <div className="flex flex-col">

      

      <div className="min-h-screen flex bg-gray-50 w-full">
        <SideMenu isOpen={open} selectedTab={selectedMenu} onMenuTap={onMenuSelected} />
        <main className="flex-1">
            {/*<button
              onClick={() => openMenuTap()}
              className="mb-4 px-4 py-2 bg-indigo-600 text-white rounded"
              >
              {open ? "Hide Menu" : "Show Menu"}
            </button>*/}

            <Header/>

            <Home /> 
        </main>
        
      </div>
    </div>
      
    </>
  )
}

export default App
