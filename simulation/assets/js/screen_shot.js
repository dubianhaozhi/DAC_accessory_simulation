// 参考サイト:
// - https://qiita.com/youwht/items/8b681a856f59aa82d671
// - https://javascript.keicode.com/newjs/download-files.php

$('#simulation__save').click(function() {
  html2canvas($('#simulation__target'), {
    onrendered: function(canvas) {
      const imgData = canvas.toDataURL()
      const a = document.createElement("a")
      document.body.appendChild(a)
      a.download = 'simulation.png'
      a.href = imgData
      a.click()
      a.remove()
    }
  })
})