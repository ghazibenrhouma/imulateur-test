import React from "react";
import "./style.css";
import { fabric } from "fabric";
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";

const Porte = () => {
  // const { editor, onReady } = useFabricJSEditor()
  // const onAddCircle = () => {
  //   editor?.addCircle()
  // }
  // const onAddRectangle = () => {
  //   editor?.addRectangle()
  // }

  const { selectedObjects, editor, onReady } = useFabricJSEditor();
  fabric.Image.fromURL(
    "https://simulateur.simuleo.com/api/data/volma-20220107/porte/0m1g5f1c13~1~e1p198c46b1c46v34p4/image.png?uuid=5d530ad8-8bc5-11e6-b7b4-000c29e2b856",
    function (oImg) {
      editor.canvas.add(oImg);
      oImg.scaleToHeight(100);
      oImg.scaleToWidth(100);
    }
  );
  // fabric.Image.fromURL(
  //   "https://simulateur.simuleo.com/api/data/fenetre-20180801/porte/0m1g1f1c1~1~e1p1c1b1c1v5p0/image.png?uuid=5d530ad8-8bc5-11e6-b7b4-000c29e2b856",
  //   function (oImg1) {
  //     editor.canvas.add(oImg1);
  //     oImg1.scaleToHeight(100);
  //     oImg1.scaleToWidth(100);
  //   }
  // );

  return (
    
    <div className="App">
      {/* <button onClick={onAddCircle}>Add circle</button>
    <button onClick={onAddRectangle}>Add Rectangle</button> */}
      <FabricJSCanvas className="sample-canvas" onReady={onReady} />
    </div>
  );
};

export default Porte;
