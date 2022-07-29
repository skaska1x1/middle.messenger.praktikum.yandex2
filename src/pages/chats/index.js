import Handlebars from "handlebars";
import tpl from "./tpl.hbs";
import "./style.css";
import button from "../../components/button";
import link from "../../components/link";
import input from "../../components/input";
// import oneChat from "./components/oneChat";

import chat from "./chat/";


Handlebars.registerPartial('chats', tpl);

export default (props = {}) => {
    return Handlebars.compile(tpl)(props)
}

// const root = document.getElementById("root").innerHTML = res;



// {
//     user: {
//         user__name: "name-test"
//         user__message: "message-test"
//     }
// }

// Handlebars.registerHelper('loud', function (string) {
//     return string.toUpperCase()
// });



// {
//     block: [
//         {
//             blockName: "Yehuda Katz",
//             links: [
//                 {
//                     href: "https://www.youtube.com/watch?v=FbCRHHir4_c&t=778sAlan ",
//                     title: "title"
//                 }
//             ]

//         }
//     ]
// }

// (
//     function () {
//         $.ajax({
//             url: 'data.json'
//         }).done(function (data) {
//             var json = JSON.parse(data)
//             sourse = $("#block").html(),
//                 template = Handlebars.compile(sourse),
//                 html = template(json)
//             body.append(html)

//         })
//     }
// )

// Handlebars.registerHelper('loud', function (string) {
//     return string.toUpperCase()
// });