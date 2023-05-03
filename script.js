const quotes = [
    "Believe you can and you're halfway there. -Theodore Rooseve",
    "Don't watch the clock; do what it does. Keep going. -Sam Levens",
    "You are never too old to set another goal or to dream a new dream. -C.S. Lew", 
    "The only way to do great work is to love what you do. -Steve Jobs",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. -Christian D. Lars",
    "The future belongs to those who believe in the beauty of their dreams. -Eleanor Rooseve",
    "Don't let yesterday take up too much of today. -Will Roge",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. -Winston Churchi", 
    "I can't change the direction of the wind, but I can adjust my sails to always reach my destination. -Jimmy Dean",
    "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got this. -Chantal Sutherland",
    "The best way to predict the future is to create it. -Peter Drucker",
    "You have to learn the rules of the game. And then you have to play better than anyone else. -Albert Einstein",
    "I have not failed. I've just found 10,000 ways that won't work. -Thomas Edison",
    "If you want to achieve greatness stop asking for permission. -Unknown",
    "The only place where success comes before work is in the dictionary. -Vidal Sassoon",
    "Life is 10% what happens to us and 90% how we react to it. -Charles R. Swindoll",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. -Albert Schweitzer",
    "The only limit to our realization of tomorrow will be our doubts of today. -Franklin D. Roosevelt",
    "You miss 100% of the shots you don't take. -Wayne Gretzky",
    "If you can dream it, you can achieve it. -Zig Ziglar", 
    "It does not matter how slowly you go as long as you do not stop. -Confucius",
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. -Roy T. Bennett",
    "Believe in yourself, and the rest will fall into place. Have faith in your own abilities, work hard, and there is nothing you cannot accomplish. -Brad Henry",
    "Your time is limited, don't waste it living someone else's life. -Steve Jobs",
    "There is only one way to avoid criticism: do nothing, say nothing, and be nothing. -Aristotle",
    "We may encounter many defeats but we must not be defeated. -Maya Angelou",
    "A champion is defined not by their wins but by how they can recover when they fall. -Serena Williams",
    "The biggest risk is not taking any risk. In a world that's changing really quickly, the only strategy that is guaranteed to fail is not taking risks. -Mark Zuckerberg",
    "I am not a product of my circumstances. I am a product of my decisions. -Stephen Covey",
    "Don't let yesterday take up too much of today. - Will Rogers",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "If you want to achieve greatness, stop asking for permission. - Unknown",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
    "If you don't stand for something, you will fall for anything. - Malcolm X",
    "The best way to predict the future is to create it. - Abraham Lincoln",
    "Don't let what you cannot do interfere with what you can do. - John Wooden",
    "Chase your dreams, but always know the road that will lead you home again. - Tim Rice",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "You have within you right now, everything you need to deal with whatever the world can throw at you. - Brian Tracy",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
    "The biggest adventure you can ever take is to live the life of your dreams. - Oprah Winfrey",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got this. - Chantal Sutherland",
    "Success is not about being the best. It's about always getting better. - Behdad Sami",
    "You can't build a reputation on what you are going to do. - Henry Ford",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Believe in your infinite potential. Your only limitations are those you set upon yourself. - Roy T. Bennett",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "It is never too late to be what you might have been. - George Eliot",
    "The only thing standing between you and your goal is the story you keep telling yourself that you can't achieve it. - Jordan Belfort",
    "I have not failed. I've just found 10,000 ways that won't work. - Thomas Edison",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Success is not how high you have climbed, but how you make a positive difference to the world. - Roy T. Bennett",
    "You don't have to be great to start, but you have to start to be great. - Zig Ziglar",
    "Be the change that you wish to see in the world. - Mahatma Gandhi",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "Success is stumbling from failure to failure with no loss of enthusiasm. - Winston S. Churchill",
    
]

const num = parseInt(Math.random() * 60);
const ran = document.getElementById('ran')
ran.innerText = quotes[num];
const newq = document.getElementById('new');
newq.addEventListener('click', () => {
    let num2 = parseInt(Math.random() * 60);
    ran.innerText = quotes[num2];
    console.log('click')
})
console.log(quotes[num])