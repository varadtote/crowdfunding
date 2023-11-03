import Button from "./components/BasicComponents/Button/Button";
import ProjectCard from "./components/BasicComponents/Button/ProjectCard";

import landingImage from "./assets/image-hero-desktop.jpg";

import "./styles/App.css";
import "./styles/MediaStyles.css";
import Header from "./components/AppComponents/Header";

function App() {
    return (
        <div className="App">
            <div className="landingImage">
                <img src={landingImage} alt="Landing Image" />
            </div>

            <div className="container">
                <Header />

                <div className="projectCardsGrid">
                    <ProjectCard
                        title={"Bamboo Stand"}
                        pledgeAmount={25}
                        cardText={`You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
    you'll be added to a special Backer member list.`}
                        itemsLeft={101}
                        outofStock={false}
                    />
                    <ProjectCard
                        title={"Bamboo Stand"}
                        pledgeAmount={25}
                        cardText={`You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
    you'll be added to a special Backer member list.`}
                        itemsLeft={101}
                        outofStock={false}
                    />
                    <ProjectCard
                        title={"Bamboo Stand"}
                        pledgeAmount={25}
                        cardText={`You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
    you'll be added to a special Backer member list.`}
                        itemsLeft={101}
                        outofStock={true}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
