
import Carousel from 'react-bootstrap/Carousel';
import puttshack from './images/puttshack.jpeg'
import market from './images/market.jpeg'
import Kidzania from './images/kidzania.jpeg'
import './Places.css'
const Places = () => {

    return (<>

        <br />
        <br />
        <h1 style={{ display: 'flex', justifyContent: 'center', fontWeight: 'bold' }}>Places To Go</h1>

        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={puttshack}
                    alt="puttshack"
                />
                <Carousel.Caption>
                    <div style={{ backgroundColor: "#25273a" }}>
                        <h3 className='header'>Puttshack</h3>
                        <p>An Upscale, Tech-Infused Mini Golf Experience.</p>
                        <p>SPECIAL OFFER: 15% off on online bookings using code: QACINEMAS</p>
                        <a href="https://www.puttshack.com/uk/locations/white-city" target="_blank" rel="noreferrer"><p>https://www.hrp.org.uk/tower-of-london/</p></a>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Kidzania}
                    alt="KidZania"
                />
                <Carousel.Caption>
                    <div style={{ backgroundColor: "#25273a" }}>
                        <h3 className='header'>KidZania</h3>
                        <p>indoor city run by kids with more than 60 real-life activities, teaching kids essential life skills in a fun and safe environment.</p>
                        <p>SPECIAL OFFER: 15% off on online bookings using code: QACINEMAS</p>
                        <a href="https://kidzania.co.uk/" target="_blank" rel="noreferrer"><p>https://www.slugandlettuce.co.uk/towerbridge/</p></a>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={market}
                    alt="Shepherd's Bush Market"
                />
                <Carousel.Caption>
                    <div style={{ backgroundColor: "#25273a" }}>
                        <h3 className='header'>Shepherd's Bush Market</h3>
                        <p>Shepherd's Bush Market is a 107-year-old market situated in the heart of west London. With a diverse range of traders and goods, there's something on offer for everyone.</p>
                        <p>SPECIAL OFFER: 15% off on online bookings using code: QACINEMAS</p>
                        <a href="https://shepherdsbushmarket.org/" target="_blank" rel="noreferrer"><p>https://www.kilikyasgastro.co.uk/</p></a>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <br />
        <br />
        <br />


    </>);
}
export default Places;