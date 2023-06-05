import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardText,
  CardTitle,
} from "reactstrap";
export const Mid = () => {
  return (
    <Container>
      <Row>
        <Col sm="12">
          <Card body>
            {/* <CardTitle tag="h5">Special Title Treatment</CardTitle> */}
            <h1>Hello Vinay </h1>

            <CardTitle>
              <div>
                <span>
                  <i class="fa-sharp fa-solid fa-magnifying-glass-plus"></i>{" "}
                  slack technologies
                </span>
                <span style={{ marginLeft: "180px" }}>
                  {" "}
                  <i class="fa-sharp fa-solid fa-location-dot"></i>Any Location
                </span>
                <Button style={{ marginLeft: "30px", borderRadius: "20px" }}>
                  find jobs
                </Button>
              </div>
            </CardTitle>
            <Button>15 jobs found</Button>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col sm="6">
          <Card body>
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <Button>Go somewhere</Button>
          </Card>
        </Col>
        <Col sm="6">
          <Card body>
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <Button>Go somewhere</Button>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col sm="6">
          <Card body>
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <Button>Go somewhere</Button>
          </Card>
        </Col>
        <Col sm="6">
          <Card body>
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <Button>Go somewhere</Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
