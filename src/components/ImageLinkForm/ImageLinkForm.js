import React from 'react';


const ImageLinkForm = ({ onInputChange, onPictureSubmit }) => {
    return (
        <div>
        <p className='f3'>
            {
                'place an image link below to detect the space around a face'
            }
        </p>
        <div className ='center'>
        <div className='center pa3 br3 bg-white shadow-5'>
        <input className='f4 pa1 w-70 center' type='text' onChange={onInputChange}/>
        <button 
        className='w-30 grow f4 link ph3 pv2 dib white bg-light-blue' 
        onClick ={onPictureSubmit}>
            Detect
        </button> 
        </div>
        </div>
        </div>
    );
}

export default ImageLinkForm;