import { default as Image_2 } from 'image-js';

export declare function getMrz(
  image: Image_2,
  options?: MrzOptions,
): GetMrzResult;

export declare function getMrz(
  image: Image_2,
  options?: MrzOptions<true>,
): GetMrzDebugResult;

export declare function getMrz(
  image: Image_2,
  options?: MrzOptions<boolean>,
): GetMrzResult | GetMrzDebugResult;

export declare interface GetMrzDebugResult {
  resized?: Image_2;
  grey?: Image_2;
  gaussian?: Image_2;
  blackhat?: Image_2;
  scharr?: Image_2;
  close?: Image_2;
  mask?: Image_2;
  close2?: Image_2;
  erode?: Image_2;
  painted?: Image_2;
  crop: Image_2;
}

export declare interface GetMrzResult {
  crop: Image_2;
}

export declare interface MrzOptions<Debug = false> {
  debug?: Debug;
  out?: Partial<GetMrzDebugResult>;
}

export {};
