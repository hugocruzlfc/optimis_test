import React from "react";
import StainItem from "../StainItem/StainItem.tsx";
import useStains from "../../hooks/useStains.tsx";

export default function StainList() {
 
  const {stains, setStains} = useStains()

  return (
    <>
      <h3 className="text-center">Stains available</h3>
      <div className="row">
        {stains.map((stain) => (
          <StainItem
            key={stain.id}
            stain={stain}
          />
        ))}
      </div>
    </>
  );
}
