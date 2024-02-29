"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { validUrl } from "@/utils/regex";

function LandingSearchComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const search = () => {
    if (validUrl(searchTerm)) {
      router.push(`/preview?query=${encodeURIComponent(searchTerm)}`);
    } else {
      alert("Please enter a valid url");
    }
  };
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input
          type="email"
          placeholder="Enter website url"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button type="submit" onClick={search}>
          Parse
        </Button>
      </div>
    </div>
  );
}

export default LandingSearchComponent;
