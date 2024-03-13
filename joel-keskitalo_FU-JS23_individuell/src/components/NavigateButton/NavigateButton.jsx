import { useNavigate } from 'react-router-dom';
import './navigatebutton.scss';


function NavigateButton({ to, buttonText = "Meny" }) {


  const navigate = useNavigate();


  const handleNavigate = () => {
    navigate(to);
  };


  return (
    <button className='navigate-button' onClick={handleNavigate}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
  
}

export default NavigateButton;
