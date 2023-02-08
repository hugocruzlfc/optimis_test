import React, { useMemo } from "react";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GroupContext, GroupContextType } from "../../context/GroupContext.tsx";
import useStains from "../../hooks/useStains.tsx";

export default function GroupDetails() {
  const { groups, setGroups, loading } = useContext(
    GroupContext
  ) as GroupContextType;
  const { stains } = useStains();
  const { groupId } = useParams();
  const navigate = useNavigate();

  const currentGroup = useMemo(
    () => groups.find((groupItem) => groupItem.id.toString() === groupId),
    [groupId, groups]
  );

  const stainsInGroup = useMemo(
    () =>
      stains.filter((stainItem) => currentGroup.stainId.includes(stainItem.id)),
    [stains, currentGroup]
  );

  return (
    <div className="row-md-12">
      <div className="col-md-12">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-center">{currentGroup.name}</h5>
            <div className="row-md-12">
              <div className="col-md-6">
                <div className="card-text">
                  <p>Lab Country: {currentGroup.labCountry}</p>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                    checked={currentGroup.active}
                    readOnly
                  />
                  <label
                    className="form-check-label"
                    htmlFor="gridCheck"
                  >
                    {currentGroup.active ? <>Active</> : <>Inactive</>}
                  </label>
                </div>
              </div>
              <div className="col-md-12">
                <h6 className="card-text text-center">Stains:</h6>
                <span className="ms-5">
                  {stainsInGroup.map((stain) => (
                    <p
                      key={stain.id}
                      className="d-inline-flex p-2 ps-4"
                    >
                      {stain.name}
                    </p>
                  ))}
                </span>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="btn btn-link"
            onClick={() => navigate("/group")}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
