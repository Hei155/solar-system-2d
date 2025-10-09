import { Planet } from '../../types';
import { useAppDispatch } from '../../store/hooks';
import { setTargetPlanetId } from '../../store/planets/planetsSlice';

interface AstroObjectProps {
  planet: Planet;
}

const AstroObject = ({ planet }: AstroObjectProps) => {
  const { position, size, strokeColor, color } = planet;

  const dispatch = useAppDispatch();

  return (
    /* eslint-disable react/no-unknown-property */
    <pixiGraphics
      position={position}
      interactive={true}
      eventMode="dynamic"
      onPointerDown={() => {
        dispatch(setTargetPlanetId(planet.id));
      }}
      onMouseEnter={() => {
        console.log('dsfsdf');
      }}
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
