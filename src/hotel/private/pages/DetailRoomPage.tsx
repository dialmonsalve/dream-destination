import { useParams } from "react-router-dom"
import { useRoom } from "../hooks/useRoom";
import { useEffect, useState } from "react";
import NotFoundPage from "../../public/pages/notFoundPage";
import { Spinner } from "../../../ui";

function DetailRoomPage() {

  const [error, setError] = useState(false);
  const { roomId } = useParams()
  const { isLoading, room, getRoom } = useRoom()

  useEffect(() => {
    if (roomId === undefined) return;
    getRoom(roomId).
      then()
      .catch(error => setError(true))
  }, [roomId, getRoom]);


  return (
    isLoading === 'loading' ? <Spinner type='long-play' /> :

      error ? <NotFoundPage /> :
        <h1 style={{textAlign:'center'}} >{roomId}</h1>
  )

}

export default DetailRoomPage