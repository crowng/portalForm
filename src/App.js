import React, { Fragment } from 'react';
import Form from './Form.js';
import Modal from './Modal';
import Toggle from './Toggle';
import './App.css';

function App() {
  return (
    
    <div className="App">
      
        <section>
      <Toggle>
            {({ on, toggle }) => (
              <Fragment>
                <button onClick={toggle}>Contact</button>
                <Modal on={on} toggle={toggle}>
                <Form />
                </Modal>
              </Fragment>
            )}
          </Toggle>
          </section>
          </div>
  );
}

export default App;
