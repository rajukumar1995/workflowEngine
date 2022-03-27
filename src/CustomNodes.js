import InputNode from "./nodes/common/InputNode";
import NotificationNode from "./nodes/common/NotificationNode";
import ParserNode from "./nodes/common/ParserNode";
import CombineNode from "./nodes/functions/CombineNode";
import SwitchNode from "./nodes/functions/SwitchNode";
import DelayNode from "./nodes/functions/DelayNode";
import SerialPortNode from "./nodes/network/SerialPortNode";
import EthernetNode from "./nodes/network/EthernetNode";
import SplitNode from "./nodes/sequences/SplitNode";
import JoinNode from "./nodes/sequences/JoinNode";
import BatchNode from "./nodes/sequences/BatchNode";
import SortNode from "./nodes/sequences/SortNode";
import FileInNode from "./nodes/storage/FileInNode";
import FileOutNode from "./nodes/storage/FileOutNode";
import DonutNode from "./nodes/special/DonutNode";
import LatexNode from "./nodes/special/LatexNode";

const customNodes = {
  "Set Variables": InputNode,
  Notification: NotificationNode,
  Parser: ParserNode,
  Combine: CombineNode,
  Switch: SwitchNode,
  Delay: DelayNode,
  SerialPort: SerialPortNode,
  Ethernet: EthernetNode,
  Split: SplitNode,
  Join: JoinNode,
  Batch: BatchNode,
  Sort: SortNode,
  FileIn: FileInNode,
  FileOut: FileOutNode,
  Donut: DonutNode,
  Latex: LatexNode
};

export default customNodes;
