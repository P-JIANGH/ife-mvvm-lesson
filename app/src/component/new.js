import san, { DataTypes } from 'san';
import className from '../../style/style.css';

var newApp = san.defineComponent({
  template: `
    <div>
      <div class="${className.text}"><button>添加</button>123</div>
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
