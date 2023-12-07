import UnderlinedString from "./UnderlinedString";
import Wrapper from "../assets/wrappers/Contacts";
import linkedinIcon from "../assets/images/linkedin.png"
import facebookIcon from "../assets/images/facebook.png"
const Contacts = () => {
  return (
    <Wrapper>
      <div className="contactsLabelContainer">
        <UnderlinedString string="CONTACTS" />
      </div>
      <p className="contactInfo">SUPLISASHVILI@GMAIL.COM</p>
      <p className="contactInfo">+995 599325775</p>
      <div className="socialNetworksContainer">
        <a href="https://www.linkedin.com/in/alexander-uplisashvili-800078201/" target="_blank" rel="noreferrer" ><img src={linkedinIcon} className="singleSocialNetwork" alt="LinkedIn Icon"/></a>
        <a href="https://www.facebook.com/sasha.uplisashvili" target="_blank" rel="noreferrer" ><img src={facebookIcon} className="singleSocialNetwork" alt="Facebook Icon"/></a>
      </div>
    </Wrapper>
  );
};

export default Contacts;
