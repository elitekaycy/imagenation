import FileSaver from "file-saver"
import { readAndCompressImage  } from 'browser-image-resizer'
import { v4 as uuidv4 } from 'uuid';
const { saveAs } = FileSaver

export const filedownloader = async(file, name, image, width, height) => {

  const config = {
    quality: 0.7,
    maxWidth: width,
    maxHeight: height,
    width: width,
    height: height,
    autoRotate: true,
    debug: true,
  }


  const compressedimage = await readAndCompressImage(image[0], config)
  saveAs(compressedimage, name)
  console.log(compressedimage)
   
}

//do this tommorrow dont forget.....
export const Multiplefiledownloader = (imgOptions, images) => {
   
  try {
      imgOptions.map(async({name, selected, height, width}, index) => {
         
        const compressedimg = await readAndCompressImage(images[0], {
          quality: 0.5,
          maxWidth: width,
          maxHeight: height,
          width: width,
          height: height,
          autoRotate: true,
          debug: true,
        })

        console.log('index', index, compressedimg)
        saveAs(compressedimg, `${name} -${uuidv4()}`)

      }) }
       catch(err) {
      alert(err)
    }
}