import { FlexBox, Link, Text } from "@animus-ui/components";
import type { NextPage } from "next";
import { useEffect, useRef } from "react";

const data = {
  date: "dawn of time",
  account: "Infinity",
  data: [{}, {}],
};

const testConfirm = () =>
  fetch("/api/generate/confirm", {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((response) => response.blob())
    .then((blob) => {
      var url = window.URL.createObjectURL(blob);
      var a = document.createElement("a");
      a.href = url;
      a.download = `confirm-${data.date}-${data.account}.pdf`;
      document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
      a.click();
      a.remove(); //afterwards we remove the element again
    });

const Home: NextPage = () => {
  const iframeRef = useRef<HTMLIFrameElement>();

  useEffect(() => {
    const getDemoUrl = () =>
      fetch("/api/generate/demo", {
        method: "POST",
        body: JSON.stringify({}),
      })
        .then((response) => response.blob())
        .then((blob) => {
          iframeRef.current?.setAttribute(
            "src",
            window.URL.createObjectURL(blob)
          );
        });
    getDemoUrl();
  }, [iframeRef]);

  return (
    <FlexBox height="100vh" center column>
      <Text as="h3">Preview</Text>
      <iframe style={{ height: "100%", width: "100%" }} ref={iframeRef} />
    </FlexBox>
  );
};

export default Home;
