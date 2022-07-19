import Editor from '@tinymce/tinymce-vue'
import Tiny from 'tinymce'
import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'
import ImageTool from '@editorjs/image'

/*
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // ゲッター
  get area() {
    return this.calcArea();
  }
  // メソッド
  calcArea() {
    return this.height * this.width;
  }
}
*/
export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      myPlugin: () => 'String generated from my auto-imported plugin!',
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
              endpoints: {
                byFile: 'http://52.88.36.114:8080/create', // Your backend file uploader endpoint
                byUrl: 'http://52.88.36.114:8080/create', // Your endpoint that provides uploading by Url
              }
            }
          },
        }
      })  
    }
    }
  }
})