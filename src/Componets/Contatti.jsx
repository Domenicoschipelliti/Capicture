import { Col, Container, Modal, Row } from "react-bootstrap";

const Contatti = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div
            className="modal show"
            style={{ display: "block", position: "initial" }}
          >
            <Modal.Dialog className="mar">
              <Modal.Header className="centrare">
                <Modal.Title className="text-light">
                  Potete Contattarci
                </Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <div className="contatti">
                  <div>
                    <img
                      src="/assets/mail.png"
                      alt="icona mail"
                      className="grandezza"
                    />
                  </div>

                  <p className="paragrafoC text-light">
                    capicturevision@gmail.com
                  </p>
                </div>
              </Modal.Body>
            </Modal.Dialog>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Contatti;
