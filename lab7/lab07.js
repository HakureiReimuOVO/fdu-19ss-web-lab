const works = [
    {author: "Micheal Jackson", lifetime: "1022-1055", tips: "Human", photos: ["human1.jpg", "human2.jpg", "human3.jpg"]},
    {author: "Maria JK", lifetime: "1920-2001", tips: "Classical", photos: ["classical1.jpg", "classical2.jpg"]},
    {author: "John Herry UY", lifetime: "1894-1928", tips: "Abstract", photos: ["abstract1.jpg", "abstract2.jpg", "abstract3.jpg", "abstract4.jpg", "abstract5.jpg"]},
    {author: "Coco", lifetime: "1777-1799", tips: "Beauty", photos: ["beauty1.jpg", "beauty2.jpg"]}
    ];

let container = document.getElementsByClassName("flex-container justify")[0];

for (let n = 0; n < works.length; n++) {
    let item = document.createElement("div");
    let author = document.createElement("h3");
    let tips = document.createElement("h4");
    let description = document.createElement("h3");
    let lifetime = document.createElement("h5");
    let box_one = document.createElement("div");
    let box_two = document.createElement("div");
    let button = document.createElement("button");
    item.className = "item";
    author.innerText = works[n].author;
    tips.innerText = "Genre:" + works[n].tips;
    description.innerText = "Popular Photos";
    lifetime.innerText = "Lifetime" + works[n].lifetime;
    button.innerText = "Visit";
    author.style.display = "inline";
    author.style.marginRight = "20px";
    lifetime.style.display = "inline";
    box_one.className = "inner-box";
    box_two.className = "inner-box";
    box_one.append(author, lifetime);
    box_two.append(description);
    for (let m = 0; m < works[n].photos.length; m++) {
        let img = document.createElement("img");
        img.src = works[n].photos[m];
        img.width = 100;
        img.height = 100;
        img.style.margin = "5px";
        box_two.append(img);
    }
    item.append(tips, box_one, box_two, button);
    container.append(item);
}