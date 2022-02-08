import React from 'react';

function ImageChoiceComponent({ selected, name }) {
  return <div className={`p-2  text-xs  cursor-pointer max-w-xs  rounded-full text-center ${selected ? 'bg-white text-blue-800 border-2 border-white hover:border-blue-800 hover:bg-slate-50' : 'bg-blue-800 border-2 border-white text-white hover:bg-white hover:text-blue-800 hover:border-0' }`}>
              <div>{name}</div>
         </div>;
}

export default ImageChoiceComponent;
