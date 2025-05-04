import GuideIntro from "../components/Guide/GuideIntro"
import GuideMain from "../components/Guide/GuideMain"
import WorkWithMe from "../components/WorkWithMe"
import PropertiesView from "../components/Home/PropertiesView"
import Footer from "../components/Footer"
export default function Guide() {
  return (
    <div>
      
        <GuideIntro />
          <GuideMain />
          <WorkWithMe />
          <PropertiesView />
          <Footer />
    </div>
  )
}
