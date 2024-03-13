import useStore from '../Store/Store';
import { useNavigate } from 'react-router-dom';
import './status.scss';

function Status() {

    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/menu')
    }



    const { orderDetails } = useStore(state => state.orderDetails ? state : {orderDetails: { ordernumber: 'Laddar...', eta: 'Beräknar...'} })

    return (

        <div className='statuspage-container'>
            <p id='ordernumbertext'>Ordernummer: {orderDetails.ordernumber}</p>

            <div className='droneimage-container'></div>

            <h1>Din beställning är på väg!</h1>

            <h3>{orderDetails.eta} minuter</h3>

            <button className='reusable-button' onClick={handleSubmit}><h3>Ok, cool!</h3></button>


        </div>
    )

}

export default Status;