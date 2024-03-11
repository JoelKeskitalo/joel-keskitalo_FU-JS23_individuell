import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Landing from './components/Landing/Landing.jsx';
import Menu from './components/Menu/Menu.jsx';
import About from './components/About/About.jsx';
import CreateProfile from './components/CreateProfile/CreateProfile.jsx';
import Status from './components/Status/Status.jsx';
import CoffeMenu from '../src/components/CoffeMenu/CoffeMenu.jsx';

import Profile from './components/Profile/Profile.jsx';


function App() {

  return (

    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/coffemenu" element={<CoffeMenu />} />
          <Route path="/about" element={<About />} />
          <Route path="/createprofile" element={<CreateProfile />} />
          <Route path="/status" element={<Status />} />

          <Route path="/profile" element={<Profile />} />

        </Routes>
      </div>
    </Router>

  )

}

export default App;