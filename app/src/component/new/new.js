import { Component } from 'san';
import styles from './new.css';
import template from './new.html';

export default class NewApp extends Component {

  constructor(options) {
    super(options);
  }
  
  static template = template;

  initData () {
    return {
      message: '',
      styles,
    };
  }

  handleClick() {
    this.fire('message', this.data.get('message'));
  }
}
