import Handlebars from "handlebars";
import tpl from "./tpl.hbs";
import "./style.css";
import button from "../../components/button";

Handlebars.registerPartial('fields', tpl);

export default (props = {}) => {
    return Handlebars.compile(tpl)(props)
}