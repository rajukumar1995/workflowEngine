import React, { useCallback, useState, useContext } from "react";
import styled from "@emotion/styled";
import StoreContext from "../context/Store";
import Collapsible from "react-collapsible";
import localforage from "localforage";
import {
  getConnectedEdges,
  isEdge,
  getBezierPath,
  useStore,
  useZoomPanHelper
} from "react-flow-renderer";
import * as types from "../NodeTypes";
import { getDataFromDb, saveToDb } from "../globals/db";
export default () => {
  const { elements, setElements, reactFlowInstance, nodeClass } = useContext(
    StoreContext
  );
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };
  localforage.config({
    name: "LocalForage DB",
    storeName: "Anaks-Flow"
  });
  const { transform } = useZoomPanHelper();

  const onRestore = () => {
    const data = getDataFromDb(nodeClass);
    data
      .then((flow) => {
        setElements(flow.elements);
      })
      .catch((err) => {
        console.log(err);
        setElements([]);
      });
  };

  const saveFlow = useCallback(() => {
      console.log(reactFlowInstance)
    saveToDb(reactFlowInstance);
  }, [reactFlowInstance]);

  const [test, setTest] = useState("");
  const store = useStore();
  const { zoomIn, zoomOut, setCenter } = useZoomPanHelper();

  const getConnectedHandle = () => {
    const edgeArray = [];
    const nodeArray = [];
    elements.map((els) => {
      if (isEdge(els)) {
        return edgeArray.push(els);
      } else {
        return nodeArray.push(els);
      }
    });

    let connectedEdges = getConnectedEdges(nodeArray, edgeArray);
    console.log("connected edges", connectedEdges);
    connectedEdges.map((e) => {
      return elements.map((els) => {
        if (e.source === els.id) {
          return console.log(els.type);
        }
        if (e.target === els.id) {
          return console.log(els.type);
        }
        return "";
      });
    });
  };

  return (
    <aside>
      <p>This is for soap.</p>
      <button style={{ width: "100%" }} onClick={saveFlow}>
        Save Flow
      </button>
      <button
        style={{ width: "100%" }}
        onClick={() => console.log(JSON.stringify(elements))}
      >
        Log Elements
      </button>
      <button onClick={getConnectedHandle}>Get Connected Edges</button>
      {/* <button onClick={() => console.log(pRef.current.innerHTML)}>
        Paragraph
      </button> */}
      <button onClick={onRestore}>Get Flow</button>
      <br />
      <br />
      <Collapsible
        trigger="Common"
        triggerStyle={{
          color: "red",
          cursor: "pointer",
          marginBottom: "5px",
          userSelect: "none",
          display: "block"
        }}
        open={true}
        transitionTime={100}
      >
        <div
          className="dndnode common text-success"
          onDragStart={(event) => onDragStart(event, types.INPUT)}
          draggable
        >
          {types.INPUT}
        </div>
        <div
          className="dndnode common"
          onDragStart={(event) => onDragStart(event, types.NOTIFICATION)}
          draggable
        >
          {types.NOTIFICATION}
        </div>
        <div
          className="dndnode common"
          onDragStart={(event) => onDragStart(event, types.PARSER)}
          draggable
        >
          {types.PARSER}
        </div>
      </Collapsible>

      <Collapsible
        trigger="Functions"
        triggerStyle={{
          color: "red",
          cursor: "pointer",
          marginBottom: "5px",
          userSelect: "none",
          display: "block"
        }}
        open={true}
        transitionTime={100}
      >
        <div
          className="dndnode functions"
          onDragStart={(event) => onDragStart(event, types.COMBINE)}
          draggable
        >
          {types.COMBINE}
        </div>
        <div
          className="dndnode functions"
          onDragStart={(event) => onDragStart(event, types.SWITCH)}
          draggable
        >
          {types.SWITCH}
        </div>
        <div
          className="dndnode functions"
          onDragStart={(event) => onDragStart(event, types.DELAY)}
          draggable
        >
          {types.DELAY}
        </div>
      </Collapsible>

      <Collapsible
        trigger="Network"
        triggerStyle={{
          color: "red",
          cursor: "pointer",
          marginBottom: "5px",
          userSelect: "none",
          display: "block"
        }}
        open={true}
        transitionTime={100}
      >
        <div
          className="dndnode network"
          onDragStart={(event) => onDragStart(event, types.SERIAL_PORT)}
          draggable
        >
          {types.SERIAL_PORT}
        </div>
        <div
          className="dndnode network"
          onDragStart={(event) => onDragStart(event, types.ETHERNET)}
          draggable
        >
          {types.ETHERNET}
        </div>
      </Collapsible>

      <Collapsible
        trigger="Sequences"
        triggerStyle={{
          color: "red",
          cursor: "pointer",
          marginBottom: "5px",
          userSelect: "none",
          display: "block"
        }}
        open={true}
        transitionTime={100}
      >
        <div
          className="dndnode sequences"
          onDragStart={(event) => onDragStart(event, types.SPLIT)}
          draggable
        >
          {types.SPLIT}
        </div>
        <div
          className="dndnode sequences"
          onDragStart={(event) => onDragStart(event, types.JOIN)}
          draggable
        >
          {types.JOIN}
        </div>
        <div
          className="dndnode sequences"
          onDragStart={(event) => onDragStart(event, types.BATCH)}
          draggable
        >
          {types.BATCH}
        </div>
        <div
          className="dndnode sequences"
          onDragStart={(event) => onDragStart(event, types.SORT)}
          draggable
        >
          {types.SORT}
        </div>
      </Collapsible>

      <Collapsible
        trigger="Storage"
        triggerStyle={{
          color: "red",
          cursor: "pointer",
          marginBottom: "5px",
          userSelect: "none",
          display: "block"
        }}
        open={true}
        transitionTime={100}
      >
        <div
          className="dndnode storage"
          onDragStart={(event) => onDragStart(event, types.FILE_IN)}
          draggable
        >
          {types.FILE_IN}
        </div>
        <div
          className="dndnode storage"
          onDragStart={(event) => onDragStart(event, types.FILE_OUT)}
          draggable
        >
          {types.FILE_OUT}
        </div>
      </Collapsible>

      <Collapsible
        trigger="Special"
        triggerStyle={{
          color: "red",
          cursor: "pointer",
          marginBottom: "5px",
          userSelect: "none",
          display: "block"
        }}
        open={true}
        transitionTime={100}
      >
        <div
          className="dndnode special donut"
          onDragStart={(event) => onDragStart(event, types.DONUT)}
          draggable
        >
          {types.DONUT}
        </div>
        <div
          className="dndnode special latex"
          onDragStart={(event) => onDragStart(event, types.LATEX)}
          draggable
        >
          {types.LATEX}
        </div>
      </Collapsible>
    </aside>
  );
};
