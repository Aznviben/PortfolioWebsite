import { useRef, useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import star from './assets/Star.png';
import About from './Components/Pages/About/About';
import Work from './Components/Pages/Work/Work';
import Art from './Components/Pages/Art/Art';
import smile from './assets/SmileFace.png';
function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  const startDrawing = (e: React.MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.strokeStyle = 'black'; // Drawing color
    ctx.lineWidth = 2; // Line thickness
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <>
      <div className="canvas-background">
        <canvas
          ref={canvasRef}
          width={window.innerWidth} // Dynamically set the canvas width
          height={window.innerHeight} // Dynamically set the canvas height
          className="drawing-canvas"
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
        ></canvas>
      </div>
      
        <NavBar />
        <img src={star} alt="Corner Decoration" className="corner-image" />
        <div>
          <h1>Welcome to My Notebook</h1>
          <p>The Collection of thoughts and desires of Benjamin Dinal</p>
        </div>
        <About />
        <Work />
        <Art />
        <div className="content"><button onClick={clearCanvas}>Clear Drawing</button>
      </div>
      <img src={smile} alt="Smiley Face" className="smiley-face" />
    </>
  );
}

export default App;
