   var button_1 = document.getElementById("button_1");

      button_1.onclick = function() {
        shoot();
      }

      function callback(text){
        var result=document.getElementById("result");
        result.value=text
      }

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
