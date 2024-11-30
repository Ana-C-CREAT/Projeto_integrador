import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import styles from "../static/css/AboutPage.module.css";
import pousada from "../static/assets/pousada_4.svg";
import pousada_2 from "../static/assets/pousada_2.svg";
import pousada_3 from "../static/assets/pousada_3.svg";
import atividade_1 from "../static/assets/atividade_1.svg";
import atividade_2 from "../static/assets/atividade_2.svg";
import atividade_3 from "../static/assets/atividade_3.svg";
import atividade_4 from "../static/assets/atividade_4.svg";
import atividade_5 from "../static/assets/atividade_5.svg";
import atividade_6 from "../static/assets/atividade_6.svg";
import atividade_7 from "../static/assets/atividade_7.svg";
import atividade_8 from "../static/assets/atividade_8.svg";
import atividade_9 from "../static/assets/atividade_9.svg";

const AboutPage = () => {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.aboutContainer}>
        <h2 className={styles.aboutTitle}>Sobre a Pousada Quinta do Ypuã</h2>
        <p className={styles.aboutDescription}>
          A Pousada Quinta do Ypuã oferece aos seus clientes um recanto de aconchego e lazer, em um ambiente rústico e agradável.
          Ideal para quem gosta de fugir da rotina e procura um local de paz para descansar e curtir a natureza.
        </p>

        <h3 className={styles.sectionTitle}>Depoimento de Heitor, o Anfitrião</h3>
        <blockquote className={styles.testimonial}>
          "O Ypuã tem tudo a ver com a natureza, dá para sentir a energia do lugar. Eu me preocupo se você vai comer bem, dormir bem e se vai se sentir em casa.
          Vou te mostrar onde encontrar os melhores frutos do mar, onde curtir a melhor praia e as melhores ondas.
          Mas se você não quiser fazer nada, eu também conheço o melhor lugar."
          <span className={styles.author}>— Heitor, Anfitrião da pousada</span>
        </blockquote>

        {/* Primeiro Carrossel */}
        <h3 className={styles.sectionTitle}>Explore a Pousada</h3>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 5000 }}
          className={styles.carousel}
        >
          <SwiperSlide>
            <img
              src={pousada}
              alt="Vista geral da pousada"
              className={styles.carouselImage}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={pousada_2}
              alt="Quarto da pousada"
              className={styles.carouselImage}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={pousada_3}
              alt="Área de lazer"
              className={styles.carouselImage}
            />
          </SwiperSlide>
        </Swiper>

        {/* Segundo Carrossel */}
        <h3 className={styles.sectionTitle}>Descubra as Atividades</h3>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={5}
          slidesPerView={2}
          navigation={true}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 3000 }}
          className={styles.miniCarousel}
        >
          <SwiperSlide>
            <img
              src={atividade_1}
              alt="Caminhada ecológica"
              className={styles.miniCarouselImage}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={atividade_2}
              alt="Piscina com vista para as montanhas"
              className={styles.miniCarouselImage}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={atividade_3}
              alt="Restaurante da pousada"
              className={styles.miniCarouselImage}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={atividade_4}
              alt="Passeio de bicicleta"
              className={styles.miniCarouselImage}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={atividade_5}
              alt="Pesca esportiva"
              className={styles.miniCarouselImage}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={atividade_6}
              alt="Passeio a cavalo"
              className={styles.miniCarouselImage}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={atividade_7}
              alt="Yoga ao ar livre"
              className={styles.miniCarouselImage}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={atividade_8}
              alt="Observação de aves"
              className={styles.miniCarouselImage}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={atividade_9}
              alt="Trilha na mata"
              className={styles.miniCarouselImage}
            />
          </SwiperSlide>
        </Swiper>

        <h3 className={styles.sectionTitle}>Missão da Pousada</h3>
        <p className={styles.sectionDescription}>
          Proporcionar aos nossos hóspedes momentos inesquecíveis de descanso e lazer, com conforto, tranquilidade e contato direto com a natureza.
          Buscamos criar um ambiente acolhedor e familiar, onde cada visita se sinta em casa, seja para uma estadia tranquila ou para explorar as belezas da região.
        </p>

        <h3 className={styles.sectionTitle}>Visite-nos e Viva a Experiência</h3>
        <p className={styles.sectionDescription}>
          Seja para desfrutar da paz do campo ou para explorar as belezas naturais da região, a Pousada Quinta do Ypuã é o lugar perfeito para relaxar,
          se conectar com a natureza e aproveitar ao máximo a sua estadia. Com a orientação de Heitor, você poderá descobrir os melhores locais e
          aproveitar o melhor que a região tem a oferecer.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
