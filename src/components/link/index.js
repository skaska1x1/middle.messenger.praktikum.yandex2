import Handlebars from "handlebars";
import tpl from "./tpl.hbs";
import "./style.css";


Handlebars.registerPartial('link', tpl);

export default (props = {}) => {
    return Handlebars.compile(tpl)(props)
}