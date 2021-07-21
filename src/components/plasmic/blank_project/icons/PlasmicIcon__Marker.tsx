// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MarkerIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MarkerIcon(props: MarkerIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 5 42"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M0 0a5 5 0 015 5v32a5 5 0 01-5 5V0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MarkerIcon;
/* prettier-ignore-end */
