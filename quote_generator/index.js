const quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
    "If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt",
    "Spread love everywhere you go. Let no one ever come to you without leaving happier. - Mother Teresa",
    "Don't judge each day by the harvest you reap but by the seeds that you plant. - Robert Louis Stevenson",
    "Tell me and I forget. Teach me and I remember. Involve me and I learn. - Benjamin Franklin",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "It is during our darkest moments that we must focus to see the light. - Aristotle",
    "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. - Dr. Seuss",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "It is never too late to be what you might have been. - George Eliot",
    "A champion is defined not by their wins but by how they can recover when they fall. - Serena Williams",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Everything you can imagine is real. - Pablo Picasso",
    "Do one thing every day that scares you. - Eleanor Roosevelt",
    "It's not whether you get knocked down, it's whether you get up. - Vince Lombardi",
    "You can't blame gravity for falling in love. - Albert Einstein",
    "Whatever you are, be a good one. - Abraham Lincoln",
    "The best way to predict the future is to create it. - Abraham Lincoln",
    "Nothing is impossible, the word itself says 'I'm possible'! - Audrey Hepburn",
    "The only thing standing in the way between you and your goal is the story you keep telling yourself as to why you can't achieve it. - Jordan Belfort",
    "Everything has beauty, but not everyone can see. - Confucius",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "With the new day comes new strength and new thoughts. - Eleanor Roosevelt",
    "I can't change the direction of the wind, but I can adjust my sails to always reach my destination. - Jimmy Dean",
    "It always seems impossible until it's done. - Nelson Mandela",
    "Keep your face always toward the sunshine - and shadows will fall behind you. - Walt Whitman",
    "Happiness is not something ready made. It comes from your own actions. - Dalai Lama",
    "Our greatest glory is not in never falling, but in rising every time we fall. - Confucius",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. - Helen Keller",
    "It's not whether you get knocked down, it's whether you get up. - Vince Lombardi",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "What we think, we become. - Buddha",
    "Remember that not getting what you want is sometimes a wonderful stroke of luck. - Dalai Lama",
    "The secret of getting ahead is getting started. - Mark Twain",
    "In order to carry a positive action we must develop here a positive vision. - Dalai Lama",
    "You must be the change you wish to see in the world. - Mahatma Gandhi",
    "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
    "The best revenge is massive success. - Frank Sinatra",
    "I am not a product of my circumstances. I am a product of my decisions. - Stephen Covey",
    "Every child is an artist. The problem is how to remain an artist once he grows up. - Pablo Picasso",
    "You can never cross the ocean until you have the courage to lose sight of the shore. - Christopher Columbus",
    "Either you run the day, or the day runs you. - Jim Rohn",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. - Helen Keller",
    "It always seems impossible until it's done. - Nelson Mandela",
    "The only way to do great work is to love what you do. - Steve Jobs"
  ];
  const usedIdx=new Set()
  const quoteElement=document.getElementById("quote");
  
  
  function generateQuote(){

      if(usedIdx.size>=quotes.length){
        usedIdx.clear()
    }

    while(true)
    { 
        const randIndex=Math.floor(Math.random()*quotes.length);

        if(usedIdx.has(randIndex)) continue
        
      const quote=quotes[randIndex];
      quoteElement.innerHTML=quote;
      usedIdx.add(randIndex)
      break
    }
  }
