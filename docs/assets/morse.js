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
      const text_kata = text.replace(/[ぁ-ん]/g, function(s) {
        return String.fromCharCode(s.charCodeAt(0) + 0x60);
      });
      const morse = Array.prototype.map.call(text_kata,(c)=>{
        return morse_obj[c];
      });
      const morse_space = morse.join("　")
      console.log(morse_space);
      document.getElementById("result").style.display = "initial";
      document.getElementById("result").innerText = morse_space;
    },
    false);

}




















