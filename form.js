var submitted=false;
function createform(divname,productname,price){
	var data = "<fieldset><legend>Đặt mua sản phẩm</legend>";
	data += "<p>Để đặt mua sản phẩm này, bạn vui lòng điền đầy đủ thông tin vào mẫu dưới đây. Sau đó bấm nút ĐẶT MUA. Chúng tôi sẽ liên lạc lại với bạn để xác nhận đơn hàng.</p>";
	data += "<form action='https://weblamdep.net/form.php' id='postorder' name='postorder' method='post' onsubmit='return validateForm();' target='hidden_iframe'>";
	data += "<input id='url' name='url' value='" + window.location.href + "' type='hidden'/>";
	data += "<input id='sanpham' name='sanpham' value='" + productname + "' type='hidden'/>";
	data += "<input id='dongia' name='dongia' value='"+price+"' type='hidden'/>";
	data += "<div class='item'><label>Họ Tên:</label><input id='hoten' name='hoten' type='text' class='Field300'/></div>";
	data += "<div class='item'><label>Điện thoại:</label><input id='dienthoai' name='dienthoai' class='Field100' type='text'/></div>";
	data += "<div class='item'><label>Địa chỉ:</label><input id='diachi' name='diachi' class='Field300' type='text'/></div>";
	data += "<div class='item'><label>Số lượng:</label><input id='soluong' name='soluong' value='1' class='Field50' type='text'/></div>";
	data += "<div class='item'><label>Ghi chú:</label><textarea class='noidung' id='noidung' name='noidung' rows='3' cols='30'></textarea></div>";
	data += "<hr/><input id='submit' name='submit' type='submit' value='Đặt mua' />";
	data += "</form>";
	data +="</fieldset>";
	data += "<iframe id='hidden_iframe' name='hidden_iframe' onload='if(submitted) {window.location=window.location.href;alert(\"Bạn đã thực hiện đặt hàng thành công. Chúng tôi sẽ liên lạc lại với bạn để xác nhận đơn hàng. Cảm ơn bạn!\")}' style='display:none;' />";
	document.getElementById(divname).innerHTML = data;
}
function validateForm() {
  var x = document.forms["postorder"]["hoten"].value;
  if (x == "") {
    alert("Bạn phải nhập họ tên");
    return false;
  }
  var y = document.forms["postorder"]["dienthoai"].value;
  if (y == "") {
    alert("Bạn phải nhập điện thoại");
    return false;
  }
  var z = document.forms["postorder"]["diachi"].value;
  if (z == "") {
    alert("Bạn phải nhập địa chỉ");
    return false;
  }
	submitted=true;
}