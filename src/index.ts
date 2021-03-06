import "@webcomponents/webcomponentsjs/webcomponents-bundle";
import LiveButton from "./Button";
import LiveSlider from "./Slider";
import LiveDial from "./Dial";
import LiveToggle from "./Toggle";
import LiveText from "./Text";
import LiveNumbox from "./Numbox";
import LiveTab from "./Tab";
import LiveMeter from "./Meter";

window.customElements.define("live-button", LiveButton);
window.customElements.define("live-toggle", LiveToggle);
window.customElements.define("live-slider", LiveSlider);
window.customElements.define("live-dial", LiveDial);
window.customElements.define("live-text", LiveText);
window.customElements.define("live-numbox", LiveNumbox);
window.customElements.define("live-tab", LiveTab);
window.customElements.define("live-meter", LiveMeter);
