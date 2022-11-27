import React from "react";
import { css } from "@emotion/css";

export interface ClickTarget {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  width: number;
  height: number;
  onClick: () => void;
}

const overlayCss = (isTransparent: boolean) => css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  opacity: ${isTransparent ? 0 : 1};
  z-index: 200;
`;

const addPixels = (pixels?: number) => pixels?.toString().concat("px");

const determineClickTargetStyle = (
  clickTarget: ClickTarget,
  isTransparent: boolean
) => css`
  position: absolute;
  top: ${addPixels(clickTarget.top)};
  bottom: ${addPixels(clickTarget.bottom)};
  left: ${addPixels(clickTarget.left)};
  right: ${addPixels(clickTarget.right)};
  height: ${addPixels(clickTarget.height)};
  width: ${addPixels(clickTarget.width)};
  opacity: ${isTransparent ? 0 : 0.5};
  background-color: white;
  border: 0;
  outline: 0;
  padding: 0;
  margin: 0;
  z-index: 200;
  cursor: pointer;
`;

export interface PageWithClickTargetsProps {
  clickTargets: ClickTarget[];
  //Whether to hide or show them, primarily for debug
  isTransparent?: boolean;
}

export const PageWithClickTargets = ({
  clickTargets,
  isTransparent = true,
}: PageWithClickTargetsProps) => {
  return (
    <div className={overlayCss(isTransparent)}>
      {clickTargets.map((clickTarget, index) => (
        <button
          key={index}
          className={determineClickTargetStyle(clickTarget, isTransparent)}
          onClick={clickTarget.onClick}
        ></button>
      ))}
    </div>
  );
};
