function calculateAge() {
    let calInput = document.getElementById('cal').value;
    
    if (calInput === "") {
        alert("Please enter your date of birth.");
        return;
    }

    
    let birthDate = new Date(calInput);
    let today = new Date();

    
    let ageInYears = today.getFullYear() - birthDate.getFullYear();
    let ageInMonths = today.getMonth() - birthDate.getMonth();
    let ageInDays = today.getDate() - birthDate.getDate();

  
    if (ageInDays < 0) {
        ageInMonths -= 1;
        let previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        ageInDays += previousMonth.getDate();
    }

    if (ageInMonths < 0) {
        ageInYears -= 1;
        ageInMonths += 12;
    }

    
    document.getElementById('age-result').innerHTML = 
        `Your age is ${ageInYears} years, ${ageInMonths} months, and ${ageInDays} days.`;

    
    let nextBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
    
    
    if (today > nextBirthday) {
        nextBirthday.setFullYear(today.getFullYear() + 1);
    }


    let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let nextBirthdayDay = daysOfWeek[nextBirthday.getDay()];

    
    let timeDifference = nextBirthday - today;
    let daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

   
    document.getElementById('birthday-result').innerHTML = 
        `Your next birthday is on ${nextBirthday.toDateString()} (${nextBirthdayDay}).<br> ${daysRemaining} days remaining until your next birthday.`;
}
