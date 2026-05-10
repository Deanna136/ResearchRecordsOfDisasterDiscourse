// pages/index/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [
      'https://research-records-of-disaster-discourse-1332476381.cos.ap-chengdu.myqcloud.com/hotmap.png',
      'https://research-records-of-disaster-discourse-1332476381.cos.ap-chengdu.myqcloud.com/sichuan-map.png'
    ]
  },

  /**
   * 跳转到“图书”页面
   */
  goToBook() {
    wx.switchTab({
      url: '../book/book',
      fail: (err) => {
        console.error('跳转失败: 图书页面', err);
        wx.showToast({
          title: '页面暂不可用',
          icon: 'none',
          duration: 1500
        });
      }
    });
  },

  /**
   * 跳转到“期刊”页面
   */
  goToJournal() {
    wx.switchTab({
      url: '/pages/journal/journal',
      fail: (err) => {
        console.error('跳转失败: 期刊页面', err);
        wx.showToast({
          title: '页面暂不可用',
          icon: 'none',
          duration: 1500
        });
      }
    });
  },

  /**
   * 跳转到“神话史诗”页面
   */
  goToMyth() {
    wx.switchTab({
      url: '/pages/myth/myth',
      fail: (err) => {
        console.error('跳转失败: 神话史诗页面', err);
        wx.showToast({
          title: '页面暂不可用',
          icon: 'none',
          duration: 1500
        });
      }
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 可以在此处添加页面加载时的逻辑，例如检查图片资源是否存在等
    console.log('首页加载完成');
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    // 页面初次渲染完成后的逻辑
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    // 页面显示时的逻辑
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    // 页面隐藏时的逻辑
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    // 页面卸载时的逻辑
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    // 下拉刷新逻辑（如需使用）
    wx.stopPullDownRefresh();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    // 上拉加载更多逻辑（如需使用）
  }
});