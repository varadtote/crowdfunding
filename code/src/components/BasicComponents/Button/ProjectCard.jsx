import React from "react";
import Button from "./Button";

function ProjectCard({ title, pledgeAmount, cardText, itemsLeft, outofStock }) {
    return (
        <div className={outofStock ? "projectCard outofStock" : "projectCard"}>
            <div className="flex cardTitleGrid">
                <h2 className="cardTitle blackText">{title}</h2>
                <p className="cyanText">Pledge %{pledgeAmount} or more</p>
            </div>
            <div className="cardText">{cardText}</div>
            <div className="flex cardFooterGrid">
                <h2 className="blackText">
                    {itemsLeft} <span className="grayText">left</span>{" "}
                </h2>
                <Button text={"Select Reward"} />
            </div>
        </div>
    );
}

export default ProjectCard;
