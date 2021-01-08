const morse_obj = {"イ":"・－",
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
"ワ":"－・－",
"カ":"・－・・","ガ":"・－・・　・・",
"ヨ":"－－",
"タ":"－・","ダ":"－・　・・",
"レ":"－－－",
"ソ":"－－－・","ゾ":"－－－・　・・",
"ツ":"・－－・","ヅ":"・－－・　・・",
"ネ":"－－・－",
"ナ":"・－・",
"ラ":"・・・",
"ム":"－",
"ウ":"・・－",
"ヰ":"・－・・－",
"ノ":"・・－－",
"オ":"・－・・・",
"ク":"・・・－","グ":"・・・－　・・",
"ヤ":"・－－",
"マ":"－・・－",
"ケ":"－・－－","ゲ":"－・－－　・・",
"フ":"－－・・","ブ":"－－・・　・・",
"コ":"－－－－","ゴ":"－－－－　・・",
"エ":"－・－－－",
"テ":"・－・－－","デ":"・－・－－　・・",
"ア":"－－・－－",
"サ":"－・－・－","ザ":"－・－・－　・・",
"キ":"－・－・・","ギ":"－・－・・　・・",
"ユ":"－・・－－",
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
      
      morse_array = moorse.split(/( |　)/g);
      //text = text.replace(/( |　)/g,"");
      
      
      const text = morse_array.map((e)=>{
        return r_morse_obj[e];
      });
      
      console.log(text);
      document.getElementById("result").style.display = "block";
      document.getElementById("result").innerText = text;
    },
    false);

}


// POST メソッドの実装の例
async function postData(url = '', data = {}) {
  // 既定のオプションには * が付いています
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data) // 本文のデータ型は "Content-Type" ヘッダーと一致する必要があります
  })
  return response.json(); // レスポンスの JSON を解析
}

















