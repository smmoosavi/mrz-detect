declare namespace IJS {
  interface FromMaskOptions {}
  interface GetRoisOptions {
    label?: string;
    positive?: boolean;
    negative?: boolean;
    minSurface?: number;
    maxSurface?: number;
    minWidth?: number;
    maxWidth?: number;
    minHeight?: number;
    maxHeight?: number;
    minRatio?: number;
    maxRatio?: number;
  }
  interface Roi {
    surface: number;
    minX: number;
    maxX: number;
    minY: number;
    maxY: number;
    mask: IJS.Image;
    getMask(): IJS.Image;
  }
  interface RoiManager {
    fromMask(mask: IJS.Image, options?: FromMaskOptions): RoiManager;
    getRois(options?: GetRoisOptions): IJS.Roi[];
  }
}
