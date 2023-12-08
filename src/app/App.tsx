import { Header } from '@widgets/header';

import { Router } from './Router';
import './index.css';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Router />
      </div>
    </>
  );
}

export default App;
