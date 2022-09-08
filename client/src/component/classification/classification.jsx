import React from "react";
import './classification.css'
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Classification = () => {
  return (
    <div className="forms">
    <Row col-xs={12} sm={6} md={4} className="g-4">

      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            alt="Universal"
            variant="top"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/BBFC_U_2019.svg/1920px-BBFC_U_2019.svg.png?20191114154511"
            maxwidth="18rem"
          />
          <Card.Body>
            <Card.Title>U</Card.Title>
            <Card.Text>
            A U film should be suitable for audiences aged four years and over, although it is impossible to predict what might upset any particular child.  
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            alt="Parental Guidance"
            variant="top"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/BBFC_PG_2019.svg/656px-BBFC_PG_2019.svg.png?20191114154509"
            maxwidth="18rem"
          />
          <Card.Body>
            <Card.Title>PG</Card.Title>
            <Card.Text>
            General viewing, but some scenes may be unsuitable for young children. A PG film should not unsettle a child aged around eight or older. Unaccompanied children of any age may watch, but parents are advised to consider whether the content may upset younger, or more sensitive, children.

            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            alt="12"
            variant="top"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/BBFC_12_2019.svg/656px-BBFC_12_2019.svg.png?20191114154506"
            maxwidth="18rem"
          />
          <Card.Body>
            <Card.Title>12</Card.Title>
            <Card.Text>
            Films classified 12A and video works classified 12 contain material that is not generally suitable for children aged under 12. No one younger than 12 may see a 12A film in a cinema unless accompanied by an adult. Adults planning to take a child under 12 to view a 12A film should consider whether the film is suitable for that child. To help them decide, we recommend that they check the Ratings Info for that film in advance. No one younger than 12 may rent or buy a 12 rated video work.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            alt="hello"
            variant="top"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/BBFC_12A_2019.svg/656px-BBFC_12A_2019.svg.png?20191114154506"
            maxwidth="18rem"
          />
          <Card.Body>
            <Card.Title>12A</Card.Title>
            <Card.Text >
                 Films classified 12A and video works classified 12 contain material that is not generally suitable for children aged under 12. No one younger than 12 may see a 12A film in a cinema unless accompanied by an adult. Adults planning to take a child under 12 to view a 12A film should consider whether the film is suitable for that child. To help them decide, we recommend that they check the Ratings Info for that film in advance. No one younger than 12 may rent or buy a 12 rated video work.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    
     <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            alt="15"
            variant="top"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/BBFC_15_2019.svg/656px-BBFC_15_2019.svg.png?20191114154506"
            maxwidth="18rem"
          />
          <Card.Body>
            <Card.Title>15</Card.Title>
            <Card.Text>
            No one younger than 15 may see a 15 film in a cinema. No one younger than 15 may rent or buy a 15 rated video work.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            alt="hello"
            variant="top"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/BBFC_18_2019.svg/656px-BBFC_18_2019.svg.png?20220823030749"
            maxwidth="18rem"
          />
          <Card.Body>
            <Card.Title>18</Card.Title>
            <Card.Text>
            No one younger than 18 may see an 18 film in a cinema. No one younger than 18 may rent or buy an 18 rated video work. Adults should be free to choose their own entertainment.

            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card  style={{ width: "18rem" }}>
          <Card.Img
            alt="R18"
            variant="top"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBFC_R18_2019.svg/656px-BBFC_R18_2019.svg.png?20191114154509"
            maxwidth="18rem"
          />
          <Card.Body>
            <Card.Title>R18</Card.Title>
            <Card.Text>
            The R18 category is a special and legally-restricted classification primarily for explicit works of consenting sex or strong fetish material involving adults. Films may only be shown to adults in specially licensed cinemas, and video works may be supplied to adults only in licensed sex shops. R18 video works may not be supplied by mail order.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
     
    </Row>
    </div>
  );
};
export default Classification;
