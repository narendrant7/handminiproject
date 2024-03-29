<?php
require_once 'db.php';
require_once 'uploads.php';
session_start();
if($_SERVER["REQUEST_METHOD"] == "POST"){ 
	if(isset($_SESSION['loggedin']) && $_SESSION['loggedin']==TRUE) {
	$pname=$_POST['pname'];
	$category=$_POST['category'];
	$description=$_POST['description'];
	$rpd=$_POST['drent'];
	$rpw=$_POST['wrent'];
	$rpm=$_POST['mrent'];
	$actual=$_POST['price'];
	$bond=$_POST['bond'];
	if ($bond=='on') {
		$bond=TRUE;
	}else{$bond=FALSE;}

	$location=$_POST['location'];
	$alt_address=$_POST['alt_address'];
	$uid=$_SESSION['uid'];
	$renterror='';
	if ($rpd<0 || !is_numeric($rpd)) {
		$renterror=$renterror.'<br>Invalid Daily Rent';
	}
	if ($rpw<0 || !is_numeric($rpw)) {
		$renterror=$renterror.'<br>Invalid Weekly Rent';
	}
	if ($rpm<0 || !is_numeric($rpm)) {
		$renterror=$renterror.'<br>Invalid Monthly Rent';
	}
		if ($actual<0 || !is_numeric($actual)) {
		$renterror=$renterror.'<br>Invalid Monthly Rent';
	}

	$sql = "INSERT INTO Product(u_ID,pname,category,description,price_day,price_week,price_month,actual_price,bond,location)VALUES(?,?,?,?,?,?,?,?,?,?);";
	$stmt=$conn->prepare($sql);
	$stmt->bind_param('ssssssssss',$uid,$pname,$category,$description,$rpd,$rpw,$rpm,$actual,$bond,$location);
	if(!$stmt->execute()){
			echo $stmt->error;
		}
	$pid=$stmt->insert_id;
	$image=upload_prod_images($pid);
	if($image!="")
		$renterror=$renterror.'<br>'.$image;
	$stmt->close();
	$conn->close();
	if ($renterror!='') {
	$_SESSION['renterror']=$renterror;
	header("Location: addproduct.php");
	}else{
		$_SESSION['renterror']='';
	//echo $renterror;exit();
	header("Location: myaccount.php");		
	}	
}
else{
	header("Location: index.php");
}
}
?>