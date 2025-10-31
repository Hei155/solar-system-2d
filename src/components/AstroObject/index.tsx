import { Planet } from '../../types';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  setTargetPlanetId,
  selectTargetPlanet,
} from '../../store/planets/planetsSlice';
import { FederatedPointerEvent } from 'pixi.js';
import { Graphics } from 'pixi.js';
import { GlowFilter } from 'pixi-filters';

const getGlowFilter = (color: string, isSun = false) => {
  return new GlowFilter({
    distance: isSun ? 45 : 10,
    outerStrength: isSun ? 6 : 4,
    color: color,
  });
};

const drawAstroObject = (
  graphics: Graphics,
  { color, size }: { color: string; size: number },
) => {
  graphics.clear();
  graphics.setFillStyle({ color });
  graphics.circle(0, 0, size);
  graphics.fill();
};

interface AstroObjectProps {
  planet: Planet;
}

const AstroObject = ({
  planet: { id, color, size, name, position },
}: AstroObjectProps) => {
  const dispatch = useAppDispatch();

  const targetPlanet = useAppSelector(selectTargetPlanet);

  const handlePointerDown = (e: FederatedPointerEvent) => {
    (e.nativeEvent as MouseEvent).stopPropagation();

    if (targetPlanet?.id === id) {
      dispatch(setTargetPlanetId(null));
      return;
    }

    dispatch(setTargetPlanetId(id));
  };

  const currentColor = targetPlanet?.id === id ? 'purple' : color;

  console.log(position.y);

  return (
    /* eslint-disable react/no-unknown-property */
    <pixiContainer
      position={position}
      filters={[getGlowFilter(currentColor, name === 'Sun')]}
    >
      <pixiGraphics
        interactive={true}
        eventMode="dynamic"
        onPointerDown={handlePointerDown}
        onPointerEnter={(e: FederatedPointerEvent) => (e.target.alpha = 0.7)}
        onPointerLeave={(e: FederatedPointerEvent) => (e.target.alpha = 1)}
        cursor="pointer"
        draw={(g) =>
          drawAstroObject(g, {
            color: currentColor,
            size,
          })
        }
      />
    </pixiContainer>
  );
};

export default AstroObject;
