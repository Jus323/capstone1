import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import blue from "../img/blue.png";
import green from "../img/green.png";
import orange from "../img/orange.png";
import pink from "../img/pink.png";
import red from "../img/red.png";
import white from "../img/white.png";
import yellow from "../img/yellow.png";
import "../styles/LoginPage.css"; // same style as for Loginpage

export const AboutUsPage = () => {
  const navigate = useNavigate();

  const handlebackclick = () => {
    navigate("/home");
  };

  return (
    <div>
      <h1>
        {" "}
        <s>About Us </s> Among Us
      </h1>
      <div>
        <Card className="card-with-spacing">
          <Card.Img variant="top" src={green} />
          <Card.Body>
            <Card.Title className="cardtitle">Jordan</Card.Title>
            <Card.Text className="carddesc">
              -Profile Edit / About Us Specialist
            </Card.Text>
            <Button variant="primary">
              Focused on the Profile Editing Page with Pink and this About Us
              Page
            </Button>
          </Card.Body>
        </Card>{" "}
        <div className="padding"></div>
        <Card className="card-with-spacing">
          <Card.Img variant="top" src={blue} />
          <Card.Body>
            <Card.Title className="cardtitle">Bhargav</Card.Title>
            <Card.Text className="carddesc">
              -Routing Specialist / Logic Analyst / Debugging Specialist
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>{" "}
        <div className="padding"></div>
        <Card className="card-with-spacing">
          <Card.Img variant="top" src={orange} />
          <Card.Body>
            <Card.Title className="cardtitle">Amirul</Card.Title>
            <Card.Text className="carddesc">
              -Main CSS Styling Expert / Forgot Password Page Specialist
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>{" "}
        <div className="padding"></div>
        <Card className="card-with-spacing">
          <Card.Img variant="top" src={pink} />
          <Card.Body>
            <Card.Title className="cardtitle">Justin</Card.Title>
            <Card.Text className="carddesc">-Profile Edit Masterist</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>{" "}
      </div>

      <div className="padding"></div>

      <div>
        <Card className="card-with-spacing">
          <Card.Img variant="top" src={yellow} />
          <Card.Body>
            <Card.Title className="cardtitle">BeiJi</Card.Title>
            <Card.Text className="carddesc">
              -Registration Page Specialist
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>{" "}
        <div className="padding"></div>
        <Card className="card-with-spacing">
          <Card.Img variant="top" src={red} />
          <Card.Body>
            <Card.Title className="cardtitle">Wei Feng</Card.Title>
            <Card.Text className="carddesc">-HomePage Masterist</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>{" "}
        <Card className="card-with-spacing">
          <Card.Img variant="top" src={white} />
          <Card.Body>
            <Card.Title className="cardtitle">Roy</Card.Title>
            <Card.Text className="carddesc">-Navigation Bar Analyst</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>{" "}
      </div>

      <div>
        <button type="button" onClick={handlebackclick}>
          {" "}
          Back{" "}
        </button>
      </div>
    </div>
  );
};
