<script>

	h = parseInt(prompt("heures (0 à 23) : "))
	m = parseInt(prompt("minutes (0 à 59) : "))
	s = parseInt(prompt ("seconde(59) : "))

if (s>=59)
	    {
        s=0;
		m= m+1;
		}
	else{
		s=s+1
	}
if(m>=59)
	
	{
		alert('il est passé par là !');
		m = 0;
		h = h+1;	
	}
	else{
		m = m+1
	}
	
	alert (h)
	alert (m)
	alert(s)
	</script>