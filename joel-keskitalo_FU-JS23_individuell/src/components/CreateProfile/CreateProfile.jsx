import './createprofile.scss';

function CreateProfile() {

    return (

        
            <div className="createprofile-container">

                <div className="symbol-container"></div>

                <h2>Välkommen till AirBean-familjen!</h2>

                <p className="createprofile-text">Genom att skapa ett konto nedan kan du spara och se din orderhistorik.</p>

                <form className="createprofile-form">
                    <p>Namn</p>
                    <input
                        name="fullname"
                        type="text"
                        placeholder="Sixten Kaffelövér"
                        maxLength="100"
                        required
                    />
                    <p>E-post</p>
                    <input
                        name="email"
                        type="text"
                        placeholder="sixten.kaffelover@zocom.se"
                        maxLength="254"
                        required
                    />
                </form>

                <label>
                    <input
                        type="checkbox"
                        name="gdpr-ok"
                    />
                    <p>GDPR Ok!</p>
                </label>

                <footer className='createprofile-footer'>
                    <button className='reusable-button'><h3>Brew me a cup!</h3></button>
                </footer>

            </div>

    )

}

export default CreateProfile;