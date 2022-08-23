import './App.css'
import Header from "./Header";
import { Movies } from "./Movies";
import { DataMap } from './data/dataMap';
import { Routes , Route } from 'react-router-dom'
import { TopGun } from './component/TopGun';
import { IamGroot } from './component/IamGroot';
import { SheHulk } from './component/SheHulk';

const MyFunction = () => {
  return(
      <Routes>
        <Route path={`/${data.name}`} exact element={<App />} ></Route>
        <Route path="" element={<TopGun/>}></Route>
        <Route path='' element={<IamGroot />} ></Route>
        <Route path='' element={<SheHulk />} ></Route>
      </Routes> 
  )
}

function App() {
  return (
      <div className='urgoo'>
        <Header />
        <Movies />
        <DataMap />
      </div>
  );
}

// function MyApp() {
//   return (
//     <Router>
//         <Routes>
//           <Route path="" element={<App />} >
//           </Route>
//           <Route path="/TopGun" element={<TopGunHome/>} >
//           </Route>
//         </Routes>
//     </Router>
//   );
// }



export default MyFunction;


