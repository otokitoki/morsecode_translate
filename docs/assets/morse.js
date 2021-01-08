const morse_obj = {"イ":"・－",            "ィ":"・－",
"ロ":"・－・－",
"ハ":"－・・・","バ":"－・・・　・・",
"ニ":"－・－・",
"ホ":"－・・","ボ":"－・・　・・",
"ヘ":"・","ベ":"・　・・",
"ト":"・・－・・","ド":"・・－・・　・・",
"チ":"・・－・","ヂ":"・・－・　・・",
"リ":"－－・",
"ヌ":"・・・・",
"ル":"－・－－・",
"ヲ":"・－－－",
"ワ":"－・－",                             "ヮ":"－・－",
"カ":"・－・・","ガ":"・－・・　・・",        "ヵ":"・－・・","ヶ":"・－・・",
"ヨ":"－－",                               "ョ":"－－",
"タ":"－・","ダ":"－・　・・",
"レ":"－－－",
"ソ":"－－－・","ゾ":"－－－・　・・",
"ツ":"・－－・","ヅ":"・－－・　・・",        "ッ":"・－－・",
"ネ":"－－・－",
"ナ":"・－・",
"ラ":"・・・",
"ム":"－",
"ウ":"・・－",                             "ゥ":"・・－",
"ヰ":"・－・・－",
"ノ":"・・－－",
"オ":"・－・・・",                          "ォ":"・－・・・",
"ク":"・・・－","グ":"・・・－　・・",
"ヤ":"・－－",                             "ャ":"・－－",
"マ":"－・・－",
"ケ":"－・－－","ゲ":"－・－－　・・",
"フ":"－－・・","ブ":"－－・・　・・",
"コ":"－－－－","ゴ":"－－－－　・・",
"エ":"－・－－－",                          "ェ":"－・－－－",
"テ":"・－・－－","デ":"・－・－－　・・",
"ア":"－－・－－",                          "ァ":"－－・－－",
"サ":"－・－・－","ザ":"－・－・－　・・",
"キ":"－・－・・","ギ":"－・－・・　・・",
"ユ":"－・・－－",                          "ュ":"－・・－－",
"メ":"－・・・－",
"ミ":"・・－・－",
"シ":"－－・－・","ジ":"－－・－・　・・",
"ヱ":"・－－・・",
"ヒ":"－－・・－","ビ":"－－・・－　・・",
"モ":"－・・－・",
"セ":"・－－－・","ゼ":"・－－－・　・・",
"ス":"－－－・－","ズ":"－－－・－　・・",
"ン":"・－・－・",
"゛":"・・",
"゜":"・・－－・",
"ー":"・－－・－",
"、":"・－・－・－",
"（":"－・－－・－","）":"・－・・－・"
};

const r_morse_obj = Object.fromEntries(
  Object.entries(morse_obj)
  .map(([ key, val ]) => [val,key])
);

function init(){

  const btn = document.getElementById("btn");
  btn.addEventListener("click",
    function(){
      const text = document.getElementById("text").value;
      let data = {"app_id":"c31834d1765b52b67c936dcfc66d9e63fb624fb957157c2a700f2d9296d3f8db","sentence":text, "output_type":"katakana"};
      postData('https://labs.goo.ne.jp/api/hiragana', data)
          .then(res => {
            data = res.converted; // `data.json()` の呼び出しで解釈された JSON データ
            console.log(data);
            data = data.replace(/( |　)/g,"");
            console.log(data);
            const data_kata = data.replace(/[ぁ-ん]/g, function(s) {
            return String.fromCharCode(s.charCodeAt(0) + 0x60);
          });
          const morse = Array.prototype.map.call(data_kata,(c)=>{
            return morse_obj[c];
          });
          const morse_space = morse.join("　")
          console.log(morse_space);
          document.getElementById("result").style.display = "block";
          document.getElementById("result").innerText = morse_space;
      });
      
    },
    false);
  
  const r_btn = document.getElementById("r_btn");
  r_btn.addEventListener("click",
    function(){
      const morse = document.getElementById("text").value;
      console.log(morse);
      morse_array = morse.split(/　/g);
      console.log(morse_array);
      //text = text.replace(/( |　)/g,"");
      
      
      const text_array = morse_array.map((e)=>{
        return r_morse_obj[e];
      });
      const text = text_array.join("")
      console.log(text);
      document.getElementById("result").style.display = "block";
      document.getElementById("result").innerText = text;
    },
    false);

}

async function postData(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) 
  })
  return response.json(); 
}
