<?php
  // تأكد من أن اسم المستخدم وكلمة المرور ليسا فارغين.
  if (empty($_POST['seif']) || empty($_POST['ssss'])) {
    echo "يرجى إدخال اسم المستخدم وكلمة المرور.";
    exit;
  }

  // احصل على اسم المستخدم وكلمة المرور من نموذج تسجيل الدخول.
  $username = $_POST['seif'];
  $password = $_POST['ssss'];

  // تحقق من صحة اسم المستخدم وكلمة المرور في قاعدة البيانات.
  $sql = "SELECT * FROM users WHERE username = '$seif' AND password = '$ssss'";
  $result = mysqli_query($conn, $sql);

  // إذا كان المستخدم موجودًا في قاعدة البيانات، فأعد توجيهه إلى الصفحة الرئيسية.
  if (mysqli_num_rows($result) == 1) {
    session_start();
    $_SESSION['username'] = $username;
    header("Location: index.htm");
  } else {
    echo "اسم المستخدم أو كلمة المرور غير صحيحين.";
  }
?>
