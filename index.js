function onSubmit() {
    // تحقق من صحة اسم المستخدم وكلمة المرور.
    if (empty(document.getElementById("username").value) ||
        empty(document.getElementById("password").value)) {
      alert("يرجى إدخال اسم المستخدم وكلمة المرور.");
      return false;
    }
  
    // أرسل بيانات النموذج إلى صفحة "login.php".
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "index.htm");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("username=" + document.getElementById("username").value +
              "&password=" + document.getElementById("password").value);
  
    // إذا نجح تسجيل الدخول، فأعد توجيه المستخدم إلى الصفحة الرئيسية.
    xhr.onload = function() {
      if (xhr.status === 200) {
        location.href = "index.php";
      } else {
        alert("حدث خطأ أثناء تسجيل الدخول.");
      }
    };
  }
  
  // اربط الزر "تسجيل الدخول" بوظيفة onSubmit().
  document.getElementById("submit").onclick = onSubmit;
  