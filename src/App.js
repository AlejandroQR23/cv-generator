import React from "react";

import Footer from "./components/footer/footer.component";
import FormContainer from "./components/cv-form/form-container/form-container.component";
import Header from "./components/header/header.component";
import PreviewContainer from "./components/cv-preview/preview-container/preview-container.component";

const App = () => (
  <div className="App">
    <Header />
    <div className="py-4">
      <div className="row justify-content-evenly">
        <FormContainer />
        <PreviewContainer />
      </div>
    </div>

    <Footer />
  </div>
);

export default App;
