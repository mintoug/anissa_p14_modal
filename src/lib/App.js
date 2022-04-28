import React, { useState } from 'react';
import { Modal } from '../lib/components/Modal';

export const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  return (
    <>
      
      <Modal
        show={modalIsOpen}
        setShow={setModalIsOpen}
        text="Employee created!"
        
      />
    </>
  );
};