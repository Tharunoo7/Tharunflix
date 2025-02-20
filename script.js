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
            { name: "VNR VJIET", image: "https://cache.careers360.mobi/media/colleges/reviews/2021/6/4/162286/Untitled.jpg" },
            { name: "Gokaraju Rangaraju", image: "https://campushunt.in/photogallery/Gokaraju%203.jpg" },
            { name: "CBIT", image: "https://www.cbit.ac.in/wp-content/uploads/2019/01/gal-image-1-1024x683.jpg" },
            { name: "BVRIT", image: "https://media.getmyuni.com/reviews/113544__41671/1660875351IMG_20220819_074459.jpg" }
            { name:  "CMRK"  image: "https://gyaanarth.com/wp-content/uploads/2022/06/CMR_01.jpg"}
        ];

        let collegeDiv = document.getElementById("colleges");
        collegeDiv.innerHTML = "";
        colleges.forEach(college => {
            collegeDiv.innerHTML += `<div><h3>${college.name}</h3><img src="${college.image}" alt="${college.name}"></div>`;
        });

        // Send entered details to admin (you)
        console.log("New Registration:");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Phone:", phone);
    } else {
        alert("Please fill in all details.");
    }
}
