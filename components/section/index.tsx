import { useState } from "react";
import Image from "next/image";
import {
  SectionContent,
  SectionImage,
  SectionTitle,
  SectionButton,
  SectionPlay,
  SectionDescription,
} from "./styles";
import { Modal } from "./../modal";

interface Section {
  title: string;
  image: string;
  link: string;
  label: string;
  theme: string;
}

const SectionItem = ({ ...props }) => {
  const [statusModal, setStatusModal] = useState(false);
  const handleModal = () => {
    setStatusModal(true);
  };

  const handleModalClose = () => {
    setStatusModal(false);
  };

  const handleLink = (event: string): void => {
    window.open(event, "_blank");
  };

  return (
    <SectionContent theme={props.movie.theme}>
      <SectionImage>
        <Image
          src={props.movie.image}
          width={430}
          height={613}
          layout="responsive"
          alt={props.movie.title}
        />
      </SectionImage>
      <SectionDescription>
        <SectionTitle>{props.movie.title} </SectionTitle>
        <SectionPlay
          onClick={
            props.movie.label === "ver trailer"
              ? handleModal
              : () => handleLink(props.movie.link)
          }
        >
          {props.movie.label === "ver trailer" && (
            <Image
              src="/play.svg"
              width={80}
              height={80}
              alt={props.movie.title}
            />
          )}
          <SectionButton theme={props.movie.theme}>
            {props.movie.label}
          </SectionButton>
        </SectionPlay>
      </SectionDescription>
      {statusModal && (
        <Modal
          status={statusModal}
          handleModalClose={handleModalClose}
          link={props.movie.link}
        />
      )}
    </SectionContent>
  );
};

export const Section = ({ ...props }) => {
  return (
    <>
      {props.movies.map((movie: Section, index: React.Key) => (
        <SectionItem movie={movie} key={`${index}-${movie.label}`} />
      ))}
    </>
  );
};
