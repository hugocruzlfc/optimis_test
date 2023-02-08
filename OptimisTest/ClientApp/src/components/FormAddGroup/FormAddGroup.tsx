import React, { useState } from "react";
import useStains from "../../hooks/useStains.tsx";
import { Group } from "../../types/Group";
import { Stain } from "../../types/Stain";
import { CountryCode } from "../../types/Country.ts";

interface Props {
  groups: Group[];
  setGroups: (groups: Group[]) => void;
}

const INITIAL_FORM_STATE = {
  groupName: "",
  groupLabCountry: "",
};

export default function FormAddGroup({ groups, setGroups }: Props) {
  const { stains, setStains } = useStains();
  const [formValue, setFormValue] = useState(INITIAL_FORM_STATE);
  const [selectStain, setSelectStain] = useState<Stain[]>([]);
  const [message, setMessage] = useState(false);

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement> | HTMLInputElement
  ) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const renderMessage = () => {
    return (
      <p
        className="alert alert-warning"
        role="alert"
      >
        The Group must have at least one stain!
      </p>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectStain.length === 0) {
      setMessage(true)
    } else {
      setMessage(false)
      const newGroup: Group = {
        id: groups.length + 1,
        name: formValue.groupName,
        stainId: selectStain,
        active: true,
        labCountry: formValue.groupLabCountry,
      };
      setGroups([...groups, newGroup]);
      setFormValue(INITIAL_FORM_STATE);
    }
  };

  const handleSelectStain = (id: number) => {
    const selectCurrentStain = selectStain.find((itemId) => itemId === id);
    if (selectCurrentStain) {
      const filterStain = selectStain.filter((itemId) => itemId !== id);
      setSelectStain(filterStain);
    } else {
      setSelectStain([...selectStain, id]);
    }
  };



  return (
    <div className="row-md-12">
      <div className="col-md-12">
        <h3 className="text-center ps-2 pe-2">Add New Group</h3>
        <form
          onSubmit={handleSubmit}
          className="pe-3 ps-3"
        >
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Group name"
                aria-label="Group name"
                value={formValue.groupName}
                name="groupName"
                onChange={handleOnChange}
                required
              />
            </div>
            <div className="col">
              <select
                className="form-select"
                aria-label="Default select example"
                value={formValue.groupLabCountry}
                onChange={handleOnChange}
                name="groupLabCountry"
                required
              >
                <option value={""}>Select Lab</option>
                <option value={CountryCode.FRANCE}>FRANCE</option>
                <option value={CountryCode.SWEDEN}>SWEDEN</option>
              </select>
            </div>
          </div>
          <div className="row-md-12">
            <div className="col-md-12">
              <h6 className="text-center ps-2 pe-2 pt-5 pb-4">Select Stains</h6>
            </div>
            {stains.map((stain) => (
              <div
                key={stain.id}
                className="float-start mb-1 pe-5 ps-5"
              >
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id={stain.id}
                    onClick={() => handleSelectStain(stain.id)}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={stain.id}
                  >
                    {stain.name}
                  </label>
               
                </div>
              </div>
            ))}
          </div>
          <button
            type="submit"
            className="btn btn-outline-dark mt-5"
            id="createGroup"
            
          >
            Create
          </button>
        </form>
       
      </div>
      {message && renderMessage()}
    </div>
  );
}
