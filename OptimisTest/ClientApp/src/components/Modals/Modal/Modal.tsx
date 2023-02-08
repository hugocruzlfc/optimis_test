import React, { useEffect, useState } from "react";
import "./modalStyles.css";
import ReactPortal from "../ReactPortal.tsx";

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  handleClose: () => void;
}

export default function Modal({ children, isOpen, handleClose }: Props) {
  useEffect(() => {
    const closeOnEscapeKey = (e) => (e.key === "Escape" ? handleClose() : null);
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  if (!isOpen) return null;

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <div className="modal">
        <div className="modal-content">
          <div className="row-md-12">
            <div className="row-md-12">
              <span
                onClick={handleClose}
                className="d-flex flex-row-reverse p-2 pt-3"
              >
                <svg
                  width="30px"
                  height="30px"
                  fill="none"
                  className="modal-btn"
                >
                  <path
                    d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.16998 14.83L14.83 9.17004"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.83 14.83L9.16998 9.17004"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
            <div className="col-md-12">{children}</div>
          </div>
        </div>
      </div>
    </ReactPortal>
  );
}
