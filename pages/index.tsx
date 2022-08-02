import { FlexBox, Link } from "@animus-ui/components";
import type { NextPage } from "next";

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
  return (
    <FlexBox height="100vh" center>
      <Link as="a" href="/#" p={12} onClick={testConfirm} fontSize={22}>
        Create confirm
      </Link>
    </FlexBox>
  );
};

export default Home;
