"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      src: "../../static/images/logo.png",
      user: {
        userName: "夏吕晴",
        userId: "202231990510",
        intrduction: "我爱睡觉",
        school: "",
        sex: "",
        birthday: "",
        city: ""
      },
      school: ["清华大学", "北京大学", "复旦大学", "南京大学"],
      sex: ["男", "女"]
    };
  },
  methods: {
    chooseImg() {
      common_vendor.index.chooseImage({
        count: 1,
        sourceType: ["album"],
        sizeType: ["original", "compressed"],
        success: (res) => {
          this.src = res.tempFilePaths;
        }
      });
    },
    bindSchoolChange(e) {
      this.user.school = this.school[e.target.value];
      common_vendor.index.setStorage({
        key: "school",
        data: this.school[e.target.value]
      });
    },
    bindSexChange(e) {
      this.user.sex = this.sex[e.target.value];
      common_vendor.index.setStorage({
        key: "sex",
        data: this.sex[e.target.value]
      });
    },
    bindDateChange(e) {
      this.user.birthday = e.target.value;
      common_vendor.index.setStorage({
        key: "birthday",
        data: e.target.value
      });
    },
    bindCityChange(e) {
      this.user.city = e.target.value[0];
      common_vendor.index.setStorage({
        key: "city",
        data: e.target.value[0]
      });
    }
  },
  onLoad() {
    common_vendor.index.getStorage({
      key: "userName",
      success: (res) => {
        this.user.userName = res.data;
      }
    }), common_vendor.index.getStorage({
      key: "userId",
      success: (res) => {
        this.user.userId = res.data;
      }
    }), common_vendor.index.getStorage({
      key: "intrduction",
      success: (res) => {
        this.user.intrduction = res.data;
      }
    }), common_vendor.index.getStorage({
      key: "school",
      success: (res) => {
        this.user.school = res.data;
      }
    }), common_vendor.index.getStorage({
      key: "sex",
      success: (res) => {
        this.user.sex = res.data;
      }
    }), common_vendor.index.getStorage({
      key: "birthday",
      success: (res) => {
        this.user.birthday = res.data;
      }
    }), common_vendor.index.getStorage({
      key: "city",
      success: (res) => {
        this.user.city = res.data;
      }
    });
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.src,
    b: common_vendor.o((...args) => $options.chooseImg && $options.chooseImg(...args)),
    c: common_vendor.t($data.user.userName),
    d: common_vendor.t($data.user.userId),
    e: common_vendor.t($data.user.intrduction),
    f: common_vendor.t($data.user.school),
    g: $data.school,
    h: common_vendor.o((...args) => $options.bindSchoolChange && $options.bindSchoolChange(...args)),
    i: common_vendor.t($data.user.sex),
    j: $data.sex,
    k: common_vendor.o((...args) => $options.bindSexChange && $options.bindSexChange(...args)),
    l: common_vendor.t($data.user.birthday),
    m: $data.user.birthday,
    n: common_vendor.o((...args) => $options.bindDateChange && $options.bindDateChange(...args)),
    o: common_vendor.t($data.user.city),
    p: common_vendor.o((...args) => $options.bindCityChange && $options.bindCityChange(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
