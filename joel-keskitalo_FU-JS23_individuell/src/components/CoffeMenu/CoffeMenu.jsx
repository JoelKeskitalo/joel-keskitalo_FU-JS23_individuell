import './coffemenu.scss';

function CoffeMenu() {

    return (

        <div className='coffemenupage-container'>

            <header className='coffemenupage-header'></header>

            <h1>Meny</h1>

            <nav className='coffemenu'>                
                <ul>
                <div className='kaffe-item'>
                    <div className='kaffe-info'>
                        <button className='kaffe-button'>+</button>

                        <div className='kaffe-details'>
                            <h2 className='kaffe-title'>Bryggkaffe</h2> {/* Använd 'kaffe-title' för att inkludera punkter efter titeln */}
                            <p className='kaffe-description'>Bryggd på månadens bönor</p>
                        </div>
                    </div>

                    <h2 className='kaffe-price'>49 kr</h2>
                </div>


                <div className='kaffe-item'>
                    <div className='kaffe-info'>
                        <button className='kaffe-button'>+</button>

                        <div className='kaffe-details'>
                            <h2 className='kaffe-title'>Caffè Doppio</h2> {/* Använd 'kaffe-title' för att inkludera punkter efter titeln */}
                            <p className='kaffe-description'>Bryggd på månadens bönor</p>
                        </div>
                    </div>

                    <h2 className='kaffe-price'>49 kr</h2>
                </div>

                <div className='kaffe-item'>
                    <div className='kaffe-info'>
                        <button className='kaffe-button'>+</button>

                        <div className='kaffe-details'>
                            <h2 className='kaffe-title'>Cappuccino</h2> {/* Använd 'kaffe-title' för att inkludera punkter efter titeln */}
                            <p className='kaffe-description'>Bryggd på månadens bönor</p>
                        </div>
                    </div>

                    <h2 className='kaffe-price'>49 kr</h2>
                </div>

                <div className='kaffe-item'>
                    <div className='kaffe-info'>
                        <button className='kaffe-button'>+</button>

                        <div className='kaffe-details'>
                            <h2 className='kaffe-title'>Latte Macchiato</h2> {/* Använd 'kaffe-title' för att inkludera punkter efter titeln */}
                            <p className='kaffe-description'>Bryggd på månadens bönor</p>
                        </div>
                    </div>

                    <h2 className='kaffe-price'>49 kr</h2>
                </div>

                <div className='kaffe-item'>
                    <div className='kaffe-info'>
                        <button className='kaffe-button'>+</button>

                        <div className='kaffe-details'>
                            <h2 className='kaffe-title'>Kaffe Latte</h2> {/* Använd 'kaffe-title' för att inkludera punkter efter titeln */}
                            <p className='kaffe-description'>Bryggd på månadens bönor</p>
                        </div>
                    </div>

                    <h2 className='kaffe-price'>49 kr</h2>
                </div>

                <div className='kaffe-item'>
                    <div className='kaffe-info'>
                        <button className='kaffe-button'>+</button>

                        <div className='kaffe-details'>
                            <h2 className='kaffe-title'>Cortado</h2> {/* Använd 'kaffe-title' för att inkludera punkter efter titeln */}
                            <p className='kaffe-description'>Bryggd på månadens bönor</p>
                        </div>
                    </div>

                    <h2 className='kaffe-price'>49 kr</h2>
                </div>


                </ul>
            </nav>

            <footer className='coffemenu-footer'></footer>

        </div>
    )
}

export default CoffeMenu;