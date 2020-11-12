import { Lightning, Utils } from "@lightningjs/sdk";
import { Color } from "../../../utils/Color";

export class Logo extends Lightning.Component {
  static _template() {
    return {
      w: 187,
      h: 32,
      y: 57,
      color: Color.hexToArgb("#ffffff"),
      x: (1920 - 187) / 2,
      src: Utils.asset("images/logo.png"),
    };
  }
}