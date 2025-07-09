import { getServerSettings } from "./serverRouteSettings";

const serverRouteParser = function(purpose){
  const serverType = getServerSettings('connectionType'); 
  const serverLink = {
    global: {
      protocol: 'https',
      domain: 'laskowskicreative.no',
      port: '',
      path: ['api', 'lc'],
    },
    local: {
      protocol: 'http',
      domain: '127.0.0.1',
      port: '3003',
      path: ['api','lc'],
    },
  };
  const purposeLink = {
    handshake: 'handshake',
    sendContactForm: 'send-contact-form',
    footprint: 'usagereport',

  }
  const port = serverLink[serverType].port === '' ? '' : ':'+serverLink[serverType].port;
  let pathLink = '/';
  const pathGenerator = function()
  {
    serverLink[serverType].path.map((path)=>(
    pathLink = pathLink+path+'/'))
  };
  pathGenerator();
  let addressLink = ''+serverLink[serverType].protocol+'://'+serverLink[serverType].domain+port+pathLink+purposeLink[purpose];
  return addressLink;
};

const requestObjectGenerator = function(method, header){
  const methods = {post: 'POST', get: 'GET'};
  const headers = {
      json: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
  };
  const requestObject = {
      method: methods[method],
      headers: headers[header]
  }
  return requestObject;
};

const serverConnection = function (purpose, method, header, inquiry) {
  const serverRoute = serverRouteParser(purpose);
  let requestObject = requestObjectGenerator(method, header);
  requestObject.body = JSON.stringify(inquiry);
  fetch(serverRoute, requestObject)
  .then((res) => res.json())
  .then((json) => {return json})  
};

export {serverConnection};