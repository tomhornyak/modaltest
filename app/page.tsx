"use client";
import Modal from "@semcore/ui/modal";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // comment out the following to see the issue in production mode
  //const searchParams = useSearchParams();

  useEffect(() => {}), [message, showModal];

  const handleOpen = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };

  const handleSendReset = () => {
    setShowModal(false);
  };

  const handleForgotPw = () => {
    handleOpen();
    setMessage("If you have an account, a reset link will be mailed to you.");
  };

  return (
    <>
      <Modal
        visible={showModal}
        className="styledModal"
        onClose={handleClose}
        w={536}
      >
        <Modal.Title>Change/Forgot Password</Modal.Title>
        <input
          style={{ marginBottom: "20px", marginTop: "10px" }}
          placeholder="Enter your Email"
          type="email"
          id="eml"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="sidebyside">
          <button
            className="styledSubmit"
            type="button"
            onClick={handleClose}
            style={{ marginRight: "10px" }}
          >
            Close
          </button>
          <button
            type="button"
            className="styledSubmit"
            onClick={handleSendReset}
          >
            Email Reset
          </button>
        </div>
        <label
          className="styledMessage"
          style={{
            visibility: message ? "visible" : "collapse",
          }}
        >
          {message}
        </label>
      </Modal>
      <div className="styledDiv flex p-10">
        <form className="styledForm w-full">
          <header className="styledHeader">Modal Test</header>
          <button
            type="button"
            className="styledSubmit"
            onClick={handleForgotPw}
          >
            Forgot/Change password
          </button>
        </form>
      </div>
    </>
  );
}
