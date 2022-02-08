
import React from 'react';
import { useDropzone } from 'react-dropzone';
import dragimage from '../../images/drag.png'
import SideDock from '../Dock/SideDock';


function ImageDraggable({ captureimagestateoptions }) {
    const {acceptedFiles, getRootProps, getInputProps} = useDropzone({ accept: 'image/jpeg, image/png'});
      

    // eslint-disable-next-line no-unused-vars
   // const [imageStateOptions, setImageStateOptions] = React.useState(captureimagestateoptions)
    const [view, setView] = React.useState(true)
    // const [ImageResult, setImageResult] = React.useState()


    const handleToggle = (e) => {
        e.preventDefault()
         setView(!view)
        }
  
    const files = acceptedFiles.map(file => (
      <li key={file.path}>
        {file.path} - {file.size} bytes
      </li>
    ));

    function handleShowfile(){
        
    }


    const RunImageDownloadables = () => {
          acceptedFiles && acceptedFiles.length > 0 ? setView(true) : setView(false)
          console.log('Image downloadable running', view)
    }

    React.useEffect(() => {
         let mounted =  true

         RunImageDownloadables()


        return () =>  mounted = false
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [acceptedFiles])

  return (<React.Fragment>
         <div className='w-full h-full'>
            <section className="container">
                <div {...getRootProps({className: 'dropzone'})}>
                    <input {...getInputProps()} />
                    <div className='w-full flex flex-col space-y-3 items-center justify-center cursor-pointer'>
                       <div>
                           <img 
                           src={dragimage}
                           alt='dragimage'
                           className='w-full h-full'
                           />
                       </div>
                         <div>Drag 'n' drop some files here, or click to select files</div>
                        <button className='bg-blue-800 text-sm rounded-full p-3 text-white hover:bg-blue-900 cursor-pointer' onClick={handleShowfile}>choose image</button>
                        </div>
                            </div>
                             {/* <aside>
                            <h4>Files</h4>
                        <ul>{files}</ul>
                    </aside> */}
            </section>
           </div>
           <SideDock open={view} handleToggle={handleToggle} image={acceptedFiles} imageOptions={captureimagestateoptions}/>
           </React.Fragment>
           );
}

export default ImageDraggable;
