/* eslint-disable no-mixed-operators */
/* eslint-disable no-bitwise */
export const shadeBlend = (p, c0, c1) => {
  const n = p < 0 ? p * -1 : p;
  const u = Math.round;
  const w = parseInt;
  if (c0.length > 7) {
    const f = c0.split(',');
    const t = (c1 || (p < 0 ? 'rgb(0,0,0)' : 'rgb(255,255,255)')).split(',');
    const R = w(f[0].slice(4));
    const G = w(f[1]); const B = w(f[2]);
    return `rgb(${u((w(t[0].slice(4)) - R) * n) + R},${u((w(t[1]) - G) * n) + G},${u((w(t[2]) - B) * n) + B})`;
  }
  const f = w(c0.slice(1), 16);
  const t = w((c1 || (p < 0 ? '#000000' : '#FFFFFF')).slice(1), 16);
  const R1 = f >> 16;
  const G1 = f >> 8 & 0x00FF;
  const B1 = f & 0x0000FF;
  return `#${(0x1000000 + (u(((t >> 16) - R1) * n) + R1) * 0x10000 + (u(((t >> 8 & 0x00FF) - G1) * n) + G1) * 0x100 + (u(((t & 0x0000FF) - B1) * n) + B1)).toString(16).slice(1)}`;
};

const getRGB = (color) => {
  if (color.match(/^rgb/)) {
    const [, red, green, blue] = color.match(
      /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/,
    );
    return { red, green, blue };
  }
  const result = +(`0x${color.slice(1).replace(color.length < 5 && /./g, '$&$&')}`);
  return {
    red: result >> 16,
    green: result >> 8 & 255,
    blue: result & 255,
  };
};

export const isDark = (color) => {
  const { red, green, blue } = getRGB(color);
  const hsp = Math.sqrt(0.299 * (red * red) + 0.587 * (green * green) + 0.114 * (blue * blue));
  return hsp < 127.5;
};
