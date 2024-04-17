/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import { DetailStyle } from './detail-styles.js'

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class DetailPage extends LitElement {
  static styles = [
    DetailStyle,
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
    this.document = '';
  }

  firstUpdated() {
    this._getParamsUrl()
  }

  _getParamsUrl() {
    const pathSearch = window.location.search;
    const paramsSearch = new URLSearchParams(pathSearch);
    this.document = parseInt(paramsSearch.get('documento'));
    
    if(this.document) {
      this._getData();
    } else {
      alert('Error del servicio');
    }
  }
  
  _getData() {
    fetch(`https://project-data-6c5u.onrender.com/accionistas?Documento=${this.document}`)
      .then(response => response.json())
      .then(data => this.data = data);
  }

  render() {
    return html`
    <h2>Información sobre el miembro</h2>
      <ul role="list" class="divide-y divide-gray-100">
        ${this.data.map((data) =>
          html`<li class="flex justify-between gap-x-6 py-5">
              <div class="informacion-container">
                <img class="image-user" src="/assets/img/user.png" alt="">
                <div class="subinformation-container">
                  <p>Tipo de documento</p>
                  <p>${data.TipoDocumento}</p>
                  <p>Numero de identificación</p>
                  <p>${data.Documento}</p>
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

window.customElements.define('detail-page', DetailPage);
