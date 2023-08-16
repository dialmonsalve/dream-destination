
import { useForm } from "../../hooks/useForm";
import { ReactFormEvent } from "../../types"
import { Button } from "../../ui";
import { useRoom } from "../private/hooks/useRoom";

interface FormEditStatusRoomProps {
  roomId: number
  numberRoom: string
}

const newStatus = {
  statusRoom: 'active'
}

export const FormEditStatusRoom = ({ roomId, numberRoom }: FormEditStatusRoomProps) => {

  const { formState, handleFieldChange } = useForm(newStatus);
  const { statusRoom } = formState;

  const { showModal,handleToggleModal,  changeStatusRoom} = useRoom()

  const handleSetModal = () => {
    handleToggleModal();
    
  }

  const handleSubmit = (e: ReactFormEvent) => {
    e.preventDefault();
    changeStatusRoom(roomId, statusRoom).then().catch(e => console.log(e));
    handleToggleModal();
  }

  return (

    <div onClick={handleSetModal} className={`change-status-room ${showModal ? 'show' : 'hide'}`} >
      <h2>Change the status room: {numberRoom}</h2>
      <form onSubmit={handleSubmit} onClick={(e)=> e.stopPropagation()}  >
        <div className="change-status-room--controls">
          <label className='form-control--label' htmlFor='statusRoom'>Status:</label>
          <select
            value={statusRoom}
            className='form-control--select select-room'
            onChange={handleFieldChange}
            name="statusRoom" >
            <option value="active">active</option>
            <option value="occupied">occupied</option>
            <option value="free">free</option>
            <option value="cleaning">cleaning</option>
            <option value="inactive">inactive</option>
          </select>
        </div>

        <Button
          label="change"
          type="submit"
        />

        <Button
          label="cancel"
          type="button"
          backgroundColor="red"
          onClick={handleSetModal}
        />
      </form>
    </div>
  )
}
