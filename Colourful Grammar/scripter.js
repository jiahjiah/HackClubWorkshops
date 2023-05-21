//takeaways: jQuery can change CSS from JS file

const wordpos = new WordPOS({
    dictPath: 'https://cdn.jsdelivr.net/npm/wordpos-web@1.0.2/dict'
    // dollar sign in js usually means jQuery
  })
  
  //when document is loaded
  $(document).ready(() => {
    updateBackground = () => {
      //uses jQuery to get value of text area (which has id "sentence")
      //could use document.getElementById(“sentence”) but jQuery makes things easier
      let sentence = $("#sentence").val()
      wordpos.getPOS(sentence).then(types => {
        const leftGradient =
          types.verbs.length +
          types.adverbs.length +
          types.nouns.length +
          types.adjectives.length
  
        //use backticks and ${variable} to concatenate strings
        $("body").css("background-image", `linear-gradient(to right,
          hsl(${leftGradient}, 100%, 80%), hsl(${leftGradient*10}, 100%, 80%)
        `)
        
        //$('body').css('background-color', `hsl(${leftGradient}, 100%, 50%)`)
  
      })
    }
    updateBackground()
    //when new letter is typed, updateBackground
    $("#sentence").on("keydown", updateBackground)
  })
    