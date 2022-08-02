import Editor from '@tinymce/tinymce-vue'
import Tiny from 'tinymce'
import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'
import ImageTool from '@editorjs/image'

import axios from 'axios'


import { PutObjectCommand,GetObjectCommand } from "@aws-sdk/client-s3";
import { S3Client } from "@aws-sdk/client-s3";

// AWS.config.update({
//   "aws_access_key_id": "AKIAT47ZX6U4R37XVQM7",
//   "aws_secret_access_key": "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",
//   "region": " us-west-1"
// });

const s3 = new S3Client({
  region: 'us-west-1'
});
const bucket = 'node-test-buket-ver1';
const objectKey = 'ABEODA';

const bucketParams = {
  Bucket: bucket,
  // Specify the name of the new object. For example, 'index.html'.
  // To create a directory for the object, use '/'. For example, 'myApp/package.json'.
  Key: objectKey,
  // Content of the new object.
  Body: "BODY",
};

async function main(param) {
  console.log('main call')
  try {
    await s3.send(new PutObjectCommand(param));
    resolve({
      success: 1,
      file: {
      url: 'https://node-test-buket-ver1.s3.us-west-1.amazonaws.com/ddoskougeki',
                  //         // any other image data you want to store, such as width, height, color, extension, etc
      }
    })
  } catch(e) {
    if (e.name === "AbortError") {
      uploadProgress.textContent = 'Upload aborted: ' + e.message;
    }
  }
}

async function intevalTest(){
    return async()=> { await fetch("https://8azfli2f07.execute-api.us-east-1.amazonaws.com/v7/node-test-buket-ver1/MONGOLL",
      {
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'komakoma',
      }
    ).then(()=>{
      return{
        success: 1,
        file: {
          url: 'https://node-test-buket-ver1.s3.us-west-1.amazonaws.com/ddoskougeki',
          // any other image data you want to store, such as width, height, color, extension, etc
        }
      }
    }).catch(()=>{
      console.log('catchero')
    })
    }
}

async function test(){
  const result = await fetch("https://8azfli2f07.execute-api.us-east-1.amazonaws.com/v7/node-test-buket-ver1/MONGOLL",
      {
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
          'x-api-key':'P1ZZLKDpQy6pXb7Xvv9FP9VdVvKocMyJ1ujmKl7o'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'komakoma',
      });
  return{
        success: 1,
        file: {
          url: 'https://node-test-buket-ver1.s3.us-west-1.amazonaws.com/ddoskougeki',
          // any other image data you want to store, such as width, height, color, extension, etc
        }
    }
}


export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      myPlugin:()=> 'String generated from my auto-imported plugin!',
      // tinyMong: () => { return new Rectangle(10, 10)},
      editor: ({holder,placeholder}) => { return new EditorJS({
        holder,
        placeholder,
        onReady: () => {console.log('Editor.js is ready to work!')},
        tools: { 
          header: {
            class: Header, 
            inlineToolbar: ['link'] 
          }, 
          image: {
            class: ImageTool,
            config: {
              uploader: {
                uploadByFile(file){
                  //your own uploading logic here
                
                  // const result = await fetch("https://8azfli2f07.execute-api.us-east-1.amazonaws.com/v7/node-test-buket-ver1/MONGOLL",
                  //   {
                  //     method: 'PUT', // *GET, POST, PUT, DELETE, etc.
                  //     mode: 'cors', // no-cors, *cors, same-origin
                  //     // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                  //     // credentials: 'same-origin', // include, *same-origin, omit
                  //     headers: {
                  //       'Content-Type': 'image/jpeg',
                  //         // 'Content-Type': 'application/x-www-form-urlencoded',
                  //     },
                  //     body: file,
                  //   }
                  // )
                  //   .then(function (res) {
                  //     console.log(res); // => Response
                  //     return {  
                  //       success: 1,
                  //       file: {
                  //         url: 'https://node-test-buket-ver1.s3.us-west-1.amazonaws.com/ddoskougeki',
                  //         // any other image data you want to store, such as width, height, color, extension, etc
                  //       }
                  //     };
                  //   }).catch((err)=>{
                  //     console.log('ERR',err)
                  //   })
                
                return test()
                
                },
                uploadByUrl(url){
                  // your ajax request for uploading
                  return MyAjax.upload(file).then(() => {
                    return {
                      success: 1,
                      file: {
                        url: 'https://node-test-buket-ver1.s3.us-west-1.amazonaws.com/ddoskougeki',
                        // any other image data you want to store, such as width, height, color, extension, etc
                      }
                    }
                  })
                }
              }
      
            }
          }
        }
      })  
    }
    }
  }
})

async function sasada(){
  let status = false
  await fetch(" https://8azfli2f07.execute-api.us-east-1.amazonaws.com/v7/node-test-buket-ver1/MONGOLL",
                    {
                      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
                      mode: 'cors', // no-cors, *cors, same-origin
                      // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                      // credentials: 'same-origin', // include, *same-origin, omit
                      headers: {
                        'Content-Type': 'application/json',
                          // 'Content-Type': 'application/x-www-form-urlencoded',
                      },
                      body: 'sasas'
                    }
                  )
  status = true
  return  status
}

function fetchUserInfo(s3key) {
    fetch(`https://8azfli2f07.execute-api.us-east-1.amazonaws.com/v7/node-test-buket-ver1/${s3key}`,
    {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body:'bbb',
    })
        .then(response => {
            if (!response.ok) {
                console.error("エラーレスポンス", response);
            } else {
              return {
                success: 1,
                file: {
                  url: 'https://node-test-buket-ver1.s3.us-west-1.amazonaws.com/employee-1.png',
                }
              };
            }
        }).catch(error => {
            console.error(error);
        });
}