export const SIZES = ["small", "medium", "large"];

export function getSafeSize(size) {
  return SIZES.includes(size) ? size : "medium";
}

export function getLoaderStyle(color) {
  return {
    "--merix-loader-color": color,
  };
}
