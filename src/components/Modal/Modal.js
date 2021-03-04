import React  from 'react';
import Button from '../Button/Button'


const Modal = ({id="modal", onClose=() => {}, children}) => {
const handleOutsideClick = (e) => {
	if(e.target.id===id) onClose();
}

	return (
		<div id= {id} className="modal" onClick={handleOutsideClick}>
			<div className="container">
				<Button className="close" onClick={onClose}>X</Button>
				<section className='content'> {children} </section>
				</div>
			</div>

	);
};
export default Modal;
