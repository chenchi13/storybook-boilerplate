import React from 'react';
import style from './index.css';

export default class Popup extends React.Component {
  constructor() {
    super();

    this.state =
		{
		  tooltipClasses: [style.tooltiptext],
		  setInitialState: false,
		};

    this.showTooltip = this.showTooltip.bind(this);
    this.closeTooltip = this.closeTooltip.bind(this);
  }

  showTooltip() {
    this.setState({
      tooltipClasses: [style.tooltiptext, style.tooltip_show].join(' '),
    });
  }

  closeTooltip() {
    this.setState({
      tooltipClasses: [style.tooltiptext],
    });
  }

  render() {
    const popupTooltip = (
			<span className={this.state.tooltipClasses} id="myPopup">{this.props.tooltip}</span>
    );

    const div = (
        <div>
            <div id="modal" className={style.modal_background}>
                <div className={[style.modal, style.tooltip].join(' ')} onMouseEnter={this.showTooltip} onMouseLeave={this.closeTooltip}>

                    {this.props.tooltip !== undefined ? popupTooltip : undefined}

                    <span className={style.close} onClick={this.props.onClose}>&times;</span>
                    {this.props.children}
                </div>
            </div>
        </div>
    );

    return div;
  }
}
