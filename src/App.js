import { useEffect, useState } from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader'
import Home from './components/pages/Home'
import gif from "./components/assets/img/giphy.gif"
import AppRouter from './router/AppRouter';

function App() {
  const [loading,setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    },2500)

  },[])
  return (
    <div className="App">
      {loading ? (
      <div style={{"height":"100vh","backgroundColor":"black", "display":"flex","alignItems":"center","justifyContent":"center"}} >
          <img  style={{"width":"130px"}} src={gif} alt="" />
          {/* <PropagateLoader size={30} color={'red'} loading={loading}/> */}
      </div>
      ): ( 
        <div>
        <AppRouter />
        </div>
      )}
     
    </div>
  );
}

export default App;