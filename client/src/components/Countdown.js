import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PropType from "prop-types";

export default function Countdown({ finish }) {
  const [counter, setCounter] = useState(timer());

  useEffect(() => {
    setCounter(timer(finish));
    if (new Date(finish) > new Date()) {
      setTimeout(() => setCounter(timer(finish)), 1000);
    } else {
      setCounter("00:00:00");
    }
  }, [counter, finish]);

  function timer(finish) {
    const time = new Date(
      new Date(finish).getTime() - new Date().getTime()
    ).toLocaleTimeString("de-DE", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZone: "UTC",
    });
    return time;
  }

  return (
    <CountDown>
      <h3>{counter.substr(0, 5)}</h3>
    </CountDown>
  );
}

Countdown.propTypes = {
  finish: PropType.string,
};

const CountDown = styled.div`
  background: white;
`;
