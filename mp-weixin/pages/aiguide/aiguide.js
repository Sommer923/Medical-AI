Page({
  data: {
    userInput: '',
    messages: [],
    scrollTop: 0
  },
  onInputChange(e) {
    this.setData({
      userInput: e.detail.value
    });
  },
  async sendRequest() {
    const { userInput, messages } = this.data;

    if (!userInput.trim()) return;

    this.setData({
      messages: [...messages, { role: 'user', content: userInput }],
      userInput: '',
      scrollTop: messages.length * 80
    });

    try {
      const response = await wx.request({
        url: 'https://api.openai.com/v1/chat/completions',
        method: 'POST',
        header: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer YOUR_OPENAI_API_KEY'
        },
        data: {
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: userInput }]
        }
      });

      if (response.data && response.data.choices) {
        const aiMessage = response.data.choices[0].message.content;
        this.setData({
          messages: [...this.data.messages, { role: 'ai', content: aiMessage }],
          scrollTop: (this.data.messages.length + 1) * 80
        });
      } else {
        this.setData({
          messages: [...this.data.messages, { role: 'ai', content: '未能获取回复，请重试。' }],
          scrollTop: (this.data.messages.length + 1) * 80
        });
      }
    } catch (error) {
      console.error('请求失败：', error);
      this.setData({
        messages: [...this.data.messages, { role: 'ai', content: '请求失败，请重试。' }],
        scrollTop: (this.data.messages.length + 1) * 80
      });
    }
  }
});
