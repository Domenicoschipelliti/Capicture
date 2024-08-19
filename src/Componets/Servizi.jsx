import { useState } from "react";
import { Accordion, Card, Col, Container, Row } from "react-bootstrap";

const Servizi = () => {
  const [invisible, setInvisible] = useState(true);
  const [invisible2, setInvisible2] = useState(true);
  const [invisible3, setInvisible3] = useState(true);
  const [invisible4, setInvisible4] = useState(true);

  const visible = () => {
    setInvisible(!invisible);
  };

  const visible2 = () => {
    setInvisible2(!invisible2);
  };

  const visible3 = () => {
    setInvisible3(!invisible3);
  };
  const visible4 = () => {
    setInvisible4(!invisible4);
  };

  return (
    <>
      <h3 className="text-center text-light">Servizi offerti</h3>
      <Container className="ma responsive">
        <Row className="cambio margine-row">
          <Col className="margi">
            <Card className="immagine">
              <Card.Body>
                <Card.Title className="text-center text-light">
                  Creazione siti web
                </Card.Title>

                <div className="center">
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header
                        className="over pad"
                        onClick={visible2}
                        style={{
                          display: invisible2 ? "block" : "none",
                        }}
                      >
                        {invisible2 ? "More" : ""}
                      </Accordion.Header>
                      <Accordion.Body className="color">
                        <div className="text-color">
                          <b>
                            Creiamo siti web personalizzati con i linguaggi{" "}
                            <p>
                              <strong>Front-End</strong>:
                              HTML,CSS,Javascript(uso anche di
                              redux),Sass,Framework:React. Tool:Bootstrap e
                              Bootstrap Icons <strong>Back-End</strong>:<br />
                              Java,Python Framework:Spring Database:PostgreSQL
                              Uso di git/github.
                            </p>{" "}
                            per promuovere il tuo marchio e migliorare la tua
                            presenza online.
                          </b>
                          <b className="text">Commissioni:</b>
                          <p>
                            Datemi un design su un sito che vorreste o magari se
                            ne parla su cosa progettare o meno.
                          </p>
                          <b>Deploy</b> :
                          <p>
                            Solitamente preferisco fare agli altri queste cose
                            quindi magari vi faccio il sito con back e front e
                            vi mando tutto poi fate voi la pubblicazione.
                          </p>
                        </div>
                      </Accordion.Body>
                      <Accordion.Header
                        className="over pad"
                        onClick={visible2}
                        style={{ display: invisible2 ? "none" : "block" }}
                      >
                        {invisible2 ? "" : "Less"}
                      </Accordion.Header>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col className="margi">
            <Card className="immagine">
              <Card.Body>
                <Card.Title className="text-center text-light">
                  Post Produzione Foto e Video
                </Card.Title>

                <div className="center">
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header
                        className="over pad"
                        onClick={visible}
                        style={{
                          display: invisible ? "block" : "none",
                        }}
                      >
                        <div>{invisible ? "More" : ""}</div>
                      </Accordion.Header>
                      <Accordion.Body className="color text-color">
                        Perfezioniamo le tue foto e i tuoi video, garantendo un
                        risultato professionale e accattivante attraverso la
                        post-produzione.
                      </Accordion.Body>
                      <Accordion.Header
                        className="over pad"
                        onClick={visible}
                        style={{ display: invisible ? "none" : "block" }}
                      >
                        <div>{invisible ? "" : "Less"}</div>
                      </Accordion.Header>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="cambio">
          <Col className="margi">
            <Card className="immagine">
              <Card.Body>
                <Card.Title className="text-center text-light">
                  Musica Personalizzata
                </Card.Title>

                <div className="center">
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header
                        className="over pad"
                        onClick={visible3}
                        style={{
                          display: invisible3 ? "block" : "none",
                        }}
                      >
                        {invisible3 ? "More" : ""}
                      </Accordion.Header>
                      <Accordion.Body className="color text-color">
                        Creiamo musiche originali e su misura per enfatizzare
                        l&apos;unicità della tua marca e arricchire i tuoi
                        progetti multimediali.
                      </Accordion.Body>
                      <Accordion.Header
                        className="over pad"
                        onClick={visible3}
                        style={{ display: invisible3 ? "none" : "block" }}
                      >
                        {invisible3 ? "" : "Less"}
                      </Accordion.Header>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col className="margi">
            <Card className="immagine">
              <Card.Body>
                <Card.Title className="text-center text-light">
                  Social Media Marketing e contenuti audiovisivi
                </Card.Title>

                <div className="center">
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header
                        className="over pad"
                        onClick={visible4}
                        style={{
                          display: invisible4 ? "block" : "none",
                        }}
                      >
                        {invisible4 ? "More" : ""}
                      </Accordion.Header>
                      <Accordion.Body className="color text-color">
                        Gestiamo la presenza online del tuo marchio, aumentando
                        l&apos;engagement e raggiungendo il tuo pubblico target
                        attraverso strategie mirate sui social media.
                      </Accordion.Body>
                      <Accordion.Header
                        className="over pad"
                        onClick={visible4}
                        style={{ display: invisible4 ? "none" : "block" }}
                      >
                        {invisible4 ? "" : "Less"}
                      </Accordion.Header>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Servizi;
