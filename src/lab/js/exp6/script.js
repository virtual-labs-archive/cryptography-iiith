function show ( section )
{
	var sections = ['intro', 'theory', 'objective', 'simulation', 'manual', 'quiz', 'readings'];
	if ( section == 'intro' )
	{
		document.getElementById(sections[0]).style.display = "block";
		document.getElementById(sections[1]).style.display = "none";
		document.getElementById(sections[2]).style.display = "none";
		document.getElementById(sections[3]).style.display = "none";
		document.getElementById(sections[4]).style.display = "none";
		document.getElementById(sections[5]).style.display = "none";
		document.getElementById(sections[6]).style.display = "none";
	}
	else if ( section == 'theory' )
	{
		document.getElementById(sections[0]).style.display = "none";
		document.getElementById(sections[1]).style.display = "block";
		document.getElementById(sections[2]).style.display = "none";
		document.getElementById(sections[3]).style.display = "none";
		document.getElementById(sections[4]).style.display = "none";
		document.getElementById(sections[5]).style.display = "none";
		document.getElementById(sections[6]).style.display = "none";
	}
	else if ( section == 'objective' )
	{
		document.getElementById(sections[0]).style.display = "none";
		document.getElementById(sections[1]).style.display = "none";
		document.getElementById(sections[2]).style.display = "block";
		document.getElementById(sections[3]).style.display = "none";
		document.getElementById(sections[4]).style.display = "none";
		document.getElementById(sections[5]).style.display = "none";
		document.getElementById(sections[6]).style.display = "none";
	}
	else if ( section == 'simulation' )
	{
		document.getElementById(sections[0]).style.display = "none";
		document.getElementById(sections[1]).style.display = "none";
		document.getElementById(sections[2]).style.display = "none";
		document.getElementById(sections[3]).style.display = "block";
		document.getElementById(sections[4]).style.display = "none";
		document.getElementById(sections[5]).style.display = "none";
		document.getElementById(sections[6]).style.display = "none";
	}
	else if ( section == 'manual' )
	{
		document.getElementById(sections[0]).style.display = "none";
		document.getElementById(sections[1]).style.display = "none";
		document.getElementById(sections[2]).style.display = "none";
		document.getElementById(sections[3]).style.display = "none";
		document.getElementById(sections[4]).style.display = "block";
		document.getElementById(sections[5]).style.display = "none";
		document.getElementById(sections[6]).style.display = "none";
	}
	else if ( section == 'quiz' )
	{
		document.getElementById(sections[0]).style.display = "none";
		document.getElementById(sections[1]).style.display = "none";
		document.getElementById(sections[2]).style.display = "none";
		document.getElementById(sections[3]).style.display = "none";
		document.getElementById(sections[4]).style.display = "none";
		document.getElementById(sections[5]).style.display = "block";
		document.getElementById(sections[6]).style.display = "none";
	}
	else if ( section == 'readings' )
	{
		document.getElementById(sections[0]).style.display = "none";
		document.getElementById(sections[1]).style.display = "none";
		document.getElementById(sections[2]).style.display = "none";
		document.getElementById(sections[3]).style.display = "none";
		document.getElementById(sections[4]).style.display = "none";
		document.getElementById(sections[5]).style.display = "none";
		document.getElementById(sections[6]).style.display = "block";
	}
}
