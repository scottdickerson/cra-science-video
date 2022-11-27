import "./App.css";
import React, { useMemo, useState } from "react";
import { PullScreen } from "./components/PullScreen";
import {
  ClickTarget,
  PageWithClickTargets,
} from "./components/PageWithClickTargets/PageWithClickTargets";
import { VideoDetails } from "./components/VideoDetails";

function App() {
  const [currentVideo, setCurrentVideo] = useState<string | undefined>();
  const videos: ClickTarget[] = useMemo(
    () => [
      {
        height: 525,
        width: 655,
        onClick: () => setCurrentVideo("pointsource_430_720p.ogv"),
      },
      {
        height: 322,
        width: 572,
        right: 46,
        top: 41,
        onClick: () => setCurrentVideo("Algae_43015.ogv"),
      },
      {
        height: 322,
        width: 572,
        right: 46,
        bottom: 380,
        onClick: () => setCurrentVideo("poop_1.ogv"),
      },
      {
        height: 322,
        width: 572,
        right: 46,
        bottom: 41,
        onClick: () => setCurrentVideo("sedimentAll_43015.ogv"),
      },
    ],
    []
  );
  return (
    <>
      {!currentVideo ? (
        <>
          <PageWithClickTargets clickTargets={videos} />
          <PullScreen />
        </>
      ) : (
        <VideoDetails
          src={currentVideo}
          onClose={() => setCurrentVideo(undefined)}
        />
      )}
    </>
  );
}

export default App;
