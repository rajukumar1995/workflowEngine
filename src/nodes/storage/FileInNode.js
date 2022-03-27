import { Handle } from "react-flow-renderer";
import { NodeWrapper, InputLabel } from "./styles";
const FileInNode = () => {
  return (
    <NodeWrapper>
      <InputLabel>File-In</InputLabel>
      <Handle
        type="target"
        position="top"
        id="b"
        style={{ left: "50%" }}
        onConnect={(params) => console.log("handle onConnect", params)}
      />
      <Handle
        type="source"
        position="bottom"
        id="b"
        style={{ left: "50%" }}
        onConnect={(params) => console.log("handle onConnect", params)}
      />
    </NodeWrapper>
  );
};

export default FileInNode;
