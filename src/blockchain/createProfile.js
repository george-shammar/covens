import { useState } from "react";
import {Card, Button, Form, Modal} from 'react-bootstrap';
import { NFTStorage, File } from 'nft.storage';
import { Web3Storage } from 'web3.storage';
import { isValidHandle, useCreateProfile } from '@lens-protocol/react-web';
const ethers = require("ethers");
const NFT_STORAGE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDMyNTlEMWEzNTNEMzgyNjQ4MDVmNkY4Y2NjMTY0RThFODQzM0I0MDYiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTYzNzkzOTM1Njc5NywibmFtZSI6IkF6YW5pYSJ9.Tn3kou1OKA09gdsp0pduKzFUJGAVQ8KXk1-44pLWH9w";
const ERROR_CODE_TX_REJECTED_BY_USER = 4001;

const CreateProfile = () => {
  const [status, setStatus] = useState("");
  const [formInput, updateFormInput] = useState({formHandle:""});
  const [fileUrl, setFileUrl] = useState(null);
  const [rawFile, setRawFileUrl] = useState(null);
  const [show6, setShow6] = useState(false);
  const handleClose6 = () => setShow6(false);
  const handleShow6 = () => setShow6(true);
  const handleShow7 = () => setShow7(true);
  const [show7, setShow7] = useState(false);
  const { execute: create, error, isPending } = useCreateProfile();
  const [handle, setHandle] = useState(null);

  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   // if (!handle) return;
  //   // console.log(handle)
  //   // await create(handle);
  //   console.log(e.target.value)
  // };

  async function onSubmit() {
    const {formHandle} = formInput;
    if (formHandle) {
      await create(formHandle);
    } else {
      console.log(error)
    }
  }

  // function jsonFile(filename, obj) {
  //   return new File([JSON.stringify(obj)], filename)
  // }

  // async function onChange(e) {
  //   const imageFile = e.target.files[0];
  //   setRawFileUrl(imageFile);
  //   const namePrefix = "Coven";
  //   const caption = "profile"
  //   const uploadName = [namePrefix, caption].join('|');
  //   const metadataFile = jsonFile('metadata.json', {
  //     path: imageFile.name,
  //     caption
  //   })
  
  //   const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDgyMGVjNzg2NkVCZTUzMTZlZTBjMWE2MDVlNDJjQUEyNGQyQTY5NTYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2OTEyMjM1OTA4MTIsIm5hbWUiOiJjb3ZlbiJ9._BopvqbchEv8IF-VkxhrDI6aD0fwfEzzx7BibrCAk2k";
    
  //   const web3storage = new Web3Storage({ token });
  //   const cid = await web3storage.put([imageFile, metadataFile], {
  //     name: uploadName,
  
  //   });
   
  //   const imageURI = `ipfs://${cid}/${imageFile.name}`
    
  //   const ipfsBaseUrl = "https://ipfs.io/ipfs/";
  //   const formattedString = imageURI.replace("ipfs://", "");
    
  //   const url = ipfsBaseUrl + formattedString;
  //   setFileUrl(url);
  // };

  // async function mint() {
    // const {handle} = formInput;
    // const provider = new BrowserProvider(window.ethereum);
    // const signer = await provider.getSigner();
    
    // const contract = new ethers.Contract(contractAddress.CovenProfile, CovenProfileArtifact.abi, signer);
    
    // try {
    //   const client = new NFTStorage({ token: NFT_STORAGE_KEY });
    //     setStatus("Creating your profile...")
    //     const metadata = await client.store({
    //       name: handle,
    //       image: rawFile,
    //       description: "Coven profile",
    //     });
      
    //     const metadataURI = metadata.url;

    //   setStatus("Creating your Coven profile...");
      
    //   const transaction = await contract.createCoven(handle, fileUrl, metadataURI );

    //   setStatus("Blockchain transaction sent, awaiting confirmation...");

    //   const receipt = await transaction.wait();
    //   if (receipt.status === 0) {
    //       throw new Error("Transaction failed");
    //   } else {
    //     setStatus("Profile created successfully! You may close this box.");
    //   }
    // } catch (error) {
    //   if (error.code === ERROR_CODE_TX_REJECTED_BY_USER) {
    //     return;
    //   }
    //   console.error(error);
    // } finally {

    // }

  // }

  return(
   <>
  <Card.Body>
    <Button className="me-2 mt-lg-3 ms-lg-3" variant="primary" onClick={handleShow6}>
      New Profile
    </Button>
    <Modal centered show={show6} onHide={handleClose6}>
      <Modal.Header closeButton>
            <Modal.Title>Create A Coven Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Card>
          <Card.Body>
          <Form>
            <Form.Group className="form-group">
              <Form.Label>Handle:</Form.Label>
              <Form.Control  onChange={e => updateFormInput({...formInput, formHandle: e.target.value})}  type="text" id="email1" disabled={isPending} required/>
              {/* <Form.Control 
                onChange={e => {
                if (isValidHandle(e.target.value)) {
                  setHandle(e.target.value);
                } else {
                  setHandle(null);
                }
                }}
                type="text" id="email1"
                disabled={isPending}
                required
              /> */}
            </Form.Group>
          </Form>
            
          </Card.Body>
        </Card>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose6}>
                Close
            </Button>
            <Button variant="primary" onClick={onSubmit}>
                Submit
            </Button>
        </Modal.Footer> 
    </Modal>
    </Card.Body>
    </>
    
  )
}

export default CreateProfile;


{/* <form onSubmit={onSubmit}>
              <input
                minLength={5}
                maxLength={31}
                required
                type="text"
                disabled={isPending}
                onChange={(e) => {
                  if (isValidHandle(e.target.value)) {
                    setHandle(e.target.value);
                  } else {
                    setHandle(null);
                  }
                }}
              ></input>
               <button type="submit">Create</button>
              </form> */}

// <Form>
// <Form.Group className="form-group">
//   <Form.Label>Handle:</Form.Label>
//   <Form.Control  onChange={e => updateFormInput({...formInput, handle: e.target.value})}  type="email" id="email1"/>
//   <Form.Control 
//     onChange={(e) => {
//     if (isValidHandle(e.target.value)) {
//       setHandle(e.target.value);
//     } else {
//       setHandle(null);
//     }
//     }}
//     type="email" id="email1"
//   />
// </Form.Group>
// <Form.Group className="form-group">
//   <Form.Label>Picture: (optional)</Form.Label>
//   <Form.Control onChange={onChange} type="file" id="pwd"/>
// </Form.Group>
// disabled={isPending}
// required
// </Form>