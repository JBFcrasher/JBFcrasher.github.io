//example time: JBFcrasher N64 Thunder Park Damn the Torpedoes 1:23.45


function applycss(){
    let nidttp1r ="JBFcrasher";
    let time="1:23.45";
    
    document.getElementById("nibftp1").classList.add('AxlThunder');
    document.getElementById("nibfli1").classList.add('AxlThunder');
    document.getElementById("nibfac1").classList.add('AxlThunder');
    document.getElementById("nibfgi1").classList.add('AxlThunder');
    document.getElementById("nibflp1").classList.add('AxlThunder');
    document.getElementById("nibffe1").classList.add('AxlThunder');
    document.getElementById("nibfsg1").classList.add('AxlThunder');
    document.getElementById("nibfvc1").classList.add('AxlThunder');
    document.getElementById("nibfny1").classList.add('AxlThunder');
    document.getElementById("nibfcc1").classList.add('AxlThunder');
    document.getElementById("nibfhs1").classList.add('AxlThunder');
    document.getElementById("nibfna1").classList.add('AxlThunder');

    
    document.getElementById("nitbli1").classList.add('Lazy');
    document.getElementById("nitbac1").classList.add('Lazy');
    document.getElementById("nitbgi1").classList.add('Lazy');
    document.getElementById("nitbfe1").classList.add('Lazy');
    document.getElementById("nitbna1").classList.add('Lazy');


    document.getElementById("nictgi1").classList.add('Inphlox');
    document.getElementById("nirhgi1").classList.add('Inphlox');
    document.getElementById("nibfcd1").classList.add('Inphlox');
    
    
 
   document.getElementById("nirhfe1").classList.add('Gamedraco');
    document.getElementById("nirhac1").classList.add('Gamedraco');

    

    //document.getElementById("nidttp1").classList.add('JBFcrasher'); document.GetElementById("nidttp1l").innerHTML = "1:12.29";
  document.getElementById("nidttp1l").textContent = time; document.getElementById("nidttp1").classList.add(nidttp1r);
}


