import Button from "../BasicComponents/Button/Button";
import applogo from "./applogo.svg";

function Header() {
    return (
        <>
            <img className="applogo" src={applogo} alt="" />
            <h1 className="textBlack">Mastercraft Bamboo Monitor Riser</h1>
            <p className="textGray">
                A beautiful & handcrafted monitor stand to reduce neck and eye
                strain.
            </p>
            <div className="flex spaceBetween headerGrid">
                <Button text={"Back this project"} />
                <p>BookMark </p>
            </div>
        </>
    );
}

export default Header;
