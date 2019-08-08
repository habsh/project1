module.exports = {
    'BDD EXPECT' : function (client) {
      client
      .url('https://login.salesforce.com/?locale=in');
      client.pause(1000);
      // expect element  to be present in 1000ms
      client.expect.element('body').to.be.present.before(1000);
      // expect element <body> to have css property 'display'
      client.expect.element('body').to.have.css('display');
      // expect element <#username> to be an input tag
     client.expect.element('#username').to.be.an('input');
      // expect element <#username> to be visible
      client.expect.element('#username').to.be.visible;          
      client.end();
    }
  };