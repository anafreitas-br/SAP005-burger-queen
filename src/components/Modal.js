import React, { useState } from 'react';
import Button from '../components/Button/Button';

const Modal = (props) => {
	const [ isModalVisible, setIsModalVisible ] = useState(false);
	return (
		<div className="Modal">
			<Button onClick={() => setIsModalVisible(true)}>Open</Button>
			{isModalVisible ? <h1>Modal</h1> : null}
			{/* {isModalVisible && <h1>Modal</h1>} */}
		</div>
	);
};
export default Modal;
