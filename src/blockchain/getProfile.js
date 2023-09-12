import { useEffect, useState } from "react";
import contractAddress from "../contracts/contract-address.json";
import CovenProfileArtifact from "../contracts/CovenProfile.json";
import {  
  Dropdown,
  Card,
  Image,
  } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomToggle from "../components/dropdowns";
import { BrowserProvider } from "ethers";
const ethers = require("ethers");

const ERROR_CODE_TX_REJECTED_BY_USER = 4001;

const GetProfile = ({address}) => {
  const [profil, setProfile] = useState({});

  useEffect(() => {
    profile();
  }, []);

  async function profile() {
    const provider = new BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();

    const contract = new ethers.Contract(contractAddress.CovenProfile, CovenProfileArtifact.abi, signer);
    
    try {
      const transaction = contract.getOwnerCovens(address);

    const receipt = await transaction;
    let coven = receipt[receipt.length-1];
    setProfile(coven)
    } catch (error) {
      if (error.code === ERROR_CODE_TX_REJECTED_BY_USER) {
        return;
      }
      console.error(error);
    } finally {

    }

  }

  if (!profil) {
      return (<></>);
  }

  return(
    <>
      <Dropdown as="li" className="nav-item user-dropdown">
      <Dropdown.Toggle
        href="#"
        as={CustomToggle}
        variant="d-flex align-items-center"
      >
        <Image
          src={profil[2]}
          className="img-fluid rounded-circle me-3"
          alt="user"
          loading="lazy" />

        <div className="caption d-none d-lg-block">
          <h6 className="mb-0 line-height">{profil[1]}</h6>
        </div>
      </Dropdown.Toggle>
      <Dropdown.Menu className="sub-drop caption-menu">
        <Card className="shadow-none m-0">
          <Card.Header>
            <div className="header-title">
              <h5 className="mb-0 ">Hello {profil[1]}</h5>
            </div>
          </Card.Header>
          <Card.Body className="p-0 ">
            <div className="d-flex align-items-center iq-sub-card border-0">
              <span className="material-symbols-outlined">
                line_style
              </span>
              <div className="ms-3">
                <Link to="/dashboard/app/profile" className="mb-0 h6">
                  My Profile
                </Link>
              </div>
            </div>
            <div className="d-flex align-items-center iq-sub-card border-0">
              <span className="material-symbols-outlined">
                edit_note
              </span>
              <div className="ms-3">
                <Link to="#" className="mb-0 h6">
                  Edit Profile
                </Link>
              </div>
            </div>
            <div className="d-flex align-items-center iq-sub-card border-0">
              <span className="material-symbols-outlined">
                manage_accounts
              </span>
              <div className="ms-3">
                <Link
                  to="/dashboard/app/user-account-setting"
                  className="mb-0 h6"
                >
                  Account settings
                </Link>
              </div>
            </div>
            <div className="d-flex align-items-center iq-sub-card border-0">
              <span className="material-symbols-outlined">lock</span>
              <div className="ms-3">
                <Link
                  to="/dashboard/app/user-privacy-setting"
                  className="mb-0 h6"
                >
                  Privacy Settings
                </Link>
              </div>
            </div>
            <div className="d-flex align-items-center iq-sub-card">
              <span className="material-symbols-outlined">login</span>
              <div className="ms-3">
                <Link to="/auth/sign-in" className="mb-0 h6">
                  Sign out
                </Link>
              </div>
            </div>
            <div className=" iq-sub-card">
              <h5>Chat Settings</h5>
            </div>
            <div className="d-flex align-items-center iq-sub-card border-0">
              <i className="material-symbols-outlined text-success md-14">
                circle
              </i>
              <div className="ms-3">Online</div>
            </div>
            <div className="d-flex align-items-center iq-sub-card border-0">
              <i className="material-symbols-outlined text-warning md-14">
                circle
              </i>
              <div className="ms-3">Away</div>
            </div>
            <div className="d-flex align-items-center iq-sub-card border-0">
              <i className="material-symbols-outlined text-danger md-14">
                circle
              </i>
              <div className="ms-3">Disconnected</div>
            </div>
            <div className="d-flex align-items-center iq-sub-card border-0">
              <i className="material-symbols-outlined text-gray md-14">
                circle
              </i>
              <div className="ms-3">Invisible</div>
            </div>
          </Card.Body>
        </Card>
      </Dropdown.Menu>
    </Dropdown>
                  
    </>
  )
}

export default GetProfile;