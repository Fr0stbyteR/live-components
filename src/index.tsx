import * as React from "react";
import * as ReactDOM from "react-dom";
import LiveButton from "./Button";
import LiveSlider from "./Slider";
import LiveDial from "./Dial";
import LiveToggle from "./Toggle";
import LiveText from "./Text";
import LiveNumbox from "./Numbox";
import LiveTab from "./Tab";
import LiveMeter from "./Meter";

ReactDOM.render(<>
    <LiveButton width={200} height={200}></LiveButton>
    <LiveToggle width={200} height={200}></LiveToggle>
    <LiveSlider width={200} height={45} orientation="horizontal" steps={10}></LiveSlider>
    <LiveSlider width={200} height={45} orientation="horizontal" mmin={-70} mmax={6}></LiveSlider>
    <LiveDial width={90} height={90} appearance="panel"></LiveDial>
    <LiveText></LiveText>
    <LiveNumbox></LiveNumbox>
    <LiveTab></LiveTab>
    <LiveMeter orientation="horizontal" mode="decibel" value={3}></LiveMeter>
    <LiveMeter orientation="horizontal" mode="decibel" value={-35}></LiveMeter>
    <LiveMeter orientation="horizontal" value={1.25}></LiveMeter>
    <LiveMeter orientation="horizontal" value={0.25}></LiveMeter>
    <LiveMeter width={15} height={120} mode="decibel" value={3}></LiveMeter>
    <LiveMeter width={15} height={120} mode="decibel" value={-6}></LiveMeter>
    <LiveMeter width={15} height={120} value={1.25}></LiveMeter>
    <LiveMeter width={15} height={120} value={0.25}></LiveMeter>
</>, document.getElementById("root"));