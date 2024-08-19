import { Card, Col, Container, Row } from "react-bootstrap";

const Home = () => {
  // const [invisible, setInvisible] = useState(true);
  // const [invisible2, setInvisible2] = useState(true);
  // const [invisible3, setInvisible3] = useState(true);
  // const [invisible4, setInvisible4] = useState(true);

  // const visible = () => {
  //   setInvisible(!invisible);
  // };

  // const visible2 = () => {
  //   setInvisible2(!invisible2);
  // };

  // const visible3 = () => {
  //   setInvisible3(!invisible3);
  // };
  // const visible4 = () => {
  //   setInvisible4(!invisible4);
  // };
  return (
    <Container>
      <Row>
        <Col className="d-flex">
          <p className="text-light text-center font">
            Buongiorno <br /> siamo Capicture Vision e siamo un gruppo di
            ragazzi specializzati in montaggio video, creatori di siti e grafici
            siamo anche disponibili anche alla crescita esponenziale sui social
            inoltre siamo disponibili a personalizzare i nostri servizi in base
            alle vostre esigenze. Saremo felici di fissare un incontro (anche
            telematico) se vorreste discutere ulteriormente le possibilità di
            collaborazione e di illustrare al meglio la nostra offerta.
          </p>
        </Col>
      </Row>
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
                  <div className="text-color text-center">
                    <p>Siti personalizzati sia dal back che dal fron end</p>
                  </div>
                  {/* <Accordion>
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
                          <b>Creiamo siti web personalizzati</b>
                          <p>
                            sia dal back che dal front end, ovviamente se ne
                            parla di che tipo di sito si vuole fare e si trova
                            un accordo.
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
                  </Accordion> */}
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
                  <div className="text-color text-center">
                    <p>
                      {" "}
                      Perfezioniamo le tue foto e i tuoi video, garantendo un
                      risultato professionale e accattivante attraverso la
                      post-produzione.
                    </p>
                  </div>
                  {/* <Accordion>
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
                       
                      </Accordion.Body>
                      <Accordion.Header
                        className="over pad"
                        onClick={visible}
                        style={{ display: invisible ? "none" : "block" }}
                      >
                        <div>{invisible ? "" : "Less"}</div>
                      </Accordion.Header>
                    </Accordion.Item>
                  </Accordion> */}
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col className="margi">
            <Card className="immagine">
              <Card.Body>
                <Card.Title className="text-center text-light">
                  Musica Personalizzata
                </Card.Title>

                <div className="center">
                  <div className="text-color text-center">
                    <p>
                      {" "}
                      Creiamo musiche originali e su misura per enfatizzare
                      l&apos;unicità della tua marca e arricchire i tuoi
                      progetti multimediali.
                    </p>
                  </div>
                  {/* <Accordion>
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
                      
                      </Accordion.Body>
                      <Accordion.Header
                        className="over pad"
                        onClick={visible3}
                        style={{ display: invisible3 ? "none" : "block" }}
                      >
                        {invisible3 ? "" : "Less"}
                      </Accordion.Header>
                    </Accordion.Item>
                  </Accordion> */}
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col className="margi">
            <Card className="immagine">
              <Card.Body>
                <Card.Title className="text-center text-light">
                  Social Media Marketing/contenuti audiovisivi
                </Card.Title>

                <div className="center">
                  <div className="text-color text-center">
                    <p>
                      {" "}
                      Gestiamo la presenza online del tuo marchio, aumentando
                      l&apos;engagement e raggiungendo il tuo pubblico target
                      attraverso strategie mirate sui social media.
                    </p>
                  </div>
                  {/* <Accordion>
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
                       
                      </Accordion.Body>
                      <Accordion.Header
                        className="over pad"
                        onClick={visible4}
                        style={{ display: invisible4 ? "none" : "block" }}
                      >
                        {invisible4 ? "" : "Less"}
                      </Accordion.Header>
                    </Accordion.Item>
                  </Accordion> */}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
export default Home;
