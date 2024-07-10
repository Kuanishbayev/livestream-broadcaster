import { LivestreamLayout, StreamCall, StreamVideo, StreamVideoClient, User } from "@stream-io/video-react-sdk";
import '@stream-io/video-react-sdk/dist/css/styles.css'

const apiKey = "g5wn55ux4t8e";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJAc3RyZWFtLWlvL2Rhc2hib2FyZCIsImlhdCI6MTcyMDU5NDEzOCwiZXhwIjoxNzIwNjgwNTM4LCJ1c2VyX2lkIjoiIWFub24iLCJyb2xlIjoidmlld2VyIiwiY2FsbF9jaWRzIjpbImxpdmVzdHJlYW06bGl2ZXN0cmVhbV84MzAyMDRjMS0zNTYwLTQ0OTQtOGM3Yi0yNzJkNzRiMTc4N2QiXX0.xj4UH0gz14Zh-l4suueGy_BRr1sTnQ1gAkCQ2upGvf8";
const userId = 'default_ab69abe6-5aae-405c-8744-0a82f34543ad'
const callId = "default_ab69abe6-5aae-405c-8744-0a82f34543ad";

const user: User = {
    id: userId,
    name: 'Oliver-Viewer',
    image: ''
}

const client = new StreamVideoClient({apiKey, user, token})
const call = client.call('livestream', callId)

call.camera.disable()
call.microphone.disable()

call.join()


const Viewer = () => {
  return (
    <StreamVideo client={client}>
        <StreamCall call={call}>
            <LivestreamLayout
                showParticipantCount={true}
                showDuration={true}
                showLiveBadge={true}
            />
        </StreamCall>
    </StreamVideo>
  )
}

export default Viewer