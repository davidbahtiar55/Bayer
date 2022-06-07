const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');
const nodemailer = require('nodemailer');
const fs = require('fs');
const archiver = require('archiver');

const pathReport = 'C:/Users/INSLTP011/Desktop/Bayer/cypress/report';

 //<reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {

};

module.exports = (on, config) => {
  require('cypress-mochawesome-reporter/plugin')(on);
};

const sendAnEmail = (message, attachment) => {
    let configMail, publisher, emailTarget, mail;
    configMail = {
      service: 'gmail',
      auth: {
        user: 'qaeinsignia@gmail.com',
        pass: 'yzyymdzvnnouavhx'
      }
    };
  
    publisher = nodemailer.createTransport(configMail);
    emailTarget = `qaeinsignia@gmail.com`;

    zipDirectory(`${pathReport}/`, `report.zip`);
    mail = {
      to: emailTarget,
      from: configMail.auth.user,
      subject: `Automation Report - ${new Date()}`,
      html: `${message}`,
      attachments: [
        {
          filename: 'index.html',
          path: `${pathReport}/index.html`
        },
        {
          filename: 'app.css',
          path: `${pathReport}/assets/app.css`
        },
        {
          filename: 'app.js',
          path: `${pathReport}/assets/app.js`
        },
        {
          filename: 'app.js.LICENSE.txt',
          path: `${pathReport}/assets/app.js.LICENSE.txt`
        },
        {
          filename: 'MaterialIcons-Regular.woff',
          path: `${pathReport}/assets/MaterialIcons-Regular.woff`
        },
        {
          filename: 'MaterialIcons-Regular.woff2',
          path: `${pathReport}/assets/MaterialIcons-Regular.woff2`
        },
        {
          filename: 'roboto-light-webfont.woff',
          path: `${pathReport}/assets/roboto-light-webfont.woff`
        },
        {
          filename: 'roboto-light-webfont.woff2',
          path: `${pathReport}/assets/roboto-light-webfont.woff2`
        },
        {
          filename: 'roboto-medium-webfont.woff',
          path: `${pathReport}/assets/roboto-medium-webfont.woff`
        },
        {
          filename: 'roboto-medium-webfont.woff2',
          path: `${pathReport}/assets/roboto-medium-webfont.woff2`
        },
        {
          filename: 'roboto-regular-webfont.woff',
          path: `${pathReport}/assets/roboto-regular-webfont.woff`
        },
        {
          filename: 'roboto-regular-webfont.woff2',
          path: `${pathReport}/assets/roboto-regular-webfont.woff2`
        },
      ]
    };
    publisher.sendMail(mail, function(err, info) {
      if (err) {
        console.log(err);
      } else {
          console.log('Email sent successfully: '
                  + info.response);
      }
    });

}

function zipDirectory(source, outputTarget) {
  var archive = archiver("zip", { level: 9 });
  const stream = fs.createWriteStream(outputTarget, { flags: 'w' });

  stream.on("close", () => {
      console.log(archive.pointer() + ' total bytes');
      console.log('archiver has been finalized and the output file descriptor has closed.');
  });

  return new Promise(async (resolve, reject) => {
      archive.pipe(stream);
      archive.on("error", err => reject(err))
      archive.directory(source, false);
      await archive.finalize();
      resolve();
  });
}

module.exports = (on, config) => {
  on('task', {
    sendMail (message, attachment) {
     sendAnEmail(message, attachment);
     return null;
    }
  })
}
// module.exports = (on) => {
//   on('before:run', async (details) => {
//     console.log('override before:run');
//     await beforeRunHook(details);
//   });

//   on('after:run', async () => {
//     console.log('override after:run');
//     await afterRunHook();
//   });
// };