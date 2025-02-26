

        // Get URL parameters


        const urlParams = new URLSearchParams(window.location.search);
        
        const message = urlParams.get('name');
        
        // Display message in the paragraph
    let name = document.getElementById('Username').textContent =  message ? message: "Username";
    document.getElementById('Unames').textContent = `${name}`
    
    
        const village = urlParams.get('village');
    
    // Display message in the paragraph
    let villagen = document.getElementById('village').textContent = village ? village : "undefine";
    
            const mail = urlParams.get('email');

    // Display message in the paragraph
    let email = document.getElementById('email').textContent = mail ? mail: "abc";
    alert(`Welcome ${name}!`);
  