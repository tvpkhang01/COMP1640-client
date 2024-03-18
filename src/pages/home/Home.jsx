// import { useRef, useState } from "react";
// import { Modal, Form, Button } from "antd";
// import "./Home.css"
// import {
//   AreaChartOutlined,
//   FileAddOutlined
// } from '@ant-design/icons';

// function Home() {
//   const desc = useRef()
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [setPhoto] = useState(null)
//   const [setFile] = useState(null)

//   const showModal = () => {
//     setIsModalVisible(true);
//   };

//   const handleCancel = () => {
//     setIsModalVisible(false);
//   };

//   return (
//     <div className="share">
//       <div className="shareWrapper">
//         <div className="shares">
//           <img className= "shareProfile" src="https://res.cloudinary.com/detqcm2nt/image/upload/v1709743558/avatar.jpg" alt="" />
//           <input 
//             placeholder=""
//             className="shareInput"
//             ref={desc}
//             onClick={showModal}
//           />
//           <Button className="shareButton">Post</Button>
//           <Modal
//             title="COMP1640 new"
//             visible={isModalVisible}
//             onCancel={handleCancel}
//             width="600px"
//             id="modal-content"
//             footer={[
//               <Button  className="shareButton" key="post" type="darkgray" onClick={handleCancel}>
//                 Post
//               </Button>,
//           ]}>
//             <Form>
//               <div className="shareWrapper">
//                 <div className="shares">
//                   <img className= "shareProfile" src="https://res.cloudinary.com/detqcm2nt/image/upload/v1709743558/avatar.jpg" alt="" />
//                   <input 
//                     placeholder="what's in your mind?"
//                     className="shareInput"
//                     ref={desc}
//                   />
//                 </div>
//                 <hr className="shareHr" />
//                 <form className="shareBottom">
//                   <div className="shareOptions">
//                     <label htmlFor="file" className="shareOption">
//                       <AreaChartOutlined className="shareIcon"/>
//                       <span className="shareOptionText">Photo or Video</span>
//                       <input style={{display: "none"}} type="photo" id="photo" accept=".png, .jpeg" onChange={(e)=>setPhoto(e.target.files[0])}/>
//                     </label>
//                     <label htmlFor="file" className="shareOption">
//                       <FileAddOutlined />
//                       <span className="shareOptionText">File</span>
//                       <input style={{display: "none"}} type="file" id="file" accept=".doc, .pdf" onChange={(e)=>setFile(e.target.files[0])}/>
//                     </label>
//                   </div>
//                 </form>
//               </div>
//             </Form>
//           </Modal>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Home
import React from 'react'

export default function Home() {
  return (
    <div>Home</div>
  )
}
