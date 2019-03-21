import React from 'react';

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