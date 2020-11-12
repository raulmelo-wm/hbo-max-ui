import { Lightning, Utils, Tools } from "@lightningjs/sdk";
import { Color } from "../utils/Color";

export class Home extends Lightning.Component {
  static _template() {
    return {
      Background: {
        w: 1920,
        h: 1080,
        src: Utils.asset("images/sitebg.png"),
      },

      Header: {
        w: 1920,
        h: 32,
        Logo: {
          w: 187,
          h: 32,
          // prettier-ignore
          y: 57,
          color: Color.hexToArgb("#ffffff"),
          x: (1920 - 187) / 2,
          src: Utils.asset("images/logo.png"),
        },
      },
    };
  }

  _getFocus() {
    return this;
  }
}
