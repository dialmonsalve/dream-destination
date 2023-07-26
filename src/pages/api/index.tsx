import { Sidebar } from "../../components/layouts/staff/Sidebar";
import { AnchorTag } from "../../components/ui/AnchorTag";

function ApiHomePage() {
  return (
    <Sidebar>
      <AnchorTag
        href="/api/hotels"
        label="hotels"        
      />
      <AnchorTag
        href="/api/bookings"
        label="bookings"
      />
    </Sidebar>
  )
}

export default ApiHomePage;
