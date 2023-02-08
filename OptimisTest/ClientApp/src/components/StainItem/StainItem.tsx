import React from "react";
import moment from "moment";
import { Stain } from "../../types/Stain";

interface Props {
  stain: Stain;
}

const StainItem = ({ stain }: Props) => {
 
  return (
    <div className="col-sm-3 mb-3 mb-sm-0 p-2">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{stain.name}</h5>
          <div className="card-text">
            <p>
            Relase Date:  {moment(stain.relaseDate).format("D/MM/YYYY")}
            </p>
           
          </div>
        </div>
        <button type="button" className="btn btn-link ">Details</button>
      </div>
    </div>
  );
};
export default StainItem;
