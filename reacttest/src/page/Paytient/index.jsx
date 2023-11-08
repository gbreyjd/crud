import React from "react";
import "../../App.css";

const testitems = [
  "2323r",
  "sdfasdfas",
  "testitem",
  "sadfasdf",
  "tsadfsadf43estitem",
  "tessadfasdfitem",
  "tesasdfatitem",
  "tesdfstitem",
];

// console.log(testitems);

export default function Paytient() {
  return (
    <div className="flex border-gray-500">
      {testitems.map((item, index) => (
        <li className="text-green-700 " key={index}>
          {item}
        </li>
      ))}
    </div>
  );
}
