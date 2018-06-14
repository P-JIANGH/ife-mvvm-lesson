import { Component } from 'san';
import template from './highest-level.html';
import styles from './highest-level.css';
import highLevel from '../high-level/high-level';

export default class HighestLevel extends Component {

  constructor(options) {
    super(options);
  }
  
  static template = template;
  // 引入组件
  static components = {
    'high-level': highLevel,
  }

  initData () {
    return {
      inputMsg: '我也静静等待用户输入',
      styles,
    };
  }

  // 处理接收到的数据
  handleMessage(msg) {
    this.data.set('inputMsg', msg && msg !== '' ? msg : '我也静静等待用户输入');
    this.fire('message', msg);
  }
}
