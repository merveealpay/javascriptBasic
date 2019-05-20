function sayiUret(ustLimit=49)
{
    return Math.ceil(Math.random()*ustLimit)
}

//console.log(sayiUret())
for(var j=1;j<=8;j++)
{
    console.log(j+ ".Kolon")
    for(var i=1;i<=6;i++)
    {
        console.log(sayiUret())
    }
    
}
