import san, { DataTypes } from 'san';
import className from './new.css';
import template from './new.html';

var newApp = san.defineComponent({
  template,

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
      className,
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
