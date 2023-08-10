import { useParams } from "react-router-dom"
import { useHotel } from "../hooks/useHotel";
import NotFoundPage from "../../public/pages/notFoundPage";
import { useEffect } from "react";
import { useRoom } from "../hooks/useRoom";
import { PrivateResumeHotelView } from "../views/PrivateResumeHotelView";
import { Spinner } from "../../../ui";

function EditRoomPage() {

  const { hotel, getHotel, isLoading } = useHotel();
  const { getRoom } = useRoom()
  const { hotelId, roomId } = useParams();
  const existRoomInHotel = hotel.rooms?.some(room => room.id === Number(roomId));

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


  return (

    isLoading === 'loading' ? <Spinner type="long-play" />:

    !existRoomInHotel ? <NotFoundPage /> :

    <>
      <div className='create-room__container' >
        <h1 className='private-container__title' >Edit room</h1>
        <PrivateResumeHotelView classBase='create-edit-room__container--info' id={Number(hotelId)!} city={hotel.city} name={hotel.name} isInfo={true} isCreating={false} />
      </div>

    </>
  )
}

export default EditRoomPage
