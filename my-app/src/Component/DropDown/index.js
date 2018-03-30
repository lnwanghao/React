import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import styles from './index.less';
export default class DropDown extends Component {
  constructor(props) {
    super(props);
    this.visible = false;
    this.has = false;
  }
  render() {
    return (
      <div className={styles.selectgroup}>
        Default
        <i className={`fas fa-caret-down fa-lg ${this.visible ? 'rotate360' : ''}`} />
        <span className={styles.layer} ref={span => (this.span = span)} />
      </div>
    );
  }
  calculatePosition = () => {
    const DOMRect = this.span.parentNode.getBoundingClientRect(),
      left = DOMRect.x,
      top = DOMRect.bottom,
      width = DOMRect.width;
    this.div.style.cssText = `width: ${width}px; position: absolute; top: ${top}px; left: ${left}px;`;
  };
  DropDownContent = ({list}) => {
    return (
      <ul ref={ul => (this.ul = ul)} className={`${styles.content} animated fadeIn`}>
        {list.map((v, i) => {
          return <li key={i}>{v}</li>;
        })}
      </ul>
    );
  };
  componentDidMount() {
    const body = document.getElementById('body'),
      _this = this;
    this.div = document.createElement('div');
    ReactDOM.render(this.DropDownContent({list: [1, 2, 3]}), this.div);
    _this.calculatePosition();
    this.span.onclick = e => {
      if (_this.has === false) {
        body.appendChild(_this.div);
        _this.has = true;
      }
      const ul = ReactDOM.findDOMNode(_this.ul);
      _this.visible = !_this.visible;
      _this.ul.style.display = _this.visible ? '' : 'none';
      if (_this.visible) {
        window.onclick = e => {
          if (e.target !== _this.span) {
            _this.visible = false;
            _this.ul.style.display = _this.visible ? '' : 'none';
          }
        };
      } else {
        window.onclick = null;
      }
    };
    window.onresize = () => {
      _this.calculatePosition();
    };
  }
  componentWillUnmount() {
    const ul = ReactDOM.findDOMNode(this.ul);
    if (ul) this.div.removeChild(ul);
    window.onresize = null;
  }
}
