const morse_obj = {"イ":"・－",
"ロ":"・－・－",
"ハ":"－・・・",
"ニ":"－・－・",
"ホ":"－・・",
"ヘ":"・",
"ト":"・・－・・",
"チ":"・・－・",
"リ":"－－・",
"ヌ":"・・・・",
"ル":"－・－－・",
"ヲ":"・－－－",
"ワ":"－・－",
"カ":"・－・・",
"ヨ":"－－",
"タ":"－・",
"レ":"－－－",
"ソ":"－－－・",
"ツ":"・－－・",
"ネ":"－－・－",
"ナ":"・－・",
"ラ":"・・・",
"ム":"－",
"ウ":"・・－",
"ヰ":"・－・・－",
"ノ":"・・－－",
"オ":"・－・・・",
"ク":"・・・－",
"ヤ":"・－－",
"マ":"－・・－",
"ケ":"－・－－",
"フ":"－－・・",
"コ":"－－－－",
"エ":"－・－－－",
"テ":"・－・－－",
"ア":"－－・－－",
"サ":"－・－・－",
"キ":"－・－・・",
"ユ":"－・・－－",
"メ":"－・・・－",
"ミ":"・・－・－",
"シ":"－－・－・",
"ヱ":"・－－・・",
"ヒ":"－－・・－",
"モ":"－・・－・",
"セ":"・－－－・",
"ス":"－－－・－",
"ン":"・－・－・",
"゛":"・・",
"゜":"・・－－・"
};

const object2 = Object.fromEntries(
  Object.entries(morse_obj)
  .map(([ key, val ]) => [val,key])
);
console.log(object2);

function init(){

  const btn = document.getElementById("btn");
  btn.addEventListener("click",
    function(){
      const text = document.getElementById("text").value;
      const data = {"app_id":"c31834d1765b52b67c936dcfc66d9e63fb624fb957157c2a700f2d9296d3f8db","sentence":text, "output_type":"katakana"};
      postData('https://labs.goo.ne.jp/api/hiragana', data)
          .then(res => {
            console.log(res); // `data.json()` の呼び出しで解釈された JSON データ
      });
      const text_kata = text.replace(/[ぁ-ん]/g, function(s) {
        return String.fromCharCode(s.charCodeAt(0) + 0x60);
      });
      const morse = Array.prototype.map.call(text_kata,(c)=>{
        return morse_obj[c];
      });
      const morse_space = morse.join("　")
      console.log(morse_space);
      document.getElementById("result").style.display = "block";
      document.getElementById("result").innerText = morse_space;
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

















