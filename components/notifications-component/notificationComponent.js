/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import { notificationComponent } from './notifcationComponent-styles.js'
/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class NotificationComponent extends LitElement {
  static styles = [
    notificationComponent,
    css``
  ];

  static get properties() {
    return {
      icon: {type: String}
    };
  }

  constructor() {
    super();
    this.icon = '';
  }

  render() {
    return html`
        <article class="notification-container">
            <figure>
                <img class="img-notification" src="../../assets/img/informacion.png" alt="icono del pop-up">
            </figure>
            <div>
                <slot name="message"></slot>
            </div>
        </article>
    `;
  }

}

window.customElements.define('notification-component', NotificationComponent);
