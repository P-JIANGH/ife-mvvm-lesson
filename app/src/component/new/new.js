import { Component } from 'san';
import className from './new.css';
import template from './new.html';

export default class NewApp extends Component {

  constructor(options) {
    super(options);
  }
  
  static template = template;

  initData () {
    return {
      infos: [
        { name: '张三', status: 1 },
        { name: '李四', status: -1 },
        { name: '王五', status: 0 },
        { name: '赵六', status: 0 },
        { name: '孙七', status: 0 },
      ],
      className,
    };
  }

  addInfo() {
    this.data.push('infos', { name: '新人', status: 0 });
  }

  delInfo(index) {
    this.data.removeAt('infos', index);
  }

  updStatus(index) {
    this.data.set(`infos[${index}].status`, 1);
  }
}
