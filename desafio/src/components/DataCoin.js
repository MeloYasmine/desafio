import React from 'react';
import { useParams } from 'react-router';
import { Route } from 'react-router-dom';

const DataCoin =(props) =>{
    const params = useParams();



    return(
        <section>
            <h1>
                Detalhes
                <p>
                    {props.nameCoin}
                </p>
              
            </h1>
        </section>
    );

    
}

export default DataCoin;