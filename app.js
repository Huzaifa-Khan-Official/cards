var recipes = [
    {"publisher":"BBC Good Food","image_url":"http://forkify-api.herokuapp.com/images/4686_MEDIUM0e58.jpg","title":"Chicken biryani"},{"publisher":"All Recipes","image_url":"http://forkify-api.herokuapp.com/images/2125dc09.jpg","title":"Chicken Biryani"},
    {"publisher":"BBC Good Food","image_url":"http://forkify-api.herokuapp.com/images/1397_MEDIUM1258.jpg","title":"Spiced vegetable biryani"},
    {"publisher":"Closet Cooking","image_url":"http://forkify-api.herokuapp.com/images/BBQChickenPizzawithCauliflowerCrust5004699695624ce.jpg","title":"Cauliflower Pizza Crust (with BBQ Chicken Pizza)"},
    {"publisher":"Closet Cooking","image_url":"http://forkify-api.herokuapp.com/images/BBQChickenPizzawithCauliflowerCrust5004699695624ce.jpg","title":"Cauliflower Pizza Crust (with BBQ Chicken Pizza)"},
    {"publisher":"Simply Recipes","image_url":"http://forkify-api.herokuapp.com/images/howtogrillpizzad300x20086a60e1b.jpg","title":"How to Grill Pizza"},
    {"publisher":"All Recipes","image_url":"http://forkify-api.herokuapp.com/images/391236ba85.jpg","title":"Veggie Pizza"},
    {"publisher":"Closet Cooking","image_url":"http://forkify-api.herokuapp.com/images/Pizza2BDip2B12B500c4c0a26c.jpg","title":"Pizza Dip"},{"publisher":"BBC Good Food","image_url":"http://forkify-api.herokuapp.com/images/1649634_MEDIUMd3fc.jpg","title":"Pitta pizzas"},{"publisher":"All Recipes","image_url":"http://forkify-api.herokuapp.com/images/7988559586.jpg","title":"Valentine Pizza"},
    {"publisher":"A Spicy Perspective","image_url":"http://forkify-api.herokuapp.com/images/IMG_4351180x1804f4a.jpg","title":"Greek Pizza"},
    {"publisher":"My Baking Addiction","image_url":"http://forkify-api.herokuapp.com/images/PizzaDip21of14f05.jpg","title":"Pizza Dip"}
]


var rowDiv = document.querySelector(".row");

for (var i = 0; i < recipes.length; i++) {
    var publisher = recipes[i].publisher;
    var image_url = recipes[i].image_url;
    var title = recipes[i].title;
    // colDiv
    var colDiv = document.createElement("div");
    colDiv.setAttribute("class", "col-md-4 col-sm-6 col-12 pt-4");
    // end colDiv
    // cardDiv
    var cardDiv = document.createElement("div");
    cardDiv.setAttribute("class", "card")
    // end cardDiv
    // cardImg
    var cardImg = document.createElement("img");
    cardImg.setAttribute("class", "card-img-top");
    cardImg.setAttribute("src", image_url);
    // end cardImg
    // cardBodyDiv
    var cardBodyDiv = document.createElement("div");
    cardBodyDiv.setAttribute("class", "card-body");
    // end cardBodyDiv
    // cardTitle
    var cardTitle = document.createElement("h5");
    cardTitle.setAttribute("class", "card-title");
    cardTitle.innerHTML = title;
    // end cardTitle
    // cardText
    var cardText = document.createElement("p");
    cardText.setAttribute("class", "card-text")
    cardText.innerHTML = publisher;
    // end cardText
    cardBodyDiv.appendChild(cardText);
    cardBodyDiv.appendChild(cardTitle);
    cardDiv.appendChild(cardImg);
    cardDiv.appendChild(cardBodyDiv);
    colDiv.appendChild(cardDiv);
    rowDiv.appendChild(colDiv);

}