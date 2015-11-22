// Variables
var var_belgium = document.getElementById("belgium");
var var_bouvet_island = document.getElementById("bouvet_island");
var var_japan = document.getElementById("japan");
var var_seychelles = document.getElementById("seychelles");
var var_block_h3 = document.getElementById("block_h3");
var var_block_img = document.getElementById("block_img");
var var_block_content = document.getElementById("block_content");
var block_img_width = 350;
var block_img_height = 250;


// Events
// Belgium event
var_belgium.onclick = function () {
    var_block_h3.innerHTML = "Beigium: Silica Sand Mining";
    var_block_img.src = "img/belgium_mining.jpg";
    var_block_img.width = block_img_width;
    var_block_img.height = block_img_height;
    var_block_content.innerHTML =
        "<p>Aliquam turpis ipsum, commodo at tortor dignissim, convallis iaculis lectus. Phasellus id molestie est. Sed ac pulvinar justo, at ornare erat. Cras vestibulum odio tempor ornare vehicula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam rhoncus nisl at pretium sagittis. Pellentesque sed lacus nec ligula ultricies euismod id nec est. Mauris in nibh neque. Mauris aliquet ac dolor dapibus consectetur. In bibendum efficitur dui, sodales finibus massa tempor et. Sed lacus arcu, venenatis id placerat et, fringilla sed ex. Maecenas vestibulum fermentum cursus. In rhoncus finibus fringilla. Donec luctus, lectus aliquam gravida sagittis, tellus lorem pellentesque nibh, ac venenatis neque libero euismod metus. Etiam non massa malesuada, semper nisi a, sagittis mi. Mauris imperdiet congue nibh, sit amet imperdiet mauris pellentesque non. </p>" +
        "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In rhoncus finibus fringilla. Donec luctus, lectus aliquam gravida sagittis, tellus lorem pellentesque nibh, ac venenatis neque libero euismod metus. Tenetur rerum quod dolor, quibusdam cumque hic mollitia recusandae officia culpa aliquid libero exercitationem aperiam totam architecto. Doloremque alias, rerum cupiditate minima. In rhoncus finibus fringilla. Donec luctus, lectus aliquam gravida sagittis, tellus lorem pellentesque nibh, ac venenatis neque libero euismod metus.</p>";
}

// Bouvet Island event
var_bouvet_island.onclick = function () {
    var_block_h3.innerHTML = "Bouvet Island: Climatic Testing";
    var_block_img.src = "img/bouvet_island_climatic_testing.jpg";
    var_block_img.width = block_img_width;
    var_block_img.height = block_img_height;
    var_block_img.alt = "Bouvet Island Climatic Testing";
    var_block_img.title = "Bouvet Island Climatic Testing";
    var_block_content.innerHTML =
        "<p>In rhoncus finibus fringilla. Donec luctus, lectus aliquam gravida sagittis, tellus lorem pellentesque nibh, ac venenatis neque libero euismod metus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur rerum quod dolor, quibusdam cumque hic mollitia recusandae officia culpa aliquid libero exercitationem aperiam totam architecto. Doloremque alias, rerum cupiditate minima.</p>" +
        "<p>In bibendum efficitur dui, sodales finibus massa tempor et. Sed lacus arcu, venenatis id placerat et, fringilla sed ex. Maecenas vestibulum fermentum cursus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. In rhoncus finibus fringilla. Donec luctus, lectus aliquam gravida sagittis, tellus lorem pellentesque nibh, ac venenatis neque libero euismod metus. Tenetur rerum quod dolor, quibusdam cumque hic mollitia recusandae officia culpa aliquid libero exercitationem aperiam totam architecto. Doloremque alias, rerum cupiditate minima.</p>";
}

// Japan event
var_japan.onclick = function () {
    var_block_h3.innerHTML = "Japan: Iron Mine";
    var_block_img.src = "img/japan_iron-mine.jpg";
    var_block_img.width = block_img_width;
    var_block_img.height = block_img_height;
    var_block_img.alt = "Japan Iron Mine";
    var_block_img.title = "Japan Iron Mine";
    var_block_content.innerHTML =
        "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In bibendum efficitur dui, sodales finibus massa tempor et. Sed lacus arcu, venenatis id placerat et, fringilla sed ex. Maecenas vestibulum fermentum cursus.Tenetur rerum quod dolor, quibusdam cumque hic mollitia recusandae officia culpa aliquid libero exercitationem aperiam totam architecto. Doloremque alias, rerum cupiditate minima.</p>" +
        "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur rerum quod dolor, quibusdam cumque hic mollitia recusandae officia culpa aliquid libero exercitationem aperiam totam architecto. Doloremque alias, rerum cupiditate minima.</p>";
}

// Japan event
var_seychelles.onclick = function () {
    var_block_h3.innerHTML = "Seychelles: Oil Drilling";
    var_block_img.src = "img/off_shore_drilling.jpg";
    var_block_img.width = block_img_width;
    var_block_img.height = block_img_height;
    var_block_img.alt = "Seychelles Oil Drilling";
    var_block_img.title = "Seychelles Oil Drilling";
    var_block_content.innerHTML =
        "<p>In bibendum efficitur dui, sodales finibus massa tempor et. Sed lacus arcu, venenatis id placerat et, fringilla sed ex. Maecenas vestibulum fermentum cursus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur rerum quod dolor, quibusdam cumque hic mollitia recusandae officia culpa aliquid libero exercitationem aperiam totam architecto. Doloremque alias, rerum cupiditate minima.</p>" +
        "<p>In rhoncus finibus fringilla. Donec luctus, lectus aliquam gravida sagittis, tellus lorem pellentesque nibh, ac venenatis neque libero euismod metus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur rerum quod dolor, quibusdam cumque hic mollitia recusandae officia culpa aliquid libero exercitationem aperiam totam architecto. Doloremque alias, rerum cupiditate minima.</p>";
}



// Belgium Flag
// Flag rendering for Belgium
var belgium_canvas = window.document.getElementById("belgium");
var stage = belgium_canvas.getContext("2d");
    // Outline
stage.strokeRect(10, 10, 300, 200);
    // left fill black
stage.fillStyle = 'black';
stage.fillRect(10, 10, 100, 200)
    // center fill white
stage.fillStyle = 'white';
stage.fillRect(110, 10, 100, 200)
    // right fill red
stage.fillStyle = 'red';
stage.fillRect(210, 10, 100, 200)

// Bouvet Island Flag 
// Flag rendering for Bouvet Island
var bouvet_island_canvas = window.document.getElementById("bouvet_island");
var stage = bouvet_island_canvas.getContext("2d");
    // Outline
stage.strokeRect(10, 10, 300, 200);
    // left fill black
stage.fillStyle = 'red';
stage.fillRect(10, 10, 300, 200)
    // vertical fill white
stage.fillStyle = 'white';
stage.fillRect(80, 10, 60, 200)
    // horizontal fill white
stage.fillStyle = 'white';
stage.fillRect(10, 80, 300, 60)
    // vertical fill darkblue
stage.fillStyle = 'darkblue';
stage.fillRect(95, 10, 30, 200)
    // horizontal fill darkblue
stage.fillStyle = 'darkblue';
stage.fillRect(10, 95, 300, 30)

// Japan Flag 
// Flag rendering for Japan
var japan_canvas = window.document.getElementById("japan");
var stage = japan_canvas.getContext("2d");
    // Outline
stage.strokeRect(10, 10, 300, 200);
    // fill rectangle
stage.fillStyle = 'white';
stage.fillRect(10, 10, 300, 200)
    // create circle
stage.beginPath();
stage.arc(160, 110, 60, 0, 2 * Math.PI);
stage.fillStyle = 'red';
stage.fill();

// Seychelles Flag 
// Flag rendering for Seychelles
var seychelles_canvas = window.document.getElementById("seychelles");
var stage = seychelles_canvas.getContext("2d");
    // Outline
stage.strokeRect(10, 10, 300, 200);

// Draw blue, delete stroke after
stage.beginPath();
stage.moveTo(10, 10);
stage.lineTo(110, 10);
stage.lineTo(10, 210);
stage.closePath();
    //stage.stroke();
stage.fillStyle = 'darkblue';
stage.fill();

// Draw blue, delete stroke after
stage.beginPath();
stage.moveTo(110, 10);
stage.lineTo(220, 10);
stage.lineTo(10, 210);
stage.closePath();
    //stage.stroke();
stage.fillStyle = 'yellow';
stage.fill();

// Draw red, delete stroke after
stage.beginPath();
stage.moveTo(220, 10);
stage.lineTo(310, 10);
stage.lineTo(310, 70);
stage.lineTo(10, 210);
stage.closePath();
    //stage.stroke();
stage.fillStyle = 'red';
stage.fill();

// Draw white, delete stroke after
stage.beginPath();
stage.moveTo(310, 70);
stage.lineTo(310, 140);
stage.lineTo(10, 210);
stage.closePath();
//stage.stroke();
stage.fillStyle = 'white';
stage.fill();

// Draw green, delete stroke after
stage.beginPath();
stage.moveTo(310, 140);
stage.lineTo(310, 210);
stage.lineTo(10, 210);
stage.closePath();
    //stage.stroke();
stage.fillStyle = 'green';
stage.fill();