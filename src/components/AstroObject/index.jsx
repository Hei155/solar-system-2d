const AstroObject = ({ color, size, position, strokeColor }) => {
  return (
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
