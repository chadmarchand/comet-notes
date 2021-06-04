import React from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import Modal from 'react-modal';

function CommandPalette() {
  const [isOpen, setIsOpen] = React.useState(false);

  const openPalette = () => {
    // Bind modal to root element for accessibility
    // (https://reactcommunity.org/react-modal/accessibility/)
    Modal.setAppElement('#App');
    setIsOpen(true);
  };

  useHotkeys('ctrl+;', openPalette);

  return (
    <span>
      <Modal
        isOpen={isOpen}
        contentLabel="Example modal"
      >
        <div>I am a modal!</div>
      </Modal>
    </span>
  );
}

export default CommandPalette;
