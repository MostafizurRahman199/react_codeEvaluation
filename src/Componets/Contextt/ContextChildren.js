import React from "react";
import { useContext } from "react";
import { CountContext } from "./ContextParent";

export const ChildA = () => {
  console.log("Child A render!!");

  return (
    <>
      <div>
        Child A<ChildB></ChildB>
      </div>
    </>
  );
};


export const MemorizedChildA = React.memo(ChildA);

export const ChildB = () => {
  console.log("Child B render!!");

  return (
    <>
      <div>Child B</div>
      <ChildC></ChildC>
    </>
  );
};

export const ChildC = () => {
  const count = useContext(CountContext)
  console.log("Child C render!!!");

  return (
    <>
      <div>Child C and count {count}</div>
    </>
  );
};
