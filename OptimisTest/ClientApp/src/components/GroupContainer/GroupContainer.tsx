import React, { useContext, useState } from "react";
import { GroupContext, GroupContextType } from "../../context/GroupContext.tsx";
import { Group } from "../../types/Group";
import FormAddGroup from "../FormAddGroup/FormAddGroup.tsx";
import GroupList from "../GroupList/GroupList.tsx";
import Loading from "../Loading/Loading.tsx";
import Modal from "../Modals/Modal/Modal.tsx";

export default function GroupContainer() {
  const { groups, setGroups, loading } = useContext(
    GroupContext
  ) as GroupContextType;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="row mt-5">
      <div className="row">
        <div className="col-md-10 ps-5">
          <h3 className="text-center ps-5">Groups available</h3>
        </div>
        <div className="col-md-2 text-end">
          <button
            type="button"
            className="btn"
          >
            <span
              data-bs-toggle="tooltip"
              data-bs-title="Add new Group"
              style={{ cursor: "pointer" }}
              onClick={() => setIsOpen(true)}
            >
              <svg
                fill="#000000"
                width="35px"
                height="35px"
                viewBox="0 0 64 64"
              >
                <path d="M16.118,29.968l13.754,0l0,-13.747l3.961,0l0,13.747l14.239,0l0,3.961l-14.239,0l0,14.246l-3.961,0l0,-14.246l-13.754,0l0,-3.961Z" />

                <path d="M32.142,56.083c6.179,-0.059 12.297,-2.619 16.696,-6.966c5.225,-5.164 7.916,-12.803 6.978,-20.096c-1.609,-12.499 -11.883,-20.98 -23.828,-20.98c-9.075,0 -17.896,5.677 -21.765,13.909c-2.961,6.302 -2.967,13.911 0,20.225c3.842,8.174 12.517,13.821 21.61,13.908c0.103,0.001 0.206,0.001 0.309,0Zm-0.283,-4.003c-9.23,-0.089 -17.841,-7.227 -19.553,-16.378c-1.208,-6.452 1.071,-13.433 5.818,-18.015c5.543,-5.35 14.253,-7.143 21.496,-4.11c6.481,2.714 11.331,9.014 12.225,15.955c0.766,5.949 -1.369,12.184 -5.565,16.48c-3.68,3.767 -8.841,6.016 -14.164,6.068c-0.085,0 -0.171,0 -0.257,0Z" />
              </svg>
            </span>
          </button>
        </div>
        <Modal
          handleClose={() => setIsOpen(false)}
          isOpen={isOpen}
        >
          <FormAddGroup
            setGroups={setGroups}
            groups={groups}
          />
        </Modal>
      </div>
      <div className="row">
        <div className="col-md-12">
          {!loading ? (
            <>
              <GroupList
                groups={groups}
                setGroups={setGroups}
              />
              <nav>
                <ul className="pagination justify-content-center">
                  <li className="page-item disabled">
                    <p className="page-link">Previous</p>
                  </li>
                  <li className="page-item">
                    <p className="page-link">1</p>
                  </li>
                  <li className="page-item">
                    <p className="page-link">Total:{groups.length}</p>
                  </li>
                </ul>
              </nav>
            </>
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
}
