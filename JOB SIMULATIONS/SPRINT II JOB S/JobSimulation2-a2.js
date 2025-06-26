 function display()
        {
            let dateTime=new Date();
            let hours=dateTime.getHours();
            let minutes=zero(dateTime.getMinutes());
            let seconds=zero(dateTime.getSeconds());
            let ampm=document.getElementById('ampm');
            if(hours>12)
            {
                hours=hours-12;
                ampm.innerHTML='PM';
            }
            document.getElementById('hr').innerHTML=zero(hours);
            document.getElementById('min').innerHTML=minutes;
            document.getElementById('sec').innerHTML=seconds;
        }
        function zero(num)
        {
          return num<10?'0'+num:num;
        }

        setInterval(display,500);