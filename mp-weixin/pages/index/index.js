"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      banners: [
        "/static/images/1.jpg",
        "/static/images/2.jpg",
        "/static/images/3.jpg"
      ]
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.banners, (item, index, i0) => {
      return {
        a: item,
        b: index
      };
    }),
    b: common_assets._imports_0,
    c: common_assets._imports_0,
    d: common_assets._imports_0,
    e: common_assets._imports_0,
    f: common_assets._imports_0,
    g: common_assets._imports_0,
    h: common_assets._imports_0
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
