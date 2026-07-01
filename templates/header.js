import { html } from "lighterhtml";
import settings from "../settings.json";

export const renderHeader = html.node`<div>
  <div class='avatar-container'>
    <img src='${settings.avatarImage}' class='avatar' alt='${settings.name}' />
  </div>
  <h1> 👉​ <i> <a href="https://shop.diosdeath.com/producto/cd-dios-reexordium">${settings.name}</a></i>👈​​</h1>
</div>`;
