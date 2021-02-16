import React from 'react'
import Moment from "react-moment";

const MomentContainer = ({date}) => {
  return (
    <Moment format="DD/MM/YYYY">{date}</Moment>
  )
}

export default MomentContainer
