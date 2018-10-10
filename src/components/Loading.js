import React from 'react';
import { PropagateLoader } from "react-spinners";

const Loading = (props) => {
  return (
    <div className="flex-center height-100">
      <PropagateLoader size={props.size} sizeUnit={"px"} color={props.color} />
    </div>
  )
}

export default Loading;