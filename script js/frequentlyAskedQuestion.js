const frequentlyAsedQuestion = [{
  theQuestion: 'What is Light Burger?',
  theAnswer: 'Light Burger is a restaurant that offers high-quality burgers, pizza and shawarma. We provide delivery services for our customers, and we serve breakfast, lunch, and dinner'
},{
  theQuestion: "What are the ingredients used in Light Burger's burgers?",
  theAnswer: 'Our burgers are made with 100% pure beef, freshly baked buns, and premium toppings. We also offer vegetarian and chicken options for our customers.'
},{
  theQuestion: "What types of pizza does Light Burger offer?",
  theAnswer: 'We offer a wide selection of pizza, including classic margarita, pepperoni, Hawaiian, and vegetarian options. Our pizzas are made with fresh ingredients and baked to perfection.'
},{
  theQuestion: "What is the delivery range for Light Burger?",
  theAnswer: 'We deliver to a wide range of locations within Hawassa. You can check if your address is within our delivery range by entering it on our website or calling our customer service'
},{
  theQuestion: "What is the cancellation policy for orders?",
  theAnswer: 'You can cancel your order any time before it is dispatched for delivery. If you need to cancel your order, please call our customer service as soon as possible. Once your order is dispatched, we cannot cancel it. For more information, please refer to our Cancellation Policy page on our website.'
}];
let askedQuestion = '';


frequentlyAsedQuestion.forEach((faq)=>{  
  askedQuestion += `
  <div class="faq-item">
    <div class="faq-child">
      <h3 class="faq-question">${faq.theQuestion}</h3>
      <i class="fas fa-chevron-down"></i>
    </div>
    <p class="faq-answer">${faq.theAnswer}</p>
  </div>
  `; 
});

document.querySelector('.js-faq-container').innerHTML = askedQuestion;