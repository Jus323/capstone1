import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import "../styles/LoginPage.css"; // same style as for Loginpage
import blue from "../img/blue.png";
import red from "../img/red.png";
import pink from "../img/pink.png";
import green from "../img/green.png";
import yellow from "../img/yellow.png";
import white from "../img/white.png";
import orange from "../img/orange.png";

export const AboutUsPage = () => {
  const navigate = useNavigate();

  const handlebackclick = () => {
    navigate("/home");
  };

  return (
    <div>
      <h1>Among Sridhar</h1>
      <div>
        <Card className="card-with-spacing">
          <Card.Img variant="top" src={green} />
          <Card.Body>
            <Card.Title>Jordan</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
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
            <Card.Title>Bhargav</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>{" "}
        <div className="padding"></div>
        <Card className="card-with-spacing">
          <Card.Img variant="top" src={orange} />
          <Card.Body>
            <Card.Title>Amirul</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>{" "}
        <div className="padding"></div>
        <Card className="card-with-spacing">
          <Card.Img variant="top" src={pink} />
          <Card.Body>
            <Card.Title>Justin</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>{" "}
      </div>

      <div className="padding"></div>

      <div>
        <Card className="card-with-spacing">
          <Card.Img variant="top" src={yellow} />
          <Card.Body>
            <Card.Title>Bei Ji</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>{" "}
        <div className="padding"></div>
        <Card className="card-with-spacing">
          <Card.Img variant="top" src={red} />
          <Card.Body>
            <Card.Title>Wei Feng</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>{" "}
        <Card className="card-with-spacing">
          <Card.Img variant="top" src={white} />
          <Card.Body>
            <Card.Title>Roy</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
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
