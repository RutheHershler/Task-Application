import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

// const VisuallyHiddenInput = styled('input')({
//   clip: 'rect(0 0 0 0)',
//   clipPath: 'inset(50%)',
//   height: 1,
//   overflow: 'hidden',
//   position: 'absolute',
//   bottom: 0,
//   left: 0,
//   whiteSpace: 'nowrap',
//   width: 1,
// });

const AddNewPoto = () => {
  const [selectedImage, setSelectedImage] = React.useState(null);

  return (
    <div>
      {selectedImage && (
        <div>
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <Button component="label" variant="contained" onClick={() => setSelectedImage(null)}>Remove</Button>
        </div>
      )}

      <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
      {/* Upload image */}
      {/* <VisuallyHiddenInput type="file" /> */}
   
      {/* <br />
      <br /> */}

      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      /> </Button>
    </div>

  );
}
export default AddNewPoto;