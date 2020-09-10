import React from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
const Info = () => {
  return (
    <div className="mt-3">
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image
              src="https://i.resimyukle.xyz/KBcRaI.png"
              style={{ opacity: "0.7" }}
              rounded
              width="171px"
              height="180px"
            />
          </Col>
          <Col xs={6} md={4}>
            <Image
              src="https://i.resimyukle.xyz/bbNQ6W.png"
              style={{ opacity: "0.7" }}
              roundedCircle
              width="161px"
              height="190px"
            />
          </Col>
          <Col xs={6} md={4}>
            <Image
              src="https://i.resimyukle.xyz/0x0UOM.jpeg"
              style={{ opacity: "0.7" }}
              rounded
              width="171px"
              height="180px"
              alt="Murat Yücedağ ile"
            />
            <p>with /Murat Yücedağ </p>
          </Col>
        </Row>
      </Container>
      <div>
        <p>
            Merhaba , ben Furkan Emre ALTINTAŞ . 2020 Yılında Sakarya Üniversitesi'nin Yönetim Bilişim Sistemleri bölümünden mezun oldum.Üniversite eğitimim boyunca kendimi geliştirebilmek için bireysel yazılım projelerinde yer aldım.
        </p>
        <p>
              Planladığım kariyer hedefi doğrultusunda ,4.Sınıfın 2. Döneminde EKAY Bilişim firmasında Staja başladım.3 Ay süren stajım süresince C# Programlama Dili ile projeler yaptım. 3 Aylık staj sonrasında Front-end teknolojileri ile tanışmaya karar verdim.
        </p>
        <p>
              4. Sınıfın Yaz Mevsiminde gönüllü staj yapmaya başladım . Yaklaşık 2 Ay süren staj sürecinde React Javascript ile tanışma fırsatım oldu.
        </p>
        <p>
             Tüm bu süreç içerisinde İnstagram üzerinde açtığım Kod.Yazilim sayfasıyla öğrencilerin isteklerine ve bazı firmaların ihtiyaçlarına göre Projeler geliştirdim.  
        </p>
      </div>
    </div>
  );
};

export default Info;
