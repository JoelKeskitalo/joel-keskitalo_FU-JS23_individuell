import './status.scss';

function Status() {

    return (

        <div className='statuspage-container'>
            <p id='ordernumbertext'>Ordernummer: </p>

            <div className='droneimage-container'></div>

            <h1>Din beställning är på väg!</h1>

            <h3>13 minuter</h3>

            <button className='reusable-button'><h3>Ok, cool!</h3></button>


        </div>
    )

}

export default Status;