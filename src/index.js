11 lines (9 sloc)  192 Bytes

import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <>
   <App/>
   </>
)

console.log(root);
