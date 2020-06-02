<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link href="/sasalapja/Warriors/items/style.css" rel="stylesheet" type="text/css" media="screen" />
<script>
		if (top.location != self.location)
			top.location = self.location;
	</script>
<title>Untitled Document</title>
</head>

<body>
<div id="container" style="border:thin">

<div id="content"  align="center">
<div id="top" style="background:#009">Üdv az oldalon</div>
<!--ContentLeft menu-->
 <div id="content_left">
 
	<?php
		$menu=array(
		"TeamSpeak"=>"?p=",
		"Szövetségek-MNT"=>"?p=",
		"Inaktivitás"=>"?p=",
		"Vár fejlesztés"=>"?p=",
		"Támadás-Védés"=>"?p=",
		"Kutatás"=>"?p=",
		"Heti-Havi jelentés"=>"?p="
								);
    ?>
    <table id="menutable">
        <?php
            $i=1;
            foreach($menu as $key=>$item)
            {
                print "<tr class=\"menu\">\n";
                print "<td class=\"menucell\" onclick=\"window.location='$item".$i."'\">$key</td>\n";
                print "</tr>\n";
                $i++;
            }
        ?>                  
    </table>
</div>
<!--ContentRight Tartalom-->
<div id="content_right">
<?php
	aaa
?>
</div>


<!--Bottom Lábléc-->
<div id="bottom"><h5>Szab&aacute;lyzat [2016.08.14.] &mdash; Utols&oacute; m&oacute;dos&iacute;t&aacute;s: 2017.09.06 </h5></div>    
</div>
</div>
</body>
</html>
