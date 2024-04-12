/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import { listInformationStyle } from './listInformation-styles.js'

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class ListPage extends LitElement {
  static styles = [
    listInformationStyle,
    css``
  ];

  static get properties() {
    return {
      data:  {type: Array},
    };
  }

  constructor() {
    super();
    this.data = [];
  }

  firstUpdated() {
    this._getData();
  }
  
  _getData() {
    fetch('https://project-data-6c5u.onrender.com/accionistas')
      .then(response => response.json())
      .then(data => this.data = data);
  }

  render() {
    return html`
    <h2>Accionistas</h2>
    <p>Esta es la información sobre los accionistas de tu empresa</p>
      <ul role="list" class="divide-y divide-gray-100">
        ${this.data.map((data) =>
          html`<li class="flex justify-between gap-x-6 py-5">
          <div class="informacion-container">
            <img class="image-user" src="/assets/img/user.png" alt="">
            <div class="subinformation-container">
              <p>${data.Nombre}</p>
              <p>${data.TipoDocumento} ${data.Documento}</p>
              <p>Participación ${data.Porcentaje}</p>
            </div>
          </div>
        </li>`)}
      </ul>
    `;
  }

}

window.customElements.define('list-page', ListPage);
