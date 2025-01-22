"use client";
import React from "react";
import LeftSide from "./left_side";
import RightSide from "./right_side";

export default function Resume() {
  return (
    <div className="flex flex-row">
      <LeftSide />
      <RightSide />
    </div>
  );
}
