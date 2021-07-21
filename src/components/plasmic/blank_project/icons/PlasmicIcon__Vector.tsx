// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VectorIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VectorIcon(props: VectorIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 25 21"}
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
        d={
          "M23.917 1.01a11.353 11.353 0 01-3.271 1.594 4.666 4.666 0 00-8.188 3.125v1.042a11.104 11.104 0 01-9.375-4.719s-4.166 9.375 5.209 13.542A12.125 12.125 0 011 17.677c9.375 5.209 20.833 0 20.833-11.979 0-.29-.028-.58-.083-.865a8.042 8.042 0 002.167-3.823v0z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.042"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default VectorIcon;
/* prettier-ignore-end */
