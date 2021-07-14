/* eslint-disable no-unused-vars */
import React from 'react';
import { useParams } from 'react-router';

const DataCoin = (props) => {
  const { name } = useParams();

  return (
    <section>
      <h1>
        Detalhes
        <p>
          {name}
        </p>

      </h1>
    </section>
  );
};

export default DataCoin;
