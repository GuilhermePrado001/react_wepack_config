import "bootstrap/js/src/carousel.js";
import ProductsList from '../../components/ProductList/index.js'
import InfoComponent from '../../components/InfoCard/index.js'
import React, { useContext } from 'react';
import { SettingContext } from "../../Context/SettingsContext.js";

const HomeComponent = () => {

    const settingContext = useContext(SettingContext);

    const showStore = () => {

        if(settingContext.storeState)
            return <ProductsList />
    }
    
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide mt-1" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="http://via.placeholder.com/1280x400" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="http://via.placeholder.com/1280x400" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="http://via.placeholder.com/1280x400" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

            <InfoComponent title={"Sobre nós"} content={settingContext.aboutState} />
            {showStore()}
         
        </div>

    )
}

export default HomeComponent;