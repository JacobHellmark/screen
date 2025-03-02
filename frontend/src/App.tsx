import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import DisplayView from './views/main/DisplayView'
import SideBarView from "./views/sidebar/SideBarView"
import PluginView from "./views/plugin/PluginView"

function App() {
  return (
    <Router>
      <SideBarView />
      <Routes>
        <Route path='/' element={<DisplayView />} />
        <Route path='/plugins' element={<PluginView />} />
      </Routes>
    </Router>
  )
}

export default App
