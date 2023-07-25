import { Button } from "../components/ui/Button";
import { FormControl } from "../components/ui/FormControl";
import { useHotels } from "../hooks/useHotels";


function HotelPage() {

  const { hotels } = useHotels();
  
  return (
    <div className="content__background">

      <form className="content__background--form" action="">
        <FormControl
          label="what is your destiny?"
          type="text"
          name="destiny"
        />
        <FormControl
          label="Initial Date"
          type="date"
          name="initial-date"
        />
        <FormControl
          label="Final Date"
          type="date"
          name="final-date"
        />
        <FormControl
          label="rooms"
          type="number"
          name="rooms"
        />
        <Button
          label="search"
          size="medium"
          backgroundColor="primary-dark"
          margin="0 2rem"
          isAnimated
        />
      </form>

    </div>
  )
}

export default HotelPage;
