import { useState } from 'react';
import LandingScreen from './screens/LandingScreen';
import SignupScreen from './screens/SignupScreen';
import SetupScreen from './screens/SetupScreen';
import MapScreen from './screens/MapScreen';
import DetailScreen from './screens/DetailScreen';
import OutputsScreen from './screens/OutputsScreen';
import CompanionScreen from './screens/CompanionScreen';

const DEFAULT_PROGRESS = {
  empathise: 'done',
  define: 'active',
  ideate: 'locked',
  prototype: 'locked',
  test: 'locked',
};

export default function App() {
  const [screen, setScreen] = useState('landing');
  const [stageKey, setStageKey] = useState('define');
  const [projectName, setProjectName] = useState('Fintech App Redesign');
  const [progress] = useState(DEFAULT_PROGRESS);

  const navigate = (target, key) => {
    if (key) setStageKey(key);
    setScreen(target);
  };

  const handleSetupComplete = (form) => {
    if (form.name) setProjectName(form.name);
    setScreen('map');
  };

  const props = { onNavigate: navigate, projectName, onRename: setProjectName };

  switch (screen) {
    case 'landing':   return <LandingScreen {...props} />;
    case 'signup':    return <SignupScreen {...props} />;
    case 'setup':     return <SetupScreen {...props} onSetupComplete={handleSetupComplete} />;
    case 'map':       return <MapScreen {...props} progress={progress} />;
    case 'detail':    return <DetailScreen {...props} stageKey={stageKey} density="comfortable" progress={progress} />;
    case 'outputs':   return <OutputsScreen {...props} />;
    case 'companion': return <CompanionScreen {...props} stageKey={stageKey} />;
    default:          return <LandingScreen {...props} />;
  }
}
