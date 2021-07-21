// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DownwardTriangleIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DownwardTriangleIcon(props: DownwardTriangleIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 33 26"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M3.192 24L16.5 2.82 29.808 24H3.192z"}
        stroke={"currentColor"}
        strokeWidth={"3"}
      ></path>
    </svg>
  );
}

export default DownwardTriangleIcon;
/* prettier-ignore-end */
