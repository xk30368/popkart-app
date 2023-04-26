"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      value: ["0"],
      content: "内容显示内容显示内容显示内容显示内容显示内容显示内容显示内容显示"
    };
  },
  methods: {
    openCollpse(e) {
      console.log(e);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/xiongkang/Desktop/app/popkart-app/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
