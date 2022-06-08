const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');
const nodemailer = require('nodemailer');
const fs = require('fs');
const FormData = require('form-data');
const archiver = require('archiver');
const axios = require('axios');
const path = require("path");
const zl = require("zip-lib");

const pathReport = 'C:/Users/INSLTP011/Desktop/Bayer/cypress/report';
const uploadUrl = 'http://logm.stag-rewardx.insignia.co.id/api/upload';
const uploadDownloadUrl = 'http://logm.stag-rewardx.insignia.co.id';

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
   zipDirectory(`${path.resolve("./cypress/report/")}/`, `${path.resolve("./cypress/compressed/report.zip")}`);
}

 function zipDirectory(source, outputTarget) {
  zl.archiveFolder(source, outputTarget).then(function () {
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
    emailGroupTarget = [
        'qaeinsignia@gmail.com',
        'pdimasmahendra@gmail.com',
        'muhammadhari018@gmail.com',
        'davidbahtiar55@gmail.com'
    ];
    // emailTarget = emailGroupTarget.join(', ');
    console.log('..:::UPLOAD SECTION:::..');
    const params = new FormData();
    params.append("files", fs.createReadStream(path.resolve("./cypress/compressed/report.zip")), "report.zip");
     axios.post(uploadUrl, params).then(result => { 
      mail = {
        to: emailTarget,
        from: configMail.auth.user,
        subject: `Automation Report - ${new Date()}`,
        html: `
        <p>Hallo, Berikut ini terlampir hasil report testing pada tanggal ${new Date()}</p>
        <p>Anda dapat mengunduhnya berkasnya disini <a href="${uploadDownloadUrl}${result.data[0].url}">Report.zip</a>&nbsp;</p>
        <p>Bagaimana menampilkan Report:</p>
        <ul>
        <li>Unduh berkas report pada link diatas.</li>
        <li>Extract berkas tersebut menggunakan winrar.</li>
        <li>Double klik pada file <strong>"index.html"</strong>.</li>
        </ul>
        <p>Atau jika link diatas rusak, Anda tetap bisa melihat report tersebut dengan cara sebagai berikut:</p>
        <ul>
        <li>Buat sebuah folder dengan nama <strong>"report"</strong>, dan simpan file "<strong>index.html</strong>" ke dalam folder report.</li>
        <li>Buat sebuah sub-folder dengan nama <strong>"assets"</strong> di dalam folder <strong>"report''</strong>.</li>
        <li>Pindahkan seluruh file app.css, app.js, app.js.LICENSE.txt dan file font ke dalam folder <strong>''assets'' </strong>yang telah dibuat sebelumnya.</li>
        <li>Setelah semua proses diatas selesai, double klik pada file <strong>"index.html"</strong>.&nbsp;&nbsp;</li>
        </ul>
        <p>&nbsp;</p>
        <p>Regards,</p>
        <p>Tim QA Insignia</p>`,
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
     })
    .catch(error => { 
      console.error(error); throw error; 
    });
    console.log("compressed done");
  }, function (err) {
      console.log(err);
  });
}

// function upload(){
//   console.log('..:::UPLOAD SECTION:::..');
//   const params = new FormData();
//   params.append("files", fs.createReadStream('C:/Users/INSLTP011/Desktop/Bayer/cypress/report/report.rar'), "report.rar");
//   axios.post(uploadUrl, params).then(result => { console.log(result); return result; })
//   .catch(error => { console.error(error); throw error; });
// }
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