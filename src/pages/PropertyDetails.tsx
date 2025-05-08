import PropertyImageSlider from "../components/Properties/PropertyImageSlider"
import PropertySummary from "../components/Properties/PropertySummary"
import PropertyFeatures from "../components/Properties/PropertyFeatures"
import { useParams } from "react-router-dom"
import MiniContact from "../components/Contact/MiniContact"
export default function PropertyDetails() {
    const { address } = useParams<{ address: string }>()
  return (
    <section className="property-details-container ">
        {address && <PropertyImageSlider address={address}/>}
        {address && <PropertySummary/>}
          {address && <PropertyFeatures />}
          {address && <MiniContact />}

    </section>
  )
}
