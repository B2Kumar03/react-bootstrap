import "./inde.model.css"
import * as React from 'react';
import { ReactSketchCanvas } from 'react-sketch-canvas';
import { jsPDF } from 'jspdf';

const styles = {
  border: '0.0625rem solid #9c9c9c',
  borderRadius: '0.25rem',
};

export const Canvas = () => {
  const canvasRef = React.useRef(null);

  const handleEraser = () => {
    if (canvasRef.current) {
      canvasRef.current.eraseMode(true);
    }
  };

  const handlePen = (color) => {
    if (canvasRef.current) {
      canvasRef.current.eraseMode(false);
      canvasRef.current.setStrokeColor(color);
    }
  };

  const handleExport = async () => {
    if (canvasRef.current) {
      const exportImage = await canvasRef.current.exportImage("png");
      const img = new Image();
      img.src = exportImage;
      img.onload = () => {
        const pdf = new jsPDF({
          orientation: img.width > img.height ? 'landscape' : 'portrait',
          unit: 'px',
          format: [img.width, img.height]
        });
        pdf.addImage(exportImage, 'PNG', 0, 0, img.width, img.height);
        pdf.save("canvas.pdf");
      };
    }
  };

  const handleShapeImport = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.src = e.target.result;
      img.onload = () => {
        const canvas = canvasRef.current.canvas;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height);
      };
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <div className="canvas-container">
        <ReactSketchCanvas
          ref={canvasRef}
          style={styles}
          width="600"
          height="400"
          strokeWidth={8}
          strokeColor="red"
        />
      </div>
      <div style={{ marginTop: '10px' }}>
        <button onClick={handleEraser}>Eraser</button>
        <button onClick={() => handlePen("red")}>Red</button>
        <button onClick={() => handlePen("blue")}>Blue</button>
        <button onClick={() => handlePen("green")}>Green</button>
        <button onClick={handleExport}>Export to PDF</button>
        <input type="file" onChange={handleShapeImport} accept="image/*" />
      </div>
    </div>
  );
};
