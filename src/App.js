import './App.css';

import { FormContainer } from './components/cv-form/form-container/form-container.component';
import { PreviewContainer } from './components/cv-preview/preview-container/preview-container.component';
import { Header } from './components/header/header.component';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <div className='container pt-4'>
        <div className='row gx-4'>
          <FormContainer />
          <PreviewContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
