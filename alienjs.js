   <script>
      var n=60;
        var y= 300;
            var guess=document.getElementById("guess");
            var missel=document.getElementById("missel");
        var canon=document.getElementById("canon");
        var alien=document.getElementById("alien");
            set();
            function set(){
                var x=Math.floor(Math.random()*100);
      
            alien.style.left=x+"px";
            y=y-30;
                if(y==0)
                    {
                        prompt("game over");
                    }
            alien.style.bottom=y+"px";
            
           
                var q=prompt("enter your guess");
                var z=prompt("enter axises");
               
                canon.style.left=q+"px";
                missel.style.left=q+"px";
                
                if((q>=x-10 &&q<=x+40))//& (z>=y && z<=y+40))*/
                    {   alert(y);
                        var o=setInterval(hit,30);
                      
                     
                    }
                else{
                    set();
                }
           }
    
            function hit(){
                if(n>=y-20 && n<=y)
                    {  alert("game over");
                       
                        
                        clearInterval(o);
                      
                    }
                missel.style.bottom=n+"px";
                n=n+4;
            }
