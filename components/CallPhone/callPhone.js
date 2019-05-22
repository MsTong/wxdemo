
// components/CallPhone/callphone.js


Component({
  methods: {
    callPhone() {
      var myEventDetail = {
        msg: '来自component的信息',
        tel: '400-010-9797'
      } // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('myevent', myEventDetail, myEventOption)
    }
  }
})

// Component({
//   data: {
//     phone: '400-010-9797'
//   },
//   attached: function () {
//     console.log("this.dataset.tel:" + this.dataset.tel); //控制台打印:"400-010-9797"
//     // 设置properties值用setData()
//     this.setData({
//       phone: this.dataset.tel
//     });
//   },
//   methods: {
//     callPhone() {
//       wx.makePhoneCall({
//         phoneNumber: this.data.phone
//       })
//     }
//   }
// })

// Component({
//   properties: {
//     phone: String //简写
//     /* 
//     phone: {
//       type: String, //类型,目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
//       value: '', //初始值
//       observer: function(newVal, oldVal) {}
//     }
//     */
//   },
//   attached: function () {
//     console.log("this.properties.phone:" + this.properties.phone); //控制台打印:"400-010-9797"
//   },
//   methods: {
//     callPhone() {
//       wx.makePhoneCall({
//         phoneNumber: this.data.phone
//       })
//     }
//   }
// })

// Component({
//   /**
//    * 组件的属性列表
//    */
//   properties: {

//   },
//   /**
//    * 组件的初始数据
//    */
//   data: {
//     phone: '400-010-9797'
//   },
//   /**
//    * 组件的方法列表
//    */
//   methods: {
//     callPhone() {
//       wx.makePhoneCall({
//         phoneNumber: this.data.phone
//       })
//     }
//   }
// })