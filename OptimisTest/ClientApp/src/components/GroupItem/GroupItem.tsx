import React from "react";
import { useNavigate } from "react-router-dom";
import { Group } from "../../types/Group";

interface Props {
  group: Group;
  groups: Group[];
  setGroups: (groups: Group[]) => void;
}

const GroupItem = ({ group, setGroups, groups }: Props) => {
  const navigate = useNavigate();
  const toggleAGroupState = () => {
    const filterGroups = groups.filter(
      (groupItem) => groupItem.id !== group.id
    );
    const groupModified = [
      ...filterGroups,
      { ...group, active: !group.active },
    ];
    setGroups(groupModified.sort((item1, item2) => item1.id - item2.id));
  };

  return (
    <div className="col-sm-6 mb-3 mb-sm-0 p-2 disabled">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{group.name}</h5>
          <div className="card-text">
            <p>Lab Country: {group.labCountry}</p>
          </div>
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
                checked={group.active}
                onClick={toggleAGroupState}
                readOnly
              />
              <label
                className="form-check-label"
                htmlFor="gridCheck"
              >
              
                {group.active ? <>Active</> : <>Inactive</>}
              </label>
            </div>
          </div>
        </div>

        <button
          type="button"
          className={`btn btn-link ${!group.active ? "disabled" : ""}`}
          onClick={() => navigate(`/group/${group.id}`)}
        >
          Details
        </button>
      </div>
    </div>
  );
};
export default GroupItem;
