import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openModal, closeModal } from '../features/modal/modalSlice';
import { clearCart } from '../features/cart/cartSliceLocal';
const Modal = () => {
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();
  const handleClear = () => {
    dispatch(clearCart());
    dispatch(closeModal());
  };
  return (
    <>
      {isOpen && (
        <aside className={'modal-container'}>
          <div className='modal'>
            <h4>remove all items frpm your shopping cart?</h4>
            <div className='btn-container'>
              <button className='btn confirm-btn' onClick={() => handleClear()}>
                confirm
              </button>
              <button className='btn clear-btn' onClick={() => dispatch(closeModal())}>
                cancel
              </button>
            </div>
          </div>
        </aside>
      )}
    </>
  );
};

export default Modal;
