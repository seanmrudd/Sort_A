var config = {
  apiKey: "AIzaSyAIQTk0muzBb4lnRYLw5EOqW-c8NyNPAY0",
  authDomain: "lista-d3a6d.firebaseapp.com",
  databaseURL: "https://lista-d3a6d.firebaseio.com",
  projectId: "lista-d3a6d",
  storageBucket: "lista-d3a6d.appspot.com",
  messagingSenderId: "264837662672"
};

firebase.initializeApp(config);

var database = firebase.database();


// Event to grab data input and store new list to firebase (add a child)
$("#addListBtn").on("click", function (event) {
  event.preventDefault();

  if ($("#addList").val() != '') {
    var listName = $("#addList").val().trim();
  }

  database.ref().push(listName);
});


// Search button to utilize Wal-Mart API

$('#searchBtn').click(function () {
  event.preventDefault();

  if ($("#itemSearch").val() != '') {
    var item = $("#itemSearch").val().trim();
  }

  function displayItemInfo() {

    var apiKey = 'yetbamnvuptfsnzehnsz99nr';
    var queryURL = 'http://api.walmartlabs.com/v1/search?' + apiKey + '&query=' + item;

    // Creating an AJAX call for the specific gif button being clicked
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);

      // API returns top 5 items
      for (i = 0; i < 5; i++) {
        // Creating a div to hold the item card
        var itemDiv = $("<div class='item-div'>");

        // Storing the item pic
        var itemPic = response.items[i].mediumImage;
        console.log(itemPic);

        var itemName = response.items[i].name;
        console.log(itemPic);

        var itemCat = response.items[i].categoryPath;
        console.log(itemPic);

        var itemPrice = response.items[i].salePrice;
        console.log(itemPic);

        var itemIMG = $("<img>").attr('src', itemPic).attr('id', 'itemPic'[i]);
        console.log(itemIMG)

        var pOne = $("<p>").append(itemIMG);

        var pTwo = $("<p>").text(itemName);

        var pThree = $("<p>").text(itemCat);

        var pFour = $('<p>').text(itemPrice);


        // Displaying the the item information
        //Place information from API into div as cards
        itemDiv.append(pOne);
        itemDiv.append(pTwo);
        itemDiv.append(pThree);
        itemDiv.append(pFour);
        itemDiv.append(itemIMG);

        //Put image and data of items to view
        $("#items-view").append(itemDiv);
      }
    })
  }

  displayItemInfo();

})


// Click pic to pull (name, category, price).val


// Save name, category, price to object

//Clear search bar & clear div

// Save object to firebase list

//Create Firebase event for adding new child to database and a row in the HTML when a item is to list




// http://api.walmartlabs.com/v1/items?apiKey={apiKey}&upc=035000521019
































// $(document).ready(function () {

//     //Listener function to add data to database
//     $("#first_name2").on("ready", function (event) {
//         event.preventDefault();

//         if ($('#first_name2').val().trim() != '') {
//             var newList = $('#newList').val().trim();
//         }

//         addUserList(newList);
//     })

//     //Listener function to retrieve data from database and use it.  I know this is what we did for Firebase, not sure for sql

//     database.ref().on("value", function (childSnapshot) {

//     var listName = data.listName;
//     var listItem = data.listitem;

//     var itemRow = $('<p>')
//     $('#listName').append(listName);
//     $('#listItem').append(listItem);

// })
// })

// $('document').ready(function () {

//     //Add new list to database
//     $('#addList').click(function (event) {
//         event.preventDefault();

//         if ($('#newList').val().trim() != '') {
//             var list = $('#newList').val().trim();
//             var listName = $('<h5>').append(
//                 $('<span>').text(list).attr('id', 'listKey')
//             );
//         }

//         $('#newList').val('');

//         //Instead of putting it to this tag, put data to database
//         $('#hidethis').append(listName);

//         console.log(list);

//         $('.table').show();
//         $('#listForm').show();
//         $('#addList').hide();
//         $('#newList').hide();
//         $('#hidethis').hide();
//     });

//     //Recall list from database and put it on HTML

//     //Add items to list on database
//     $('#addItem').click(function (event) {
//         event.preventDefault();

//         if ($('#newItem').val().trim() != '') {
//             var item = $('#newItem').val().trim();
//             var newRow = $("<tr>").append(
//                 $('<td>').text(item).attr('id', 'itemKey')
//             );
//         }

//         $('#newItem').val('');

//         $('#shoplist').append(newRow);

//         console.log(item);

//     });

//     //Recall items from database list and put it on HTML

//     //Edit List Name

//     //Edit Items

//     //Delete
// })

