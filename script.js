let tablinks = document.getElementsByClassName("tab-links");
        let tabcontent = document.getElementsByClassName("tab-content");

        function opentab(tabname){
            for(tabLink of tablinks){
                tabLink.ClassList.remove("active-link");
            }
            for(tabContents of tabcontent){
                tabContents.ClassList.remove("active-tab")
            }
            event.currentTarget.ClassList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab")
        } 

        var sidemenu = document.getElementById("sidemenu");

        function openmenu(){
            sidemenu.style.right = "0";
        }
        function closemenu(){
            sidemenu.style.right = "-200px";
        }