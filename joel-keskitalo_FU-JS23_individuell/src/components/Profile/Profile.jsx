import './profile.scss';

function Profile() {


    return (

        <div className='profilepage-container'>
            <div className='profilepicture-container'></div>
            <h3>Sixten Kaffelöver</h3>
            <p>sixten.kaffelover@zocom.se</p>




            <div className="orderhistory-container">
                <h3>Orderhistorik</h3>


                <div className="order-item">
                    <div className="order-left">
                        <h4>#AB1123282323Z</h4>
                        <span className='total'>total ordersumma</span>
                    </div>
                    <div className="order-right">
                        <span className="date">20/03/06</span>
                        <span className="price">443kr</span>
                    </div>
                </div>
                <hr />

                <div className="order-item">
                    <div className="order-left">
                        <h4>#AB1123282323Z</h4>
                        <span className='total'>total ordersumma</span>
                    </div>
                    <div className="order-right">
                        <span className="date">20/03/06</span>
                        <span className="price">443kr</span>
                    </div>
                </div>
                <hr />



                <div className="order-item">
                    <div className="order-left">
                        <h4>#AB1123282323Z</h4>
                        <span className='total'>total ordersumma</span>
                    </div>
                    <div className="order-right">
                        <span className="date">20/03/06</span>
                        <span className="price">443kr</span>
                    </div>
                </div>
                <hr />


                <div className="order-summary">
                    <h4>Totalt spenderat</h4>
                    <h4>1669 kr</h4>
                </div>
                    


            </div>
        </div>



    )

}





export default Profile