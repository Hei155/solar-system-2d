import { Application, extend } from '@pixi/react';
import { Container, Graphics, Sprite } from 'pixi.js';
import AstroField from '../AstroField';
import { FULL_HEIGHT, FULL_WIDTH } from '../../consts';
import SettingsPanel from '../SettingsPanel';

extend({
  Container,
  Graphics,
  Sprite,
});

export default function App() {
  return (
    <div className="app">
      <SettingsPanel />
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
