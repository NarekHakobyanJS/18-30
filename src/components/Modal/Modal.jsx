import {createPortal} from 'react-dom';


function Modal({children}){
    return (
      <div>
       {
        createPortal(children, document.getElementById('portal'))
       }
      </div>
    )
  }

export default Modal
  