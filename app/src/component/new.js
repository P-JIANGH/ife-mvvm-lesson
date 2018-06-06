import san, { DataTypes } from 'san';

var newApp = san.defineComponent({
  template: `
    <div>
      <div>
        <input type="text" placeholder="姓名（string）" value="{= name =}" />
        <input type="text" placeholder="年龄（number）" value="{= age =}" />
        <input type="text" placeholder="简介（string）" value="{= des =}" />
      </div>
      <div style="display: inline-block; width: 200px;">
        <div style="margin: 20px 0;">
        信息：<button on-click="reset" style="margin-left: 60px;">移除信息</button>
        </div>
        <div>姓名：{{name || '________'}}</div>
        <div>年龄：{{age || '________'}}</div>
        <div>简介：{{des || '________'}}</div>
      </div>
      
    </div>
  `,
  dataTypes: {
    name: DataTypes.string,
    age: DataTypes.number,
    des: DataTypes.string,
  },

  initData: function () {
    return {
      name: null,
      age: null,
      des: null,
    };
  },

  // 处理点击事件，重置输入
  reset() {
    this.data.set('name', null);
    this.data.set('age', null);
    this.data.set('des', null);
  }
});

export default newApp;
