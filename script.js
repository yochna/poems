const poem = [
    {
      title: "YOUR DESTINY",
      content: `No one can ever take your destiny from you,<br> if you have faith in His power and you have His blessings in you,<br> then you will even get what you have never thought about.`,
    },
    {
      title: "JUST STAY",
      content: `I know, I know you are not ready, so am I.<br>
      But I expected just one thing from you:<br>
      From you to say "JUST STAY."<br>
      Stay for now the way it is going. I will make it happen.<br>
      It's true, never keep expectations with someone.<br>
      They will end up breaking.`,
    },
    {
      title: "AREN'T YOU MY MOON",
      content: `I know.<br>
      People aren't stars,<br>
      Or that anyone could look divine,<br>
      But that day when I saw you,<br>
      You lifted your head<br>
      And smiled.<br>
      The moment time froze.<br>
      Fuck logic—<br>
      You are the brightest<br>
      God damn moon I have ever seen.`,
    },
    {
      title: "WAIT..",
      content: `If you really love a person, learn to wait.<br>
      Maybe you are not meant to be together today but meant to be together in the future.`,
    },
    {
      title: "MY STAR",
      content: `Looking at him,<br>
      I know I am just a girl to him,<br>
      But he was the only guy I see.<br>
      I had a strong feeling.<br>
      Even after I said;<br>
      I never wanted to fall in love,<br>
      But God thought something else,<br>
      And He sent him into my life.<br>
      And at the last act of love,<br>
      I will always be adding him<br>
      in my prayers, My Star!`,
    },
    {
      title: "UNDER THE STARS",
      content: `Here we were<br>
      Under the stars,<br>
      Looking into your eyes.<br>
      Listening to your voice.<br>
      I have never seen someone like him.<br>
      The way he talks,<br>
      The way he smiles in a normal conversation.<br>
      The million-dollar smile doesn't come every time.<br>
      The way he teases me,<br>
      That's what I like about him.<br>
      Talking with him about the things I like,<br>
      And he is getting interested in those things.<br>
      The way his eyes express<br>
      Whenever we had eye contact.`,
    },
    {
      title: "YOU",
      content: `You are the museum<br>
      I don't mind getting lost in it.<br>
      You are the moon<br>
      I can look at you in the darkness.<br>
      You are the ocean<br>
      I don't mind if your waves don't carry me along with you.<br>
      You are the last petal of a rose in a bouquet of hopes.<br>
      You are the first drop of rain that could touch my lips.`,
    },
    {
      title: "MISSES!!",
      content: `I don't miss you when I am alone.<br>
      I miss you in a room full of people.<br>
      I don't miss you when I am bored; I miss you when I am working on something.<br>
      I don't miss you when someone mentions your name because I miss you all day.`,
    },
    {
      title: "PRAY FOR YOU",
      content: `Every time I get a chance to pray for you,<br>
      I do.<br>
      Because no matter how I try to stay away from you,<br>
      Every time I close my eyes, heaven knows<br>
      I pray for you.<br>
      I pray for your happiness. I always will,<br>
      Even if it comes at a cost to never see you again.`,
    },
    {
      title: "HER",
      content: `If you aren't willing to love her,<br>
      Don't put dents on her heart<br>
      That will influence her to believe that she is hard to love.`,
    },
  ];

  function randompoem(){
    const random = Math.floor(Math.random()*poem.length);
    const poems = poem[random];
    console.log("Random poems:", random); 
    console.log("Poem Object:", poems);
  
        console.log("Title:", poems.title);  
        console.log("Content:", poems.content);
        const poemcon = document.querySelector('.con2')

poemcon.innerHTML = `<h2>${poems.title}</h2><p>${poems.content}</p>`
    
   
      }
      let currentpoem =0;
      document.getElementById('nextPoem').addEventListener('click', function() {
        currentpoem = (currentpoem+1)%poem.length
        randompoem(currentpoem)
      });
     
      document.getElementById('prevPoem').addEventListener('click', function() {
        currentpoem = (currentpoem-1)%poem.length
        randompoem(currentpoem)
      });
      const themeButton = document.getElementById("theme-btn");
      const body = document.body;

      themeButton.addEventListener("click", () => {
        body.classList.toggle("dark-theme");
        if (body.classList.contains("dark-theme")) {
          themeButton.textContent = "Light Mode"; 
        } else {
          themeButton.textContent = "Dark Mode"; 
        }
      });
      const displayPoemButton = document.getElementById('displayPoem');
      const generatedPoem = document.getElementById('generatedPoem');
      
      function displayPoem() {
          const poem = document.getElementById('poemInput').value;
          if (poem.trim() === '') {
              generatedPoem.innerText = 'Please write a poem to display.';
              return;
          }
      
         
          generatedPoem.innerText = poem;
      }
      
      displayPoemButton.addEventListener('click', displayPoem);
      
  
      window.onload = () => {
        randompoem(currentpoem);
      };

  

    
