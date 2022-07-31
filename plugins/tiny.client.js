import Editor from '@tinymce/tinymce-vue'
import Tiny from 'tinymce'
import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'
import ImageTool from '@editorjs/image'

import axios from 'axios'


import { PutObjectCommand } from "@aws-sdk/client-s3";
import { S3Client } from "@aws-sdk/client-s3";

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
                async uploadByFile(file){
                  // your own uploading logic here
                  // fetch("https://8azfli2f07.execute-api.us-east-1.amazonaws.com/v7/node-test-buket-ver1/MONGOLL",
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
                  //   }).then(function (json) {
                  //     console.log(json); // => json
                  //   })
                  // // 
                  
                  const { data: zip,} = await useFetch(() => "https://8azfli2f07.execute-api.us-east-1.amazonaws.com/v7/node-test-buket-ver1/MONGOLL",
                    {
                      method:'put',
                      body:file,
                      header:{
                        'Access-Control-Allow-Origin':'*'
                      }
                    }
                  );
          
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