import EquilibriumImage from '../assets/images/image-equilibrium.jpg';
import ViewIcon from '../assets/images/icon-view.svg';
import EthereumIcon from '../assets/images/icon-ethereum.svg';
import ClockIcon from '../assets/images/icon-clock.svg';
import AvatarImage from '../assets/images/image-avatar.png';

function Lobby(){
    return(
        <div className='allpage'>
            <div className='container'>
                <div className='image-container'>
                    <figure className='figure-container' onClick={() => window.location.href = ''}>
                        <img className='NFT-image' alt='EquilibriumImage' src={EquilibriumImage}/>
                        <div className='view-icon-container'>
                            <img className='view-icon' alt='ViewIcon' src={ViewIcon}/>
                        </div>
                    </figure>
                </div>
                <div className='data-container'>
                    <a className='NFT-name' href=' '>
                        Equilibrium #3429
                    </a>
                    <div className='NFT-description-container'>
                        <p className='NFT-description'>
                            Our Equilibrium collection promotes balance and calm.
                        </p>
                    </div>
                    <div className='columns-price-container'>
                        <div className='price-NFT-container'>
                            <img alt='EthereumIcon' src={EthereumIcon}/>
                            <p className='price-NFT'>
                                0.041 ETH
                            </p>
                        </div>
                        <div className='date-NFT-container'>
                            <img alt='ClockIcon' src={ClockIcon}/>
                            <p className='date-NFT'>
                                3 days left
                            </p>
                        </div>
                    </div>
                </div>
                <div className='line-container'>
                    <hr/>
                </div>
                <div className='author-container'>
                    <img alt='AvatarImage' src={AvatarImage}/>
                    <p className='info-author'>
                        Creation of <a href=' '>Jules Wyvern</a>
                    </p>
                </div>
            </div>
            <div className='footer-page'>
                <p>Created by <a href="https://github.com/Farith-Palestina">Farith Palestina</a>.</p>
            </div>
        </div>
    );
}

export default Lobby;