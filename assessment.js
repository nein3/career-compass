const questions = [

    {
    question: "I enjoy studying, researching, and learning new academic concepts.",
    category: "college"
    },
    
    {
    question: "I want to continue my education and earn a college degree.",
    category: "college"
    },
    
    {
    question: "I am interested in finding a job and gaining work experience immediately.",
    category: "work"
    },
    
    {
    question: "I want to develop professional skills through employment.",
    category: "work"
    },
    
    {
    question: "I want to improve my skills before deciding my next step.",
    category: "gap"
    },
    
    {
    question: "I am interested in training programs, certifications, or volunteering.",
    category: "gap"
    },
    
    {
    question: "I enjoy creating projects and building my skills independently.",
    category: "gap"
    },
    
    {
    question: "I want to explore different opportunities before committing to one path.",
    category: "gap"
    }
    
    ];
    
    
    
    let currentQuestion = 0;
    
    
    let scores = {
    
    college:0,
    
    work:0,
    
    gap:0
    
    };
    
    
    
    
    
    const questionText = document.getElementById("question");
    
    const buttons = document.querySelectorAll(".answer");
    
    const progressBar = document.getElementById("progressBar");
    
    const resultCard = document.getElementById("resultCard");
    
    const resultTitle = document.getElementById("resultTitle");
    
    const resultDescription = document.getElementById("resultDescription");
    
    const resultButton = document.getElementById("resultButton");
    
    
    
    
    
    
    
    function loadQuestion(){
    
    
    if(currentQuestion < questions.length){
    
    
    questionText.innerHTML =
    
    (currentQuestion + 1) +
    ". " +
    questions[currentQuestion].question;
    
    
    
    let progress =
    
    ((currentQuestion) / questions.length) * 100;
    
    
    progressBar.style.width = progress + "%";
    
    
    progressBar.innerHTML =
    
    Math.round(progress) + "%";
    
    
    
    }
    
    else{
    
    
    showResult();
    
    }
    
    
    }
    
    
    
    
    
    
    
    
    buttons.forEach(button => {
    
    
    button.addEventListener("click", function(){
    
    
    let score = Number(this.dataset.score);
    
    
    let category = questions[currentQuestion].category;
    
    
    
    scores[category] += score;
    
    
    
    currentQuestion++;
    
    
    loadQuestion();
    
    
    
    });
    
    
    });
    
    
    
    
    
    
    
    
    
    
    function showResult(){
    
    
    document.querySelector(".card.shadow-lg").style.display="none";
    
    resultCard.style.display="block";
    
    
    
    let highest =
    
    Object.keys(scores).reduce((a,b)=>
    
    scores[a] > scores[b] ? a:b
    
    );
    
    
    
    
    
    
    if(highest === "college"){
    
    
    resultTitle.innerHTML =
    "🎓 College Path";
    
    
    resultDescription.innerHTML =
    
    "Your answers show that continuing education may match your goals. Explore universities, courses, scholarships, and admission requirements.";
    
    
    resultButton.href = "college.html";
    
    
    }
    
    
    
    
    
    else if(highest === "work"){
    
    
    resultTitle.innerHTML =
    "💼 Work First Path";
    
    
    resultDescription.innerHTML =
    
    "You may benefit from gaining professional experience, building skills, and exploring employment opportunities.";
    
    
    resultButton.href = "work.html";
    
    
    }
    
    
    
    
    
    else{
    
    
    resultTitle.innerHTML =
    "🌱 Gap Year Path";
    
    
    resultDescription.innerHTML =
    
    "A productive gap year may help you develop skills through training, volunteering, certifications, and personal growth.";
    
    
    resultButton.href = "gap-year.html";
    
    
    }
    
    
    
    
    resultButton.style.display="inline-block";
    
    
    progressBar.style.width="100%";
    
    
    progressBar.innerHTML="100%";
    
    
    }