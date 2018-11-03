import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import data from '../bcb.json'

const slot = ({ match }) => {
  const session = data.slots[match.params.index]
  return (
    <div>
      <h1>{match.params.index}</h1>
    </div>
  )
}

export default slot 
