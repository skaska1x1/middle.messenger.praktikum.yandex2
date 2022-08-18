import Handlebars from "handlebars";
import tpl from "./tpl.hbs";
import "./style.css";

Handlebars.registerPartial('input', tpl)

export default (id, value) => {
    return Handlebars.compile(tpl)({ id, value })
}