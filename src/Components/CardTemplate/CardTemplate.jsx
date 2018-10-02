/* @flow */
import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'antd'

type Props = {
  name: string,
  date: string, 
  vote: number,
  image: number, 
  id: number,
  type: string
}

const renderInfo = (date, vote) => {
  const voteInfo = !vote ? 'No vote yet' : vote;
  if (date !== null) {
    return `Date: ${date} | Votes: ${voteInfo}`
  } 
}

const renderImage = (name, image) => {
  if (image !== null) {
    return  <img alt={name} width='100%' src={`https://image.tmdb.org/t/p/w500${image}`} />
  } else {
    return  <div className="no_image_holder glyphicon glyphicon-user"></div>

  }
}

const CardTamplate = ({ date, image, vote, name, id, type }: Props) => (
  <Link to={`/result/${id}/${type}`}>
    <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
      <div className='custom-image'>
       {renderImage(name, image)}
      </div>
      <div className='custom-card'>
        <h3>{name}</h3>
        <p>{renderInfo(date, vote)}</p>
      </div>
    </Card>
  </Link>
)

export default CardTamplate
