interface AstroObjectProps {
  color: string;
  size: number;
  position: { x: number; y: number };
  strokeColor: string;
}

const AstroObject = ({
  color,
  size,
  position,
  strokeColor,
}: AstroObjectProps) => {
  return (
    /* eslint-disable react/no-unknown-property */
    <pixiGraphics
      position={position}
      draw={(graphics) => {
        graphics.clear();
        graphics.setFillStyle({ color });
        graphics.circle(0, 0, size);
        graphics.stroke({
          width: 2,
          color: strokeColor,
        });
        graphics.fill();
      }}
    />
  );
};

export default AstroObject;
