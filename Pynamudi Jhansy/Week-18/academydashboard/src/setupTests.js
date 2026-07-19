global.TextEncoder = require("util").TextEncoder;
global.TextDecoder = require("util").TextDecoder;


import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";


Enzyme.configure({
  adapter: new Adapter()
});