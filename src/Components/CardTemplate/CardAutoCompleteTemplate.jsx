/* @flow */
import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'antd'
import CardProfileImg from '../Image/ProfileImg'

type Props = {
  name: string,
  id: number,
  type: string
}

const CardAutoCompleteTemplate = ({  name, id, type }: Props) => (
  <Link to={`/search/${type}/${id}`}>
    {name}
  </Link>
)

export default CardAutoCompleteTemplate
