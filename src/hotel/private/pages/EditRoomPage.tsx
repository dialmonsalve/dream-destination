import { useParams } from "react-router-dom"
import { useHotel } from "../hooks/useHotel";
import NotFoundPage from "../../public/pages/notFoundPage";
import { useEffect } from "react";
import { useRoom } from "../hooks/useRoom";
import { PrivateResumeHotelView } from "../views/PrivateResumeHotelView";

function EditRoomPage() {

  const { hotel, getHotel } = useHotel();
  const { getRoom } = useRoom()
  const { hotelId, roomId } = useParams();

  useEffect(() => {
    if (hotelId === undefined) return;
    getHotel(hotelId).then().catch(e => console.log(e)
    )
  }, [hotelId, getHotel]);

  useEffect(() => {
    if (roomId === undefined) return;
    getRoom(roomId).then().catch(e => console.log(e)
    )
  }, [roomId, getRoom])

  const existRoomInHotel = hotel.rooms?.some(room => room.id === Number(roomId));

  if (!existRoomInHotel) {
    return <NotFoundPage />
  }

  return (
    <div className='create-room'>
      <div className='create-room__container' >
        <h1 className='create-room__container--title' >Edit room</h1>
        <PrivateResumeHotelView classBase='create-room--info' id={Number(hotelId)!} city={hotel.city} name={hotel.name} isInfo={true} isCreating={false} />
      </div>

    </div>
  )
}

export default EditRoomPage
