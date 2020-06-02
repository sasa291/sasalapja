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