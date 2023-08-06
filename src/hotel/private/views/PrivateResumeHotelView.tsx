import { ReactNode, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { Button } from '../../../ui';
import { CreateRoomView } from './CreateRoomView';
import { EditRoomView } from './EditRoomView';

interface ResumeHotelProps {
  id: number
  name: string
  city: string
  isInfo?: boolean
  classBase: string
  isCreating:boolean
}

export const PrivateResumeHotelView = ({ id, name, city, classBase,isCreating, isInfo = false }: ResumeHotelProps) => {

  const navigate = useNavigate();

  const handleCreateRoom = () => {
    navigate(`/api/hotel/${id}/rooms/create`)
  }

  return (
    <div className={`${classBase}`} >
      {
        isInfo ?
          <></>
          : <h2 className={`${classBase}--title`}>{ isCreating? 'Create ' : 'Edit '}Room</h2>
      }
      {
        isInfo ?
          <h3 className={`${classBase}--subtitle`} >Info Hotel</h3>
          : <h3 className={`${classBase}--subtitle`} >Hotel as been created</h3>
      }
      <p className={`${classBase}--content`}>Name: <span>{name}</span></p>
      <p className={`${classBase}--content`}>City: <span>{city}</span></p>
      {
        !isInfo && <Button label='create a rooms' onClick={handleCreateRoom} />
      }
      {

      }
      {
        isCreating ? <CreateRoomView /> : <EditRoomView />
      }

    </div>
  )
}