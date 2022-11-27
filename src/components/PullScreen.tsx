import React from "react";
import { css } from "@emotion/css";

const pullScreenCss = css`
  width: 1920px;
  height: 1080px;
`;

type PullScreenProps = Pick<React.DOMAttributes<HTMLVideoElement>, "onClick">;

export const PullScreen = ({ onClick }: PullScreenProps) => {
  return (
    <video
      className={pullScreenCss}
      autoPlay
      muted
      loop
      src="./videos/loop_43015.ogv"
      onClick={onClick}
    />
  );
};
