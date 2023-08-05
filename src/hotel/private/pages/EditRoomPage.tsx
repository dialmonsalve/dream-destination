import { useParams } from "react-router-dom"

function EditRoomPage  ()  {

  const params = useParams()
  console.log(params);
  
  return (
    <div>EditRoomPage</div>
  )
}

export default EditRoomPage
