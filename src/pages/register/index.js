import Handlebars from "handlebars";
import tpl from "./tpl.hbs";
import "./style.css";
import button from "../../components/button";
import fields from '../../components/fields';
import link from '../../components/link';

Handlebars.registerPartial('register', tpl);

export default (props = {}) => {
    return Handlebars.compile(tpl)(props)
}