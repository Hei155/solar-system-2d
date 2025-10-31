import { Application, extend } from '@pixi/react';
import { Container, Graphics, Sprite } from 'pixi.js';
import AstroField from '../AstroField';
import SettingsPanel from '../SettingsPanel';
import { setTargetPlanetId } from '../../store/planets/planetsSlice';
import { useAppDispatch } from '../../store/hooks';
import { useRef } from 'react';
import { FULL_HEIGHT, FULL_WIDTH } from '../../consts';

extend({
  Container,
  Graphics,
  Sprite,
});

export default function App() {
  const dispatch = useAppDispatch();

  const appRef = useRef(null);

  return (
    <div
      className="app"
      onPointerDown={() => dispatch(setTargetPlanetId(null))}
      ref={appRef}
    >
      <SettingsPanel appRef={appRef} />
      <Application
        width={FULL_WIDTH}
        height={FULL_HEIGHT}
        autoStart
        sharedTicker
      >
        <AstroField />
      </Application>
    </div>
  );
}
