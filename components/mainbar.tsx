import React from "react";
import Image from "next/image";

function Mainabar() {
  return (
    <div className="flex py-3 px-3 bg-zinc-200 shadow">
      <div className="flex justify-between">
        <div className="flex gap-4 justify-center items-center">
          <Image alt="logo" src="/logo.png" height={30} width={30} />
          <h1 className="font-bold">Meta Parser</h1>
        </div>
      </div>
    </div>
  );
}

export default Mainabar;
