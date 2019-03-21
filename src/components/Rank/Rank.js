import React from 'react';

entries = 0;

const Rank = ({name, entries}) => {
    return (
        <div>
        <div className='f3'> 
        {`${name} , you have submitted ${entries} entries`}
        </div> 
        </div>
    );
}

export default Rank;