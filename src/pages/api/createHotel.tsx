import { ReactNode, useState } from "react";
import { Button } from "../../components/ui/Button";
import { FormControl } from "../../components/ui/FormControl";

function NewHotelPage() {
  const [components, setComponents] = useState<ReactNode[]>([]);

  const handleAddComponent = () => {

    setComponents((prevComponents) => [...prevComponents, <RoomComponent key={prevComponents.length} />]);
  };

  const handleRemoveComponent = () => {
    setComponents((prevComponents) => {
      // Copia el array original y elimina el último componente
      const updatedComponents = [...prevComponents];
      updatedComponents.pop();
      return updatedComponents;
    });
  };

  return (
    <div className='create-hotel'>
      <div className='create-hotel__container' >
        <h1 className='create-hotel__container--title'>Create Hotel</h1>
        <form className="create-hotel__form" >
          <div className='create-hotel__form--hotel'>
            <FormControl
              label='name'
              name='name'
              type='text'
            />
            <FormControl
              label='city'
              name='city'
              type='text'
            />

            <FormControl
              label='description'
              name='description'
              type='text'
            />
          </div>

          <h1 className='create-hotel__form--title'>Create rooms</h1>
          <div className="create-hotel__form--rooms" >

            {components.map((component) => component)}
          </div>
          <div>
            <Button
              label='add room'
              size="small"
              margin="0rem 2rem"
              onClick={handleAddComponent}
            />

            {components.length > 0 &&
              <Button
                label="remove room"
                size="small"
                backgroundColor="red"
                onClick={handleRemoveComponent}
              />
            }
          </div>

          <div  className="create-hotel__form--buttons" >

            <Button
              margin='2rem 2rem 0 2rem'
              label='create hotel'
            />

            <Button
              margin='2rem 2rem 0 2rem'
              label='cancel'
              backgroundColor='red'
            // onClick={onLoginClick}
            />

          </div>



        </form>
      </div>
    </div>
  )
}

export default NewHotelPage;


function RoomComponent() {
  return (
    <>

      <FormControl
        label='room'
        name='room'
        type='number'
      />
      <FormControl
        label='type'
        name='type'
        type='text'
      />
      <FormControl
        label='costo base'
        name='base'
        type='number'
      />
      <FormControl
        label='costo impuestos'
        name='impuestos'
        type='number'
      />
      <FormControl
        label='capacidad'
        name='capacidad'
        type='number'
      />
      <FormControl
        label='description'
        name='room-description'
        type='text'
      />
    </>
  )
}
