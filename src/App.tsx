import React from 'react';
import './App.css';
import { Scene, Engine } from 'react-babylonjs';
import { DemoScene } from "./DemoScene";

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                  <Engine antialias={true} adaptToDeviceRatio={true} canvasId="demo-canvas" canvasStyle={{height: "100%", width: "100%"}}>
                      <Scene>
                          <DemoScene />
                      </Scene>
                  </Engine>
            </header>
        </div>
  );
}

export default App;
