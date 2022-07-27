import Editor from '@tinymce/tinymce-vue'
import Tiny from 'tinymce'
import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'
import ImageTool from '@editorjs/image'


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
              // endpoints: {
              //   byFile: 'http://52.88.36.114:8080/create', // Your backend file uploader endpoint
              //   byUrl: 'http://52.88.36.114:8080/create', // Your endpoint that provides uploading by Url
              // }
              uploader: {
                async uploadByFile(file){
                  // your own uploading logic here
                  const REGION = "us-west-1"; //e.g. "us-east-1"
                  const s3Client = new S3Client({ region: REGION });
                  const bucketParams = {
                    Bucket: "node-test-buket-ver1",
                    // Specify the name of the new object. For example, 'index.html'.
                    // To reate a directory for the object, use '/'. For example, 'myApp/package.json'.
                    Key: "opsasake",
                    // Content of the new object.
                    Body: 'KAMAVINGA',
                  };

                
                  return async () => {
                    try {
                      const data = await s3Client.send(new PutObjectCommand(bucketParams));
                      // For unit tests.
                      console.log(
                        "Successfully uploaded object: " +
                          bucketParams.Bucket +
                          "/" +
                          bucketParams.Key
                      );
                      return{
                        success: 1,
                        file: {
                          url: 'https://node-test-buket-ver1.s3.us-west-1.amazonaws.com/employee-1.png',
                        }      
                      }
                    } catch (err) {
                      console.log("Error", err);
                    }
                  };


                  return{
                    success: 1,
                    file: {
                      url: 'https://node-test-buket-ver1.s3.us-west-1.amazonaws.com/employee-1.png',
                    }      
                  }
                    
                  /*
                  return async () => {
                    try {
                      const data = await s3Client.send(new PutObjectCommand(bucketParams));
                      // For unit tests.
                      console.log('DATA',data)
                      return {
                        success: 1,
                        file: {
                          url: `https://node-test-buket-ver1.s3.us-west-1.amazonaws.com/${bucketParams.Key}`,
                          // any other image data you want to store, such as width, height, color, extension, etc
                        }
                      };
                    } catch (err) {
                      console.log("Error", err);
                    }
                  };
                    // sucsess return block
                  */


                
                },
              }
            }
          }
        }
      })  
    }
    }
  }
})