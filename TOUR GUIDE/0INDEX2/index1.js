let index = document.getElementById("home");
    index.addEventListener("click", ()=>{
        window.open("/0INDEX/index.html")
    })
    // let login = document.getElementById("llin");
    // login.addEventListener("click",()=>{
    //     window.open("/LOGIN/login.html")
    // })
    let signup = document.getElementById("signup");
    signup.addEventListener("click",()=>{
        window.location.href = "/SIGNUP/SIGNUP.HTML";
    })
    let highlight = document.getElementById("high");
    highlight.addEventListener("click",()=>{
        window.location.href="/HIGHLIGHT/highlight.html";
    })
    let feedback = document.getElementById("feedback");
    feedback.addEventListener("click",()=>{
        window.location.href="/FEEDBACK/feedback.html"
    })










    document.getElementById("andhra").addEventListener("click",()=>{
        window.location.href = "/ANDHAR PRADESH/Andhra Pradesh.html";
    })
    document.getElementById("anurachal").addEventListener("click",()=>{
        window.location.href = "/ARUNACHAL PRADESH/Arunachal Pradesh.html";
    })
    document.getElementById("assam").addEventListener("click",()=>{
        window.location.href = "/ASSAM/Assam.html";
    })
    document.getElementById("bihar").addEventListener("click",()=>{
        window.location.href = "/BIHAR/Bihar.html";
    })
    document.getElementById("chandigarh").addEventListener("click",()=>{
        window.location.href = "/CHANDIGARH/Chandigarh.html";
    })
    document.getElementById("chattisgarh").addEventListener("click",()=>{
        window.location.href = "/CHHATTISGHAR/Chhattisgarh.html";
    })
    document.getElementById("goa").addEventListener("click",()=>{
        window.location.href = "/GOA/Goa.html";
    })
    document.getElementById("gujrat").addEventListener("click",()=>{
        window.location.href = "/GUJRAT/Gujarat.html";
    })
    document.getElementById("haryana").addEventListener("click",()=>{
        window.location.href = "/HARYANA/Haryana.html";
    })
    document.getElementById("himachal").addEventListener("click",()=>{
        window.location.href = "/HIMACHAL PRADESH/Himachal Pradesh.html";
    })
    document.getElementById("jharkhand").addEventListener("click",()=>{
        window.location.href = "/JHARKHAND/Jharkhand.html";
    })
    document.getElementById("karnataka").addEventListener("click",()=>{
        window.location.href = "/KARNATAKA/Karnataka.html";
    })
    document.getElementById("kerla").addEventListener("click",()=>{
        window.location.href = "/KERALA/Kerala.html";
    })
    document.getElementById("madhya").addEventListener("click",()=>{
        window.location.href = "/MADHYA PRADESH/Madhya Pradesh.html";
    })
    document.getElementById("maharastra").addEventListener("click",()=>{
        window.location.href = "/MAHARASHTRA/Maharashtra.html";
    })
    document.getElementById("manipur").addEventListener("click",()=>{
        window.location.href = "/MANIPUR/Manipur.html";
    })
    document.getElementById("meghalaya").addEventListener("click",()=>{
        window.location.href = "/MEGHALAYA/Meghalaya.html";
    })
    document.getElementById("mizoram").addEventListener("click",()=>{
        window.location.href = "/MIZORAM/Mizoram.html";
    })
    document.getElementById("nagaland").addEventListener("click",()=>{
        window.location.href = "/NAGALAND/Nagaland.html";
    })
    document.getElementById("odisha").addEventListener("click",()=>{
        window.location.href = "/ODISHA/Odisha.html";
    })
    document.getElementById("pudu").addEventListener("click",()=>{
        window.location.href = "/PUDUCHERRY/Puducherry.html";
    })
    document.getElementById("punjab").addEventListener("click",()=>{
        window.location.href = "/PUNJAB/Punjab.html";
    })
    document.getElementById("rajasthan").addEventListener("click",()=>{
        window.location.href = "/RAJASTHAN/Rajasthan.html";
    })
    document.getElementById("sikkim").addEventListener("click",()=>{
        window.location.href = "/SIKKIM/Sikkim.html";
    })
    document.getElementById("tamil").addEventListener("click",()=>{
        window.location.href = "/TAMIL NADU/Tamil Nadu.html";
    })
    document.getElementById("telangana").addEventListener("click",()=>{
        window.location.href = "/TELANGANA/Telangana.html";
    })
    document.getElementById("tripura").addEventListener("click",()=>{
        window.location.href = "/TRIPURA/Tripura.html";
    })
    document.getElementById("uttrakhand").addEventListener("click",()=>{
        window.location.href = "/UTTRAKHAND/Uttarakhand.html";
    })
    document.getElementById("uttarpradesh").addEventListener("click",()=>{
        window.location.href = "/UTTAR PRADESH/Uttar Pradesh.html";
    })
    document.getElementById("westbengal").addEventListener("click",()=>{
        window.location.href = "/WESTBENGAL/West Bengal.html";
    })
    document.getElementById("andaman").addEventListener("click",()=>{
        window.location.href = "/ANDAMAN AND NICOBAR/Andaman and Nicobar Islands.html";
    })
    document.getElementById("chandigarh").addEventListener("click",()=>{
        window.location.href = "/CHANDIGARH/Chandigarh.html";
    })
    document.getElementById("daman").addEventListener("click",()=>{
        window.location.href = "/DADAR AND NAGAR HAVELI AND DAMAN AND DIU/Dadra and Nagar Haveli and             Daman & Diu.html";
    })
    document.getElementById("delhi").addEventListener("click",()=>{
        window.location.href = "/THE GOVT OF DELHI/The Government of NCT of Delhi.html";
    })
    document.getElementById("jammu").addEventListener("click",()=>{
        window.location.href = "/JAMMU AND KASHMIR/Jammu & Kashmir.html";
    })
    document.getElementById("ladakh").addEventListener("click",()=>{
        window.location.href = "/LADAKH/Ladakh.html";
    })
    document.getElementById("lakshyadeep").addEventListener("click",()=>{
        window.location.href = "/LAKSHADWEEP/Lakshadweep.html";
    })
    document.getElementById("puducherry").addEventListener("click",()=>{
        window.location.href = "/PUDUCHERRY/Puducherry.html";
    })
    const menuIcon = document.getElementById('menu-icon');
    const nav = document.querySelector('nav');
    
    // Toggle menu on clicking the hamburger icon
    menuIcon.addEventListener('click', function() {
        nav.classList.toggle('show-menu');
    });
    
    // Close the menu when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!nav.contains(event.target) && !menuIcon.contains(event.target)) {
            nav.classList.remove('show-menu');
        }
    });
    