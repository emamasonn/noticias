import React from 'react';
import PropTypes from 'prop-types'

const Noticia = (props) => {
    const {description, urlToImage, title, url, source} = props.noticia;
    return(
        <div className="col s12 m6 l4">
            <div className="card">
                <div className="card-image">
                    
                    <img src={urlToImage} alt={title}/>
                    <span className="card-title">{source.name}</span>
                </div>
                <div className="cart-content">
                    <h5>{title}</h5>
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <a href={url} target="_blank" rel="noopener noreferrer" className="waves-effects waves-light btn">
                        Noticia Completa
                    </a>
                </div>
            </div>
        </div>
    );
}

Noticia.propTypes = {
    noticia: PropTypes.object.isRequired
}

export default Noticia;