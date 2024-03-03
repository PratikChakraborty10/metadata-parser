import React from "react";
import "../styles/style.css"

function GooglePreview() {
  return (
    <div className="h-100 w-full flex flex-col gap-3">
      <p className="text-sm text-muted-foreground font-semibold">Google</p>
      <div className="flex flex-col gap-0">
        <h2 className="text-xl text-blue-900 sans-sariff hover:underline hover:cursor-pointer">
          Pratik Chakraborty | portfolio
        </h2>
        <p className="text-sm text-green-700 sans-sariff">
          https://www.pratikchakraborty.in/
        </p>
        <p className="text-sm text-muted-foreground sans-sariff">
          Hi, I am Pratik Chakraborty and you are currently viewing my portfolio
          website. Check now!
        </p>
      </div>
    </div>
  );
}

export default GooglePreview;
