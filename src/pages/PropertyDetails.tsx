import PropertyImageSlider from "../components/Properties/PropertyImageSlider"
import PropertySummary from "../components/Properties/PropertySummary"
import { useParams } from "react-router-dom"
export default function PropertyDetails() {
    const { address } = useParams<{ address: string }>()
  return (
    <section className="property-details-container ">
        {address && <PropertyImageSlider address={address}/>}
        {address && <PropertySummary/>}
    </section>
  )
}
