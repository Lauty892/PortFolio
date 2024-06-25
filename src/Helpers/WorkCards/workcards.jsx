import "./workcards.css";
import { useState } from "react";
import { RxExternalLink } from "react-icons/rx";
import { AiOutlineGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
import CustomModal from "../../Components/CUSTOMMODAL/customModal";
import DetailProject from "../../Components/DETAIL/detail";
//IMAGENES
import imagen5 from "../../Extras/glamourglow.png";
import eltiempo1 from "../../Extras/mobile.png"
import eltiempo2 from "../../Extras/eltiempo.png"
import eltiempo3 from "../../Extras/eltiempo2.png"

const WorkCards = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [projectDetail, setProjectDetail] = useState({});

  const works = [
    {
      id: 1,
      name: "Glamour Glow - Stylish Web Application",
      img: [imagen5],
      description:
        "This project has been a true collaboration where we've merged our skills and creativity to create an exceptional online experience. From the visually stunning design to the seamless functionality, every detail has been carefully crafted to deliver the best in technology and style.",
      link: "https://glamour-glow.vercel.app/",
      git: "https://github.com/EderFornero/Glamour-Glow",
    },
    {
      id: 2,
      name: "El tiempo - Admin Administration",
      img: [eltiempo2, eltiempo3, eltiempo1],
      description:
        "This project arose from a client's need to simultaneously publish their news on social media and their website. I developed the admin frontend using Tailwind, Next.js, React, and TypeScript.",
    }
  ];

  const openModal = (project) => {
    setProjectDetail(project);
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <div className="cards-container">
      {works.map((data) => (
        <div className="flip-card" data-aos="zoom-in" key={data.id}>
          <div className="flip-card-inner" onClick={() => openModal(data)}>
            <div className="flip-card-front">
              <p className="title">{data.name}</p>
              <img className="card-image" src={data.img[0]} alt={`${data.name}`} />
            </div>
            <div className="flip-card-back">
              <p className="description">{data.description}</p>
              <div className="card-links">
                {data.link && (
                  <Link to={data.link} target="_blank" rel="noopener noreferrer">
                    <RxExternalLink />
                    <p className="link-text">Demo</p>
                  </Link>
                )}
                {data.git && (
                  <Link to={data.git} target="_blank" rel="noopener noreferrer">
                    <AiOutlineGithub />
                    <p className="link-text">Code</p>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
      <CustomModal isOpen={isOpenModal} closeModal={closeModal} title="Project Details">
        <DetailProject project={projectDetail} closeModal={closeModal} />
      </CustomModal>
    </div>
  );
};

export default WorkCards;