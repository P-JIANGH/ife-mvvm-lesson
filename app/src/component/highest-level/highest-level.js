import { Component } from 'san';
import template from './highest-level.html';

export default class HighestLevel extends Component {

  constructor(options) {
    super(options);
  }
  
  static template = template;

  initData () {
    return {
      inputMsg: '我也静静等待用户输入',
    };
  }
}
