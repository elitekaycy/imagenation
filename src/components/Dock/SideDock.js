import React from 'react';
import { Dock } from 'react-dock';
import { v4 as uuidv4 } from 'uuid';
import { filedownloader, Multiplefiledownloader } from '../ImageSaver/Filedownloader';
import { useMediaQuery } from 'react-responsive';


function SideDock({ open, handleToggle,  image, imageOptions }) {

    const [preview, setpreview] = React.useState('')
   // const [loading, setloading] = React.useState(false)
    const SelectedimageOptions = imageOptions.filter(iO => iO.selected === true)

    const isDesktopOrlaptop = useMediaQuery({  query: '(min-width: 1224px)' })
   // const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })


    const PreviewImg = () => {
       // setloading(true)
        if(image && image.length > 0){
            //setloading(true)
            const filereader = new FileReader()

            filereader.onloadend = () => {
                console.log(filereader.result)
                console.log('select',SelectedimageOptions)
                setpreview(filereader.result)
            }
    
            filereader.readAsDataURL(image[0])
            //setloading(false)
        }
    
    }

  

    React.useEffect(() => {
          let mounted = true
           console.log(isDesktopOrlaptop, 'is desktop')
         PreviewImg()

          return () => mounted = false
          
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [image, imageOptions])


  return     <Dock 
               position='right' 
               size={isDesktopOrlaptop ? 0.3 : 1}
               isVisible={open} 
               fluid={true}
               dockStyle={{
                   backgroundColor: 'transparent',
                   boxShadow: 'none',
                   border: 0,
               }}
               >
              <div className='relative rounded-2xl p-4 h-full w-full'>

              <div className='p-5 text-center rounded-t-2xl text-white bg-blue-800 flex flex-row items-center justify-between flex-wrap space-y-2'>
                  <div
                  onClick={handleToggle}
                  className='cursor-pointer hover:scale-105'
                  >cancel</div>
                  <div>imagenation</div>
              </div>

              <div className='relative p-2 flex flex-col bg-white h-5/6 rounded-b-2xl overflow-y-scroll overflow-x-hidden'>
                 {preview === '' ? <div>'loading...'</div> : <div className='p-5 space-y-6'>{SelectedimageOptions.map(sio => {
                    return (
                      <div className='flex flex-row w-full flex-wrap space-y-2 bg-gray-300 p-3 hover:scale-105 cursor-pointer rounded-2xl justify-around items-center' key={sio.name}
                      onClick={() => {filedownloader(preview, `${sio.name} - ${uuidv4()}`, image, sio.width, sio.height)}}
                      >
                        <div className='space-y-2'>
                            <div className='text-sm'>{sio.name}</div>
                             <img src={preview} alt="img preview" className='rounded-md' style={{ width: sio.width > 100 ? 150 : sio.width, height: sio.height > 100 ? 150: sio.height}} />
                             </div>
                        <div className='text-sm text-gray-500'>
                             <div>{sio.name}</div>
                                <div>width - {sio.width}px</div>
                                <div>height -{sio.height}px</div>
                        </div>
                    </div>)})}</div>}

 
             <div className='sticky -bottom-2 left-0  text-center w-full p-5 bg-white'>
                <button className='bg-blue-900 text-white text-sm text-center rounded-lg p-4 w-full'
                onClick={() => { Multiplefiledownloader(SelectedimageOptions, image) }}
                >
                    download
                 </button>
              </div>

              </div>


              </div>
            </Dock>

}

export default SideDock;
