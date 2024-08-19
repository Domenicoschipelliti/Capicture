import { Card, Col, Container, Row } from "react-bootstrap";

const Home = () => {
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
