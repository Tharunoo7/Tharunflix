function nextStep() {
    document.getElementById("registrationForm").style.display = "none";
    document.getElementById("phoneForm").style.display = "block";
}

function showColleges() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    if (name && email && phone) {
        document.getElementById("phoneForm").style.display = "none";
        document.getElementById("collegeList").style.display = "block";

        let colleges = [
            { name: "VNR VJIET", image: "https://cache.careers360.mobi/media/colleges/reviews/2021/6/4/162286/Untitled.jpg", link: "https://vnrvjiet.ac.in" },
            { name: "Gokaraju Rangaraju", image: "https://campushunt.in/photogallery/Gokaraju%203.jpg", link: "https://www.griet.ac.in" },
            { name: "CBIT", image: "https://www.cbit.ac.in/wp-content/uploads/2019/01/gal-image-1-1024x683.jpg", link: "https://www.cbit.ac.in" },
            { name: "BVRIT", image: "https://media.getmyuni.com/reviews/113544__41671/1660875351IMG_20220819_074459.jpg", link: "https://www.bvrit.ac.in" },
            { name: "IIIT Hyderabad", image: "https://gumlet.assettype.com/freepressjournal/2020-03/62a1e8a8-f47c-4285-99b6-fbe8f755611f/IIT.jpg", link: "https://www.iiit.ac.in" },
            { name: "IIT Hyderabad", image: "https://i.ytimg.com/vi/Ax6KK03svL4/maxresdefault.jpg", link: "https://www.iith.ac.in" },
            { name: "Osmania University", image: "https://c8.alamy.com/comp/BR3JPG/university-college-of-arts-and-social-sciences-osmania-university-BR3JPG.jpg", link: "https://www.osmania.ac.in" },
            { name: "BITS Hyderabad", image: "https://th.bing.com/th/id/OIP.6VPmd7vBXWjgqExSPk2bdAHaEK?rs=1&pid=ImgDetMain", link: "https://www.bits-pilani.ac.in/hyderabad/" },
            { name: "CVR College of Engineering", image: "https://th.bing.com/th/id/OIP.Xx6bjp5bHHlIILiY1qGQ4wAAAA?rs=1&pid=ImgDetMain", link: "https://www.cvr.ac.in" },
            { name: "Mahatma Gandhi Institute of Technology", image: "https://th.bing.com/th/id/OIP.fqhWOiKQSUbEKuSYdz2WgAHaDz?rs=1&pid=ImgDetMain", link: "https://www.mgit.ac.in" },
            { name: "Vasavi College of Engineering", image: "https://th.bing.com/th/id/OIP.Zq3ZR9Ujd5ZzgNfO8LaufgHaEc?rs=1&pid=ImgDetMain", link: "https://www.vce.ac.in" },
            { name: "Vardhaman College of Engineering", image: "https://akm-img-a-in.tosshub.com/sites/resources/campus/prod/img/campusview/2023/10/2d34113ac9472410409632356.png", link: "https://www.vardhaman.org" },
            { name: "JNTU Hyderabad", image: "https://img.collegepravesh.com/2021/06/JNTU-Hyderabad.jpg", link: "https://jntuh.ac.in" },
            { name: "GRIET", image: "https://gyaanarth.com/wp-content/uploads/2022/06/griet_01-1.jpg", link: "https://www.griet.ac.in" },
            { name: "MREC", image: "https://th.bing.com/th/id/OIP.2UXIFFsU1L0ImWDob-jDyQHaE8?rs=1&pid=ImgDetMain", link: "https://www.mrec.ac.in" },
            { name: "Sreenidhi Institute of Science & Technology", image: "https://media.getmyuni.com/azure/college-image/big/sreenidhi-institute-of-science-and-technology-snist-hyderabad.jpg", link: "https://www.sreenidhi.edu.in" },
            { name: "KMIT", image: "https://th.bing.com/th/id/OIP.cptB8Re1oHtSTXFPjyWbsAHaCR?rs=1&pid=ImgDetMain", link: "https://www.kmit.in" },
            { name: "IARE", image: "https://th.bing.com/th/id/OIP.K--SZvg54LHxfPuOLUaFTQHaCV?rs=1&pid=ImgDetMain", link: "https://www.iare.ac.in" },
            { name: "Anurag University", image: "https://th.bing.com/th/id/OIP.PmNZPP_uN7pmzq8pEKFLeQHaEa?rs=1&pid=ImgDetMain", link: "https://www.anurag.edu.in" }
        ];

        let collegeDiv = document.getElementById("colleges");
        collegeDiv.innerHTML = "";
        let rowDiv = null;

        colleges.forEach((college, index) => {
            if (index % 3 === 0) {
                rowDiv = document.createElement("div");
                rowDiv.classList.add("college-row");
                collegeDiv.appendChild(rowDiv);
            }

            let collegeHTML = `
                <div class="college">
                    <h3>${college.name}</h3>
                    <a href="${college.link}" target="_blank">
                        <img src="${college.image}" alt="${college.name}">
                    </a>
                </div>
            `;
            rowDiv.innerHTML += collegeHTML;
        });

        console.log("New Registration:", { name, email, phone });
    } else {
        alert("Please fill in all details.");
    }
}
