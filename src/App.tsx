import {
  LivestreamPlayer,
  StreamVideo,
  StreamVideoClient,
  User,
} from "@stream-io/video-react-sdk";
import Viewer from "./pages/Viewer";

const apiKey = "g5wn55ux4t8e";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJAc3RyZWFtLWlvL2Rhc2hib2FyZCIsImlhdCI6MTcyMDU5NDEzOCwiZXhwIjoxNzIwNjgwNTM4LCJ1c2VyX2lkIjoiIWFub24iLCJyb2xlIjoidmlld2VyIiwiY2FsbF9jaWRzIjpbImxpdmVzdHJlYW06bGl2ZXN0cmVhbV84MzAyMDRjMS0zNTYwLTQ0OTQtOGM3Yi0yNzJkNzRiMTc4N2QiXX0.xj4UH0gz14Zh-l4suueGy_BRr1sTnQ1gAkCQ2upGvf8";
const callId = "livestream_830204c1-3560-4494-8c7b-272d74b1787d";

const user: User = { type: "anonymous" };
const client = new StreamVideoClient({ apiKey, user, token });

export default function App() {
  return (
    <StreamVideo client={client}>
      <LivestreamPlayer callType="livestream" callId={callId} />
      <hr />
      {/* <Viewer /> */}
    </StreamVideo>
  );
}