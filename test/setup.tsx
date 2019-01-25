import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import path from 'path';

const dotEnvPath = path.resolve('.env');

// tslint:disable-next-line no-var-requires
require('dotenv').config({
  path: dotEnvPath,
});

Enzyme.configure({ adapter: new Adapter() });

const { JSDOM } = require('jsdom'); // tslint:disable-line no-var-requires

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

function copyProps(src: any, target: any) {
  const props = Object.getOwnPropertyNames(src)
    .filter((prop) =>  typeof target[prop] === 'undefined')
    .map((prop) => Object.getOwnPropertyDescriptor(src, prop));
  // TODO dette er teit!
  const nyProps = (props as unknown);
  const nyNyProps = (nyProps as PropertyDescriptorMap);
  Object.defineProperties(target, nyNyProps);
}

let temp: any = null;
const localS = {
  getItem() {
    return temp;
  },
  setItem(key: any, value: any) {
    temp = value;
  },
};

(global as any).HTMLElement = window.HTMLElement;
(global as any).localStorage = localS;
(global as any).XMLHttpRequest = window.XMLHttpRequest;

(global as any).window = window;
(global as any).document = window.document;
(global as any).navigator = {
  userAgent: 'node.js',
};
(global as any).window.APP_SETTINGS = {
  APP_ROOT: '/syfooversikt',
};
copyProps(window, global);
