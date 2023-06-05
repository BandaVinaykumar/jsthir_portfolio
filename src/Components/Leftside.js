import React from "react";
import {
  Card,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
  CardText,
  Container,
} from "reactstrap";

export const Leftside = () => {
  return (
    <Container>
      <div>
        <Card
          style={{
            width: "15rem",
          }}
        >
          <CardBody></CardBody>
          <img
            alt="Card cap"
            src="https://picsum.photos/318/180"
            width="100%"
            style={{ width: 200, height: 200, borderRadius: 200 / 2 }}
          />
          <CardBody>
            <CardText>
              <h4>Vinay </h4>
              <p>College Student</p>
            </CardText>
          </CardBody>
        </Card>

        <Card
          style={{
            width: "15rem",
          }}
        >
          <CardBody>
            <CardTitle tag="h5">
              {" "}
              <i class="fa-brands fa-html5"></i> Card title
            </CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              <i class="fa-solid fa-circle-dot"></i>
              Card subtitle
            </CardSubtitle>
          </CardBody>

          <CardBody>
            <CardText></CardText>
            <CardLink href="#">Card Link</CardLink>
            <CardLink href="#">Another Link</CardLink>
          </CardBody>
        </Card>

        <Card
          style={{
            width: "15rem",
          }}
        >
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Card subtitle
            </CardSubtitle>
          </CardBody>

          <CardBody>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card‘s content.
            </CardText>
            <CardLink href="#">Card Link</CardLink>
            <CardLink href="#">Another Link</CardLink>
          </CardBody>
        </Card>
      </div>
    </Container>
  );
};
