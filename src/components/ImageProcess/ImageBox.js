import React, { useState } from 'react';
import ImageDraggable from '../DragfileComponent/ImageDraggable';
import ImageChoiceComponent from '../ImageChoiceComponent/ImageChoiceComponent';
import { defaultChoices } from './helpers/defaultChoices';

function ImageBox() {

    const [imageState, setImageState] = useState(null)
    const [choices, setchoices] = useState(defaultChoices)


      //handle selected items
      const handleSelected = (e, choice) => {
           e.preventDefault()
           
            const { name, selected } = choice

            let newchoices = choices.map((c) => {
                if(c.name === name) {c.selected = !selected}

                return c
            })
             
           setchoices([...newchoices])
           console.log(choices)
      }


  return <div className='bg-white rounded-2xl m-10 md:m-0 max-w-lg w-full mx-auto'>
             <div className='p-4 bg-blue-800 rounded-t-2xl space-x-2 space-y-2 flex flex-row items-center flex-wrap justify-center'>
                 {choices && choices.map(choice => { return ( 
                     <div key={choice.name} onClick={(e) => {handleSelected(e, choice)}}>
                    <ImageChoiceComponent  selected={choice.selected} name={choice.name} />
                    </div>
                 )})}
                 
             </div>
             <div className='p-8 bg-white flex flex-row w-full items-center justify-center'>
                 <ImageDraggable 
                   captureimagestateoptions={choices}
                 />
             </div>
          </div>;
}

export default ImageBox;
