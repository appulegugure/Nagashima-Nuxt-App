export default defineEventHandler(async(event) => {
    return { 
      testy:[
          {
            $el: "h1",
            children: "設問",
          },
          {
            $el: "h4",
            children: "問①　異常が起こった場合の対処を順番通りに書いて下さい。",
          },
          {
            $formkit: "text",
            name: "1-1",
            label: "1-1",
            placeholder: "Enter your name..."
          },
          {
            $formkit: "text",
            name: "1-2",
            label: "1-2",
            placeholder: "Enter your name..."
          },
          {
            $formkit: "text",
            name: "1-3",
            label: "1-3",
            placeholder: "Enter your name..."
          },
          {
            $el: "h4",
            children: "問②　異常とはどのような事を言いますか？",
          },
          {
            $formkit: "text",
            name: "2-1",
            label: "2-1",
            placeholder: "Enter your name..."
          },
          {
            $el: "h4",
            children: "問③　作業時のルールを３つを書いて下さい。",
          },
          {
            $formkit: "text",
            name: "3-1",
            label: "3-1",
            placeholder: "Enter your name..."
          },
          {
            $formkit: "text",
            name: "3-2",
            label: "3-2",
            placeholder: "Enter your name..."
          },
          {
            $formkit: "text",
            name: "3-3",
            label: "3-3",
            placeholder: "Enter your name..."
          },
        {
            $el: "h4",
            children: "問④ 【赤箱】行きになるのはどういう製品ですか？",
          },
          {
            $formkit: "text",
            name: "4-1",
            label: "4-1",
            placeholder: "Enter your name..."
          },
          {
            $el: "h4",
            children: "問⑤　タップの加工方法を2種類答えて下さい。",
          },
          {
            $formkit: "text",
            name: "5-1",
            label: "5-1",
            placeholder: "Enter your name..."
          },
          {
            $formkit: "text",
            name: "5-2",
            label: "5-2",
            placeholder: "Enter your name..."
          },
          {
            $el: "h4",
            children: "問⑥ ロット別とはどのような意味か答えて下さい。",
          },
          {
            $formkit: "text",
            name: "6-1",
            label: "6-1",
            placeholder: "Enter your name..."
          },
          {
            $formkit: "checkbox",
            name: "confirm",
            label: "confirm test",
          },
      ]
    }
})