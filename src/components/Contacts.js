import UnderlinedString from "./UnderlinedString";
import Wrapper from "../assets/wrappers/Contacts";

const Contacts = () => {
  return (
    <Wrapper>
      <div className="contactsLabelContainer">
        <UnderlinedString string="CONTACTS" />
      </div>
      <p className="contactInfo">SUPLISASHVILI@GMAIL.COM</p>
      <p className="contactInfo">+995 599325775</p>
    </Wrapper>
  );
};

export default Contacts;
