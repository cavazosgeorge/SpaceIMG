// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Facebook1IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Facebook1Icon(props: Facebook1IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 25 25"}
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
          "M18.75 2.083h-3.125a5.208 5.208 0 00-5.208 5.209v3.125H7.292v4.166h3.125v8.334h4.166v-8.334h3.125l1.042-4.166h-4.167V7.292a1.042 1.042 0 011.042-1.042h3.125V2.083z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.042"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Facebook1Icon;
/* prettier-ignore-end */
