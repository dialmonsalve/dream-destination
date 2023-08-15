import { useNavigate, useParams } from "react-router-dom"
import { useRoom } from "../hooks/useRoom";
import { useEffect, useState } from "react";
import NotFoundPage from "../../public/pages/notFoundPage";
import { Button, Spinner } from "../../../ui";
import { useHotel } from "../hooks/useHotel";
import { convertDate } from "../../../helpers/convertDate";

export function Component() {

  const [error, setError] = useState(false);
  const { hotelId, roomId } = useParams();
  const navigate = useNavigate()
  const { hotel, getHotel } = useHotel();
  const { isLoading, room, getRoom } = useRoom();
  const existRoomInHotel = hotel.rooms?.some(room => room.id === Number(roomId));

  useEffect(() => {
    if (hotelId === undefined) return;
    getHotel(hotelId).
      then()
      .catch(error => setError(true))
  }, [hotelId, getHotel]);

  useEffect(() => {
    if (roomId === undefined) return;
    getRoom(roomId).
      then()
      .catch(error => setError(true))
  }, [roomId, getRoom]);

  const handleBack = () => {
    navigate(-1)
  }

  const handleEditRoom = () => {
    if (hotelId === undefined || roomId === undefined) {
      return <NotFoundPage />
    }
    navigate(`/api/hotels/${hotelId}/rooms/edit/${roomId}`)
  }

  if (isLoading === 'loading') {
    return <Spinner type='half-circle' />
  }

  return (

    !existRoomInHotel ? <NotFoundPage /> :

      error ? <NotFoundPage /> :
        <div className="detail-room" >
          <div className="detail-room__container">
            <div className="detail-room__container--labels">
              <label className="detail-room__container--labels-title" >Hotel name: </label>
              <label className="detail-room__container--labels-content" >{hotel.name}</label>
            </div>

            <div className="detail-room__container--labels">
              <label className="detail-room__container--labels-title">Hotel city</label>
              <label className="detail-room__container--labels-content" >{hotel.city}</label>
            </div>

            <div className="detail-room__container--labels">
              <label className="detail-room__container--labels-title">Hotel Description</label>
              <label className="detail-room__container--labels-content" >{hotel.description}</label>
            </div>

            <div className="detail-room__container--labels">
              <label className="detail-room__container--labels-title">Number room name</label>
              <label className="detail-room__container--labels-content" >{room.numberRoom}</label>
            </div>

            <div className="detail-room__container--labels">
              <label className="detail-room__container--labels-title">Room type</label>
              <label className="detail-room__container--labels-content" >{room.roomType}</label>
            </div>

            <div className="detail-room__container--labels">
              <label className="detail-room__container--labels-title">Basis cost</label>
              <label className="detail-room__container--labels-content">$ {room.basisCost}</label>
            </div>

            <div className="detail-room__container--labels">
              <label className="detail-room__container--labels-title">Taxes</label>
              <label className="detail-room__container--labels-content" >{room.taxes * 100} %</label>
            </div>

            <div className="detail-room__container--labels">
              <label className="detail-room__container--labels-title">Capacity</label>
              <label className="detail-room__container--labels-content" >{room.capacity}</label>
            </div>

            <div className="detail-room__container--labels">
              <label className="detail-room__container--labels-title">Description</label>
              <label className="detail-room__container--labels-content" >{room.description ? room.description : 'There is no description'}</label>
            </div>

            <div className="detail-room__container--labels">
              <label className="detail-room__container--labels-title">Status</label>
              <label className="detail-room__container--labels-content" >{room.isActive ? 'available ' : 'occupied '}</label>
            </div>
            <div className="detail-room__container--labels">
              <label className="detail-room__container--labels-title">Init date</label>
              <label className="detail-room__container--labels-content" >{convertDate(Number(room.initialDate))}</label>
            </div>

            <div className="detail-room__container--labels">
              <label className="detail-room__container--labels-title">finish date</label>
              <label className="detail-room__container--labels-content" >{convertDate(Number(room.finalDate))}</label>
            </div>

            <Button
              label="back"
              margin="1rem 4rem"
              backgroundColor="red"
              onClick={handleBack}
            />
            <Button
              label="edit room"
              margin="1rem 4rem"
              onClick={handleEditRoom}
            />
          </div>
        </div>

  )

}

Component.displayName =  "DetailRoomPage"