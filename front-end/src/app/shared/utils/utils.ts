export function calcularLuminancia(r: number, g: number, b: number): number {
  let rsRGB = r / 255;
  let gsRGB = g / 255;
  let bsRGB = b / 255;

  let rLinear = (rsRGB <= 0.03928) ? rsRGB / 12.92 : Math.pow((rsRGB + 0.055) / 1.055, 2.4);
  let gLinear = (gsRGB <= 0.03928) ? gsRGB / 12.92 : Math.pow((gsRGB + 0.055) / 1.055, 2.4);
  let bLinear = (bsRGB <= 0.03928) ? bsRGB / 12.92 : Math.pow((bsRGB + 0.055) / 1.055, 2.4);

  return 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear;
}
export function hexParaRGB(hex: string): { r: number, g: number, b: number } {
  hex = hex.replace(/^#/, '');

  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  let bigint = parseInt(hex, 16);
  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;

  return { r, g, b };
}

export function calcularContraste(hexColor: string): string {
  let { r, g, b } = hexParaRGB(hexColor);
  let luminancia = calcularLuminancia(r, g, b);
  return luminancia > 0.5 ? 'var(--white)' : 'var(--black)';
}
