import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ModalTypeConstants } from "../../assets/constants/GeneralConstants";
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';
import {useAlert} from "react-alert";

const ModalMessage = (props) => {
  const [message, setMessage] = useState("")
  const [okLink, setOkLink] = useState()
  const modalStatus = useSelector(state => state.misc.modalStatus);
  useEffect(() => {
    if (modalStatus && modalStatus.modalData && modalStatus.modalFor === ModalTypeConstants.TYPE_SUCCESS) {
      let message = modalStatus.modalData.message;
      let okLink = modalStatus.modalData.okLink;
      setMessage(message);
      setOkLink(okLink);
    }
  }, [modalStatus])
  const alert = useAlert()

  useEffect(() => {
    if(okLink){
      openNotification('success' , message);
      document.getElementById('okLinkButton').click();
      setOkLink(null);
    }
  }, [okLink])

  const openNotification = (type , message) => {
      const key = `open${Date.now()}`;
      alert.show(message , {
          type:"success" ,
          timeout: 5000,
          zIndex:99999,
          key
      })
  }

  return  (
    okLink?<Link id="okLinkButton" to={okLink}></Link>:<></>
  )
}
export default withRouter(ModalMessage);










{/* <Modal
centered
okText={'Ok'}
visible={true}
// onCancel={() => setVisibility(false)}
// cancelText={'Cancel'}
onOk={()=>setIsOpen(true)}
key={'message'}
footer={null}
>
<h2>{message}</h2>
  <Header icon>
    <Icon color='green' name={topIcon} />
    {"message"}
  </Header>
  <Modal.Actions>
    <Link to={okLink} onClick={()=>setIsOpen(false)}>
      <Button color='green' inverted>
        <Icon name='checkmark' /> Ok
      </Button>
    </Link>
  </Modal.Actions>
</Modal> */}