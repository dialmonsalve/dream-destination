import { ReactNode, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { Button } from '../../../utils/components';
import { CreateRoomView } from './CreateRoomView';


type ResumeHotelProps = {
  id: number
  name: string
  city: string
  isInfo?: boolean
  classBase: string
}

export const PrivateResumeHotelView = ({ id, name, city, classBase, isInfo = false }: ResumeHotelProps) => {

  const [components, setComponents] = useState<ReactNode[]>([]);
  const navigate = useNavigate();

  const handleCreateRoom = () => {
    navigate(`/api/hotels/${id}/rooms/create`)
  }

  const handleAddComponent = () => {
    setComponents((prevComponents) => [
      <div key={prevComponents.length} >
        <CreateRoomView />
      </div>
    ]);
  };

  const handleRemoveComponent = () => {
    setComponents((prevComponents) => {
      const updatedComponents = [...prevComponents];
      updatedComponents.pop();
      return updatedComponents;
    });
  };


  return (
    <div className={`hotel-${classBase}`} >
      <h2 className={`hotel-${classBase}--title`}>Create room</h2>
      <h3 className={`hotel-${classBase}--subtitle`} >Hotel as been created</h3>
      <p className={`hotel-${classBase}--content`}>Name: <span>{name}</span></p>
      <p className={`hotel-${classBase}--content`}>City: <span>{city}</span></p>
      {
        isInfo
          ?
          <div>
            <Button
              label='add room'
              size='small'
              margin='0rem 2rem'
              onClick={handleAddComponent}
            />

            {components.length > 0 &&
              <Button
                label='remove room'
                size='small'
                backgroundColor='red'
                onClick={handleRemoveComponent}
              />
            }
          </div>
          :
          <Button label='create a rooms' onClick={handleCreateRoom} />
      }
      {components.map((component) => component)}

    </div>
  )
}

