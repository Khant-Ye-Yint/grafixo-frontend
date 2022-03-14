import ReactDOM from 'react-dom';

const Portal = ({ component, domLocation }) => {
	return ReactDOM.createPortal(component, domLocation);
};

export default Portal;
