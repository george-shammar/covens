/* eslint-disable*/
import { useState } from "react";
import {Card, Button, Form, Modal} from 'react-bootstrap';
import { useCreateProfile } from '@lens-protocol/react-web';
import { isRelayerResult } from "@lens-protocol/client";
import { LensClient, development } from "@lens-protocol/client";

const CreateProfile = () => {
  // const [status, setStatus] = useState("");
  const [formInput, updateFormInput] = useState({formHandle:""});
  // const [fileUrl, setFileUrl] = useState(null);
  // const [rawFile, setRawFileUrl] = useState(null);
  const [show6, setShow6] = useState(false);
  const handleClose6 = () => setShow6(false);
  const handleShow6 = () => setShow6(true);
  const handleShow7 = () => setShow7(true);
  const [show7, setShow7] = useState(false);
  const { execute: create, error, isPending } = useCreateProfile();
  // const [handle, setHandle] = useState(null);

  const lensClient = new LensClient({
    environment: development
  });

  async function onSubmit() {
    const {formHandle} = formInput;

    // if (formHandle) {
    //   await create({formHandle});
    //   // console.log(isValidHandle())
    //   console.log("======create profile called======")
    // } else {
    //   console.log("did not work")
    //   console.log(error)
    // }
    const profileCreateResult = await lensClient.profile.create({ 
      handle: formHandle,
       // other request args 
    });

    const profileCreateResultValue = profileCreateResult.unwrap();
    if (!isRelayerResult(profileCreateResultValue)) {
      console.log(`Something went wrong`, profileCreateResultValue);
      return;
    }

    console.log(
      `Transaction was successfuly broadcasted with txId ${profileCreateResultValue.txId}`
    );
  }

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
              <Form.Control  
                onChange={e => updateFormInput({...formInput, formHandle: e.target.value})}  type="text" id="email1" disabled={isPending} 
                required/>
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

/* eslint-enable*/