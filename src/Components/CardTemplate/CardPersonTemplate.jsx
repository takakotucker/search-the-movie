/* @flow */
import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'antd'
import CardProfileImg from '../Image/ProfileImg'

type Props = {
  name: string,
  date: string, 
  vote: number,
  image: number, 
  id: number,
  type: string
}

const CardPersonTamplate = ({ date, image, name, id, type }: Props) => (
  <Link to={`/search/${type}/${id}`}>
    <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
      <div className='custom-image'>
        <CardProfileImg name={name} image={image}/>
      </div>
      <div className='custom-card'>
        <h2>{name}</h2>
      </div>
    </Card>
  </Link>
)

export default CardPersonTamplate
