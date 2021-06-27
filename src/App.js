import './App.css';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Smallprofile from './components/Smallprofile';
import Feedback from './components/Feedback';


function App() {
  return (
    <div>
      <Navbar />
      <div class="container px-4">
        <div class="row gx-5">
           <div class="col-4">
           <div className="rows">
      <Profile />
      </div>
      </div>
    <div class="col-4">
    <div className="roww">
      <Smallprofile />
      </div>
      </div>
      <div className="col-4">
    <div className="rowws">
      <Feedback />
      </div>
      </div>
      </div>
      </div>
   
    </div>
  );
}

export default App;
