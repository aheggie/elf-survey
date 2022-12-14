const randomScale = (variance: number, scalar: number) =>
  (Math.random() * variance + (1 - variance / 2)) * scalar;

export default randomScale;
