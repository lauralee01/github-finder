import React, {Fragment} from 'react';
import spinner from './giphy.webp';

const Spinner = () => 
    <Fragment>
        <img src={spinner} alt="Loading..." style={{ width: '200px', margin:'auto', display: 'block' }} />
    </Fragment>
  

export default Spinner
