import React from "react";
import { css } from "@emotion/css";
import CloseButton from "./Button-Close-X.png";

export interface VideoDetailsProps {
  src: string;
  onClose: () => void;
}

const videoDetailsCss = css`
  width: 1920px;
  height: 1080px;
`;
const buttonDetailsCss = css`
  width: 100px;
  height: 100px;
  position: absolute;
  right: 48px;
  top: 48px;
  border: unset;
  background: transparent;
  cursor: pointer;
`;

export const VideoDetails = ({ src, onClose }: VideoDetailsProps) => {
  return (
    <>
      <video
        className={videoDetailsCss}
        autoPlay
        src={`./videos/${src}`}
        controls={false}
        onEnded={onClose}
      />
      <button className={buttonDetailsCss} onClick={() => onClose()}>
        <img src={CloseButton} height={48} width={48} alt="Close" />
      </button>
    </>
  );
};
