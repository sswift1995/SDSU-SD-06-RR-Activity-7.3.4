import React, { useContext } from "react";
import StylesContext from './StylesContext'

export default function CollectorButton() {
  const styling = useContext()
  return (
    <div>
      <button style= { styling}>
        Click Here!
      </button>
    </div>
  );
}
