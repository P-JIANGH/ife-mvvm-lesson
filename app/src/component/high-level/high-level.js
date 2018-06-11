import { Component } from 'san';
import template from './high-level.html';
import NewApp from '../new/new';

export default class HighLevel extends Component {

  constructor(options) {
    super(options);
  }

  static component = {
    new: NewApp,
  };
  
  static template = template;

  initData () {
    return {
      inputMsg: '静静等待用户输入',
    };
  }
}
