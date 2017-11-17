import React, { PropTypes } from 'react';
import MdKeyboardArrowLeft from 'react-icons/lib/md/keyboard-arrow-left';
import MdKeyboardArrowRight from 'react-icons/lib/md/keyboard-arrow-right';
import Button from 'remotedev-app/lib/components/Button';

const Subheader = ({ style, children, ...props }) => (
  <h5 style={{ ...style, margin: 0 }} {...props}>{children}</h5>
);

const Dock = ({ isOpen, toggleDock, children }) => {
  const dockStyle = {
    position: 'absolute',
    background: 'rgb(0, 43, 54)',
    top: 0,
    border: '1px solid rgb(79, 90, 101)',
    transform: `translateX(${isOpen ? 0 : '-100%'})`,
    left: 0,
    height: '100%',
    padding: '10px',
    minWidth: '200px',
    zIndex: 1,
    transition: 'transform 200ms ease-out',
  };
  const showButtonStyle = {
    position: 'relative',
    right: 0,
    top: 0,
    transition: 'transform 200ms ease-out',
    transform: `translateX(${isOpen ? 0 : '100%'})`,
  };
  return (
    <div style={dockStyle}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Subheader>checkSelector output</Subheader>
        <Subheader style={showButtonStyle}>
          <Button
            Icon={isOpen ? MdKeyboardArrowLeft : MdKeyboardArrowRight}
            onClick={toggleDock}
          >{isOpen ? 'hide output' : 'show output'}</Button>
        </Subheader>
      </div>
      {children}
    </div>
  );
};

Dock.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleDock: PropTypes.func,
  children: PropTypes.object,
};

export default Dock;
