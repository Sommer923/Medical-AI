Page({
  goToEdit: function () {
    wx.navigateTo({
      url: '../people/people'
    });
  },
  
  goToAppointments: function () {
    wx.navigateTo({
      url: '../appointments/appointments'
    });
  },
  
  goToMedications: function () {
    wx.navigateTo({
      url: '../medications/medications'
    });
  },
  
  goToPatients: function () {
    wx.navigateTo({
      url: '../patients/patients'
    });
  }
});
