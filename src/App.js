
// import Directory from './components/directory/directory.component';
import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.component'
import Authentication from './routes/authentication/authentication.component'

import { Route, Routes } from 'react-router-dom'

const App = () => {


  const Shop = () => {
    return (
      <div>
        <h1>I am the Shop Page</h1>
      </div>)
  }

  return (
    <Routes >
      <Route path="/" element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes >
  );
}

export default App;
