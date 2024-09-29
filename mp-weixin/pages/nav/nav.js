Page({
  goToDepartment: function (event) {
    const department = event.currentTarget.dataset.department;
    wx.navigateTo({
      url: `../department/department?name=${department}`
    });
  }
});
