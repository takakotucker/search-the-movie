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

const renderInfo = (date, vote) => {
  const voteInfo = vote !== null ? `| Vote: ${vote}` : '';
  if (date !== null) {
    return `Release Date: ${date} ${voteInfo}`
  } 
}

const CardMovieTemplate = ({ date, image, vote, name, id, type }: Props) => (
  <Link to={`/search/${type}/${id}`}>
    <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
      <div className='custom-image'>
        <CardProfileImg name={name} image={image}/>
      </div>
      <div className='custom-card'>
        <h3>{name}</h3>
        <p>{renderInfo(date, vote)}</p>
      </div>
    </Card>
  </Link>
)

export default CardMovieTemplate
