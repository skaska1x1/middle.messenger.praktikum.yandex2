import Handlebars from 'handlebars';
//import Handlebars from 'handlebars/dist/handlebars.runtime';
import tpl from './tpl.hbs';
import './style.css';
import button from '../../../components/button';
import fields from '../../../components/fields';
import link from '../../../components/link';

Handlebars.registerPartial('profileChange', tpl);

export default (props = {}) => {
    return tpl(props);
}