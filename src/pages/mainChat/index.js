import Handlebars from "handlebars";
import tpl from "./tpl.hbs";
import "./style.css";
import button from "../../components/button";
import input from "../../components/input";

Handlebars.registerPartial('mainChat', tpl);

export default (props = {}) => {
    return Handlebars.compile(tpl)(props)
}

