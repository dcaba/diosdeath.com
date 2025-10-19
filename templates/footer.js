import { html } from "lighterhtml";
import settings from "../settings.json";

export const renderFooter = html.node`<footer class="footer">
  <div class="tagline" style="color:darkred">
    Design: <a href="https://www.instagram.com/alchemicalowl/">@alchemicalowl</a> <br />
    Created with <a href="https://glitch.com/">Glitch</a> and served by <a href="https://www.fastly.com/">Fastly</a> 
  </div>
</footer>
`;
