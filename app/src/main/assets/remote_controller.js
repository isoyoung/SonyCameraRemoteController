   var button_1 = document.getElementById("button_1");

      button_1.onclick = function() {
        shoot();
      }

      // Postview画像を表示する
      function show_image(url){
        //document.write("<img src=" + url + " width=100 height=100>");
        var img=document.getElementById("result_image");
        img.src=url;
      }

      function callback(result){
//        var result=document.getElementById("result");
//        result.value=text.

          var result_area = document.getElementById("result");
          result_area.value = extract_url(result);

          show_image(extract_url(result));
      }

      // 結果からURLだけを抽出する
      function extract_url(result){
        var json = JSON.parse(result);
        return json["result"]
      }

      // 写真の撮影をする
      function shoot() {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
          if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
              callback(xmlhttp.responseText);
          }
      };
        //xmlhttp.open('POST', 'http://10.0.0.1:10000/sony/camera'false);
        xmlhttp.open('POST','http://192.168.122.1:10000/sony/camera');
        xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

        xmlhttp.send(JSON.stringify({
          "method": "actTakePicture",
          "params": [],
          "id": 10000,
          "version": "1.0"
          }));
      }
