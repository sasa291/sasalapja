 <div id="content_left">
 
<?php
$menu=array(
"TeamSpeak"=>"?p=",
"Sz�vets�gek-MNT"=>"?p=",
"Inaktivit�s"=>"?p=",
"V�r fejleszt�s"=>"?p=",
"T�mad�s-V�d�s"=>"?p=",
"Kutat�s"=>"?p=",
"Heti-Havi jelent�s"=>"?p="
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