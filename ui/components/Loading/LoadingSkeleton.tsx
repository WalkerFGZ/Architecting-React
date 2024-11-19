import Image from "next/image";
import React from "react";
import placeHolderLogo from "../../../public/images/white-logo.png";

export default function LoadingSkeleton() {
  return (
    <div className="gallery-wrapper">
      {[...Array(4)].map((_, index) => (
        <>
          <div key={index} className="pie-item">
            <Image
              src={placeHolderLogo}
              alt="place holder logo"
              width={400}
              height={200}
            />
          </div>
        </>
      ))}
    </div>
  );
}
