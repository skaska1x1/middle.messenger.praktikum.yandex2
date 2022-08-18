import Handlebars from "handlebars";
import tpl from "./tpl.hbs";
import "./style.css";
import button from "../../components/button";
import link from "../../components/link";
import input from "../../components/input";

import chat from "./chat/";

Handlebars.registerPartial('chats', tpl);

export default (props = {}) => {
    return Handlebars.compile(tpl)(props)
}