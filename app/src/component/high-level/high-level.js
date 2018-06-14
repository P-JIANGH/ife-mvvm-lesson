import { Component } from 'san';
import template from './high-level.html';
import styles from './high-level.css';
import NewApp from '../new/new';

export default class HighLevel extends Component {

  constructor(options) {
    super(options);
  }

  static components = {
    new: NewApp,
  };
  
  static template = template;

  initData () {
    return {
      inputMsg: '静静等待用户输入',
      styles,
    };
  }

  // 处理接收到的数据
  handleMessage(msg) {
    this.data.set('inputMsg', msg && msg !== '' ? msg : '静静等待用户输入');
    this.fire('message', msg);
  }
}
