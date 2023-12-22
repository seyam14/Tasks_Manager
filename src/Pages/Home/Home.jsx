import { Helmet } from "react-helmet";
import Banner from "./Banner/Banner";
import TargetAudienceSection from "./TargetAudienceSection/TargetAudienceSection";


const Home = () => {
    return (
        <div>
              <Helmet>
                <title>TasksMP|Home</title>
            </Helmet>
            <Banner></Banner>
            <TargetAudienceSection></TargetAudienceSection>
            
        </div>
    );
};

export default Home;